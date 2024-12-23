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
  console.log('access token=>',accessToken)
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
    alert("user update success");
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
            <div className="text-right">
              <CustomButton
                onClick={handleEditFormOpen}
                className="bg-[#039a77]"
              >
                Edit
              </CustomButton>
            </div>
            <div className="md:my-10">
                <h1 className="text-2xl md:px-10 font-bold">Account Details</h1>
            </div>
            <div className="my-3">

            <div className="grid md:grid-cols-2  md:mb-6 gap-4 md:gap-10">
                <div className="flex  md:ml-10 space-x-3">
                 <span className="text-lg text-[#039a77] text-bold">Account Name :</span>
                  <p className="text-lg text-gray-700">
                    {account.account_name}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                <span className="text-lg text-[#039a77] text-bold">Account type :</span>
                  <p className="text-gray-700">
                    {account.account_type}
                  </p>
                </div>
            </div>
            
            <div className="grid md:grid-cols-2  mb-6 gap-4 md:gap-10">
                <div className="flex  md:ml-10 space-x-3">
                 <span className="text-lg text-[#039a77] text-bold">Organization Id :</span>
                  <p className="text-gray-700">
                    {account.organization_id}
                  </p>
                </div>
                <div className="flex space-x-3">
                <span className="text-lg text-[#039a77] text-bold">Language :</span>
                  <p className="text-gray-700">
                    {account.language}
                  </p>
                </div>
            </div>
            <div className="grid md:grid-cols-2  md:mb-6 gap-4 md:gap-10">
                <div className="flex  md:ml-10 space-x-3">
                 <span className="text-lg text-[#039a77] text-bold">Team Leader Id :</span>
                  <p className="text-lg text-gray-700">
                    {account.team_leader_id}
                  </p>
                </div>
                <div className="flex  space-x-3">
                 <span className="text-lg text-[#039a77] text-bold">Created At :</span>
                  <p className="text-gray-700">
                    {<DateFormat updatedAt={account.created_at} />}
                  </p>
                </div>
            </div>
                
            <div className="grid md:grid-cols-2  mb-6 gap-4 md:gap-10">
               
                <div className="flex md:ml-10 space-x-3">
                <span className="text-lg text-[#039a77] text-bold">Updated At :</span>
                  <p className="text-gray-700">
                    {<DateFormat updatedAt={account.updated_at} />}
                  </p>
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
      )}
    </div>
  
  );
}
