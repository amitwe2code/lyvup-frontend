import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleAccountDetail, updateAccount } from "../../api/api";
import TopBar from "./TobBar";
import BottomNavbar from "../user/BottomNavbar";
import AccountForm from "./AccountForm";
import CustomButton from "../common/CustomButton";
import DateFormat from "./DateFormat";
export default function AccountDetail() {
  const [account, setAccount] = useState({});
  const [formData, setFormData] = useState({});
  const [Boolean, setBoolean] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const accessToken = useSelector((state) => state.token.accessToken);
  const { id } = useParams();
  console.log("access token=>", accessToken);
  //open updateform and set formdata
  const handleEditFormOpen = () => {
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

  //updateUser apicall Function
  const handleAccountUpdate = async (e) => {
    e.preventDefault();
    const response = await updateAccount(accessToken, formData, id);
    setIsOpen(false);
    setBoolean(true);
  };

  //getUser apicall Function
  const getAccountDetail = async () => {
    const response = await getSingleAccountDetail(accessToken, id);
    console.log("get account response in profile =>", response);
    setAccount(response.data);
  };

  //useEffect Call
  useEffect(() => {
    getAccountDetail();
    setBoolean(false);
  }, [Boolean]);

  return (
    <div className="flex ">
      <TopBar />
      <BottomNavbar />
      {account ? (
        <>
          <div className="mt-14 mb-14 h-[calc(100vh-112px)] overflow-auto w-full border p-3 ">
            <div className="flex justify-between mb-4 ">
              <h1 className="text-2xl  font-bold">Account Details</h1>
              <div className="text-right">
                <CustomButton
                  onClick={handleEditFormOpen}
                  className="bg-[#039a77]"
                >
                  Edit
                </CustomButton>
              </div>
            </div>
            <div className="my-3 flex flex-col  justify-center  ">
              <div className="grid md:grid-cols-2  mb-6 gap-4 md:gap-10">
                <div className="flex items-center  md:ml-10 space-x-3">
                  <span className=" text-[#039a77] flex-shrink-0">Account Name :</span>
                  <p className="text-gray-700">{account.account_name}</p>
                </div>
                <div className="flex items-center md:ml-10 space-x-3">
                  <span className=" text-[#039a77] flex-shrink-0" >Account Type</span>
                  <p className="text-gray-700 bg-gray-200">{account.account_type}</p>
                </div>
                <div className="flex items-center md:ml-10 space-x-3">
                  <span className=" text-[#039a77] flex-shrink-0">Language</span>
                  <p className="text-gray-700">{account.language}</p>
                </div>
                <div className="flex items-center md:ml-10  space-x-3">
                  <span className=" text-[#039a77] flex-shrink-0">Organization ID</span>
                  <p className="text-gray-700">{account.organization_id}</p>
                </div>
                <div className="flex items-center md:ml-10 space-x-3">
                  <span className=" text-[#039a77] flex-shrink-0">Team leader ID</span>
                  <p className="text-gray-700">{account.team_leader_id}</p>
                </div>
              </div>

            </div>
          </div>


          <AccountForm
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            formData={formData}
            setFormData={setFormData}
            handleFormSubmit={handleAccountUpdate}
          />
        </>
      ) : (
        <>
          <h1 className="mt-16">loading....</h1>
        </>
      )
      }
    </div >
  );
}
