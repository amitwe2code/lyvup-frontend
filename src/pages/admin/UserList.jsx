/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import BottomNavbar from "../../components/user/BottomNavbar";
import TopBar from "../../components/admin/TobBar";
import UserTable from "../../components/admin/users/UserTable";
import { useSelector } from "react-redux";
import { addUser, deleteUser, getUsers, updateUser } from "../../api/api";
import CustomButton from "../../components/common/CustomButton";
import CustomInput from "../../components/common/CustomInput";
import UserRegistrationForm from "../../components/admin/users/UserRegistrationForm";
import Pagination from "../../components/common/Pagination";
import { useNavigate } from 'react-router-dom';
import Loader from "../../components/common/Loader";
import { toast } from "react-toastify";
import UserModelForm from "../../components/admin/modelforms/UserModelForm";
import Header from "../../components/common/Header";
import UserComponent from "../../components/admin/users/UserComponent";

export default function UserList() {
  // state
  const [apiCall, setApiCall] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
 


  
  return (
    <div className="flex">
      <TopBar />
      <BottomNavbar />
      <div className="mt-14 mb-14 h-[calc(100vh-112px)] overflow-auto w-full border p-3 ">
<<<<<<< HEAD
        <div className=" w-full mb-4">
          <Header heading='User List' setIsOpen={setIsOpen} btnLabel='add User' />
=======
        <div className="flex w-full flex-col md:flex-row justify-between">
          <div className="md:w-1/2">
            <h3 className="text-2xl  font-bold"> User List</h3>
          </div>
          <div className="md:w-1/2 flex flex-wrap justify-start md:justify-end ">

            <CustomInput
              onChange={(e) => setSearch(e.target.value)}
              placeholder="search"
              size="medium"
              className="border m-1  rounded-md "
            />
            <CustomButton className="my-1" onClick={() => setIsOpen(true)}>
              Add User
            </CustomButton>
          </div>
        </div>

        
        <div className=" flex justify-start my-2 items-center">
          <div className="inline-flex rounded-md" role="group">
            {(loginUser?.user_type === 'superadmin') && (
              <CustomButton
                className={`sm:w-40 px-10 capitalize rounded-none border-r-0 ${userType === 'admin' ? 'bg-[#039a77] text-white' : ''}`}
                variant="outline"
                onClick={() => setUserType("admin")}
              >
                admin
              </CustomButton>
            )}

            <CustomButton
              className={`sm:w-40 px-10 capitalize rounded-none ${userType === 'patient' ? 'bg-[#039a77] text-white' : ''}`}
              variant="outline"
              onClick={() => setUserType("patient")}
            >
              patient
            </CustomButton>
          </div>
        </div>
        <div className="my-1">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader />
            </div>
          ) : (
            <UserTable
              users={users}
              setOrdering={setOrdering}
              handleUserDelete={handleUserDelete}
              handleUserUpdate={handleUserUpdate}
            />
          )}
          <Pagination
            nPages={totalPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            total={count}
            count={pageSize}
            setPageSize={setPageSize}
          />
>>>>>>> deploy
        </div>
        <UserComponent
          apiCall={apiCall}
          setApiCall={setApiCall}
         />
      </div>
      <UserModelForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setApiCall={setApiCall}
      />
    </div>
  );
}