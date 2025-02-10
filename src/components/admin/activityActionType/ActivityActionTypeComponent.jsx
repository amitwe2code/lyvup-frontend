import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import ActivityActionTypeTable from './ActivityActionTypeTable';
import { useTranslation } from 'react-i18next';
import CustomInput from '../../common/CustomInput';
import Pagination from '../../common/Pagination';
import { getActivityTypes } from '../../../api/api';
import DeleteDialog from '../../common/DeleteDialog';
import Loader from '../../common/Loader';

export default function ActivityActionTypeComponent(props) {
  const { t } = useTranslation();
  const [activityTypes, setActivityTypes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(false)
  const [totalPage, setTotalPage] = useState(1);
  const [search, setSearch] = useState("");
  const [ordering, setOrdering] = useState("");
  const [count, setCount] = useState(0);
  const accessToken = useSelector((state) => state.token.accessToken);

  const getActivityActionTypes = async () => {
    try {
      setLoading(true);
      const response = await getActivityTypes({ accessToken, search, currentPage, pageSize, ordering });
      console.log("activitytypes =>", response.data.data)
      setActivityTypes(response.data.data.results);
      setCount(response.data.data.pagination.count);
      setTotalPage(response.data.data.pagination.total_pages);
      setCurrentPage(response.data.data.pagination.current_page);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getActivityActionTypes();
    props?.setApiCall(false);
  }, [props?.apiCall, pageSize, currentPage, ordering, search]);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader />
        </div>) : (<>
          <div className='flex flex-wrap justify-start gap-4 mb-2 items-center'>
            <CustomInput
              onChange={(e) => setSearch(e.target.value)}
              placeholder="search"
              size="medium"
              className="input"
            />
          </div>
          <ActivityActionTypeTable
            activityTypes={activityTypes}
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
        </>)}
    </>
  )
}
