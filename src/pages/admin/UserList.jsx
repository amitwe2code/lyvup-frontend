/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import BottomNavbar from "../../components/user/BottomNavbar";
import TopBar from "../../components/admin/TopBar";
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
      <BottomNavbar activeTab='user' />
      <div className="mt-14 mb-14 h-[calc(100vh-112px)] overflow-auto w-full border p-3 ">
        <div className=" w-full mb-4">
          <Header heading='User List' setIsOpen={setIsOpen} btnLabel='add User' />
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