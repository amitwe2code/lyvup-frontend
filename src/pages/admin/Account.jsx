import React, { useState, useEffect } from "react";
import AccountTable from "../../components/admin/AccountTable";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import TopBar from "../../components/admin/TobBar";
import BottomNavbar from "../../components/user/BottomNavbar";
import CustomInput from "../../components/common/CustomInput";
import CustomButton from "../../components/common/CustomButton";
import Pagination from "../../components/common/Pagination";
import UserRegistrationForm from "../../components/admin/UserRegistrationForm";
import {
  addAccount,
  deleteAccount,
  getAllAccountDetail,
  updateAccount,
} from "../../api/api";
import AccountForm from "../../components/admin/AccountForm";

export default function Account() {
  const { t } = useTranslation();
  const [accounts, setAccounts] = useState([]);
  const [isBoolean, setIsBoolean] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPage, setTotalPage] = useState(1);
  const [search, setSearch] = useState("");
  const [ordering, setOrdering] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({
    organization_id: "",
    account_name: "",
    account_type: "",
    team_leader_id: "",
    language: "",
  });
  const accessToken = useSelector((state) => state.token.accessToken);

  const getAccounts = async () => {
    console.log("accessToken=>", accessToken);
    const response = await getAllAccountDetail(accessToken,search,currentPage, pageSize,ordering);
    console.log("response=>", response);
     setAccounts(response.data.data.results);
     setTotalPage(response.data.data.pagination.total_pages);
     setCount(response.data.data.pagination.count);
  };
  const handleAccountUpdate = async (account) => {
    setFormData({
      id: account.id,
      organization_id: account.organization_id,
      account_name: account.account_name,
      account_type: account.account_type,
      team_leader_id: account.team_leader_id,
      language: account.language,
    });
    setIsOpen(true);
  };

  const handleAccountDelete = async (e) => {
    const response = await deleteAccount(accessToken, e.currentTarget.id);
    console.log("res=>", response);
    alert("delete user with id ", e.target.id);
    setIsBoolean(true);
  };

  const handleAccountAdd = async (e) => {
    e.preventDefault();
    console.log("id=", e.target.id);
    console.log("account id is =>", e.target.id);
    if (
      e.target.id == "" ||
      e.target.id == "undefined" ||
      e.target.id == "null"
    ) {
      const response = await addAccount(accessToken, formData);
      console.log("response=", response);
      alert("user add success");
      setFormData("");
    } else {
      console.log("passed data=>", formData);
      const response = await updateAccount(accessToken, formData, e.target.id);
      console.log("response=", response);
      alert("user update success");
    }
    setIsBoolean(true);
    setIsOpen(false);
    setFormData({
      organization_id: "",
      account_name: "",
      account_type: "",
      team_leader_id: "",
      language: "",
    });
  };

  useEffect(() => {
    getAccounts();
    setIsBoolean(false);
  }, [isBoolean, pageSize, currentPage, ordering, search]);

  return (
    <div className="flex">
      <TopBar />
      <BottomNavbar />
      <div className="mt-14 mb-14 h-[calc(100vh-112px)] overflow-auto w-full border p-3 ">
        <div className="flex w-full flex-col md:flex-row justify-between">
          <div className="md:w-1/2">
            <h3 className="text-2xl  font-bold">Accounts</h3>
          </div>
          <div className="md:w-1/2 flex flex-wrap justify-start md:justify-end ">
            <CustomInput
              onChange={(e) => setSearch(e.target.value)}
              placeholder="search"
              size="medium"
              className="border m-1  rounded-md "
            />
            <CustomButton className="my-1" onClick={() => setIsOpen(true)}>
              add account
            </CustomButton>
          </div>
        </div>

        {/* 
      <div className=" flex justify-start my-2 items-center">
          <div className="inline-flex rounded-md" role="group">
              <CustomButton 
                  className={`sm:w-40 px-10 capitalize rounded-none border-r-0 ${userType === 'admin' ? 'bg-[#039a77] text-white' : ''}`} 
                  variant="outline" 
                  onClick={() => setUserType("admin")}
              >
                  admin
              </CustomButton>
              <CustomButton 
                  className={`sm:w-40 px-10 capitalize rounded-none ${userType === 'patient' ? 'bg-[#039a77] text-white' : ''}`} 
                  variant="outline" 
                  onClick={() => setUserType("patient")}
              >
                  patient
              </CustomButton>
          </div>
      </div> */}
        <div className="my-1">
          <AccountTable
            accounts={accounts}
            setOrdering={setOrdering}
            handleAccountDelete={handleAccountDelete}
            handleAccountUpdate={handleAccountUpdate}
          />
          <Pagination
          nPages={totalPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          total={count}
          count={pageSize}
          setPageSize={setPageSize}
        />
        </div>
      </div>

      <AccountForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        formData={formData}
        setFormData={setFormData}
        handleFormSubmit={handleAccountAdd}
      />
    </div>
  );
}
