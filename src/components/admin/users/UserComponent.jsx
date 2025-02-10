import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Pagination from '../../common/Pagination';
import UserTable from './UserTable';
import Loader from '../../common/Loader';
import CustomButton from '../../common/CustomButton';
import CustomInput from '../../common/CustomInput';
import { getUsers } from '../../../api/api';

export default function UserComponent(props) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [count, setCount] = useState(0)
  const [totalPage, setTotalPage] = useState(0)
  const [ordering, setOrdering] = useState("name");
  const [pageSize, setPageSize] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [loginUser, setLoginUser] = useState(null);
  const [users, setUsers] = useState([]);
  const accessToken = useSelector((state) => state.token.accessToken);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  //user list get/reterview fuction call
  async function getUserModelApiCall(accessToken) {
    try {
      setLoading(true);
      const response = await getUsers({accessToken, search, filter, currentPage, pageSize, ordering});
      let filteredUsers = response.data.data.results;
      setUsers(filteredUsers);
      setCount(response.data.data.pagination.count);
      setTotalPage(response.data.data.pagination.total_pages);
      setCurrentPage(response.data.data.pagination.current_page);
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  }



  //useEffect
  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem('user'));
    if (userdata) {
      setLoginUser(userdata);
      if (userdata.user_type === 'patient') {
        navigate('/');
        return;
      }
      if (userdata.user_type === 'admin') {
        setFilter('patient');
      }
    }
  }, []);

  useEffect(() => {
    if (loginUser?.user_type === '') {
      setFilter('patient');
    }
    getUserModelApiCall(accessToken);
    props?.setApiCall(false);
  }, [props?.apiCall, search, filter, currentPage, pageSize, ordering]);

  if (!loginUser || loginUser.user_type === 'patient') {
    return null;
  }


  return (
    <>
    {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader />
        </div>
      ) : (<> 
      <div className='flex flex-wrap justify-start gap-4 mb-2 items-center'>
        <div className="inline-flex rounded-md" role="group">
          <CustomButton
            className={`sm:w-40 px-10 capitalize rounded-none border-r-0 ${filter === '' ? 'btn_theme_color' : ''}`}
            variant="outline"
            onClick={() => setFilter("")}
          >
            all
          </CustomButton>
          {(loginUser?.user_type === 'superadmin') && (

            <CustomButton
              className={`sm:w-40 px-10 capitalize rounded-none border-r-0 ${filter === 'admin' ? 'btn_theme_color' : ''}`}
              variant="outline"
              onClick={() => setFilter("admin")}
            >
              admin
            </CustomButton>
          )}

          <CustomButton
            className={`sm:w-40 px-10 capitalize rounded-none ${filter === 'patient' ? 'btn_theme_color' : ''}`}
            variant="outline"
            onClick={() => setFilter("patient")}
          >
            patient
          </CustomButton>
        </div>
        <CustomInput
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search"
          size="medium"
          className="input "
        />
      </div>
      
        <UserTable
          users={users}
          ordering={ordering}
          setOrdering={setOrdering}
          apiCall={props?.apiCall}
          setApiCall={props?.setApiCall}
        />
    
      <Pagination
        nPages={totalPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        total={count}
        count={pageSize}
        setPageSize={setPageSize}
      />

      </>

    )}


</>

  )
}
