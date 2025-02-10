import { useState, useEffect } from "react";
import AccountTable from "../../components/admin/account/AccountTable";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import TopBar from "../../components/admin/TopBar";
import BottomNavbar from "../../components/user/BottomNavbar";
import CustomInput from "../../components/common/CustomInput";
import CustomButton from "../../components/common/CustomButton";
import AccountComponent from "../../components/admin/account/AccountComponent";
import AccountModelForm from "../../components/admin/modelforms/AccountModelForm";
import Header from "../../components/common/Header";

export default function Account() {
  // state
  const [apiCall, setApiCall] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <TopBar />
      <BottomNavbar activeTab='account' />
      <div className="mt-14 mb-14 h-[calc(100vh-112px)] scroll_none overflow-auto w-full border p-3 ">
        <div className=" w-full mb-4">
          <Header heading='Accounts' setIsOpen={setIsOpen} btnLabel='add Account' />
        </div>
        <AccountComponent
          apiCall={apiCall}
          setApiCall={setApiCall}
        />
      </div>
      <AccountModelForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setApiCall={setApiCall}
      />
    </div>

  );
}
