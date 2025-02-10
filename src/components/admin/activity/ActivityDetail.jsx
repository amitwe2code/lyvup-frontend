import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleAccountDetail, updateAccount } from "../../../api/api";
import TopBar from "../TobBar";
import BottomNavbar from "../../user/BottomNavbar";
import AccountForm from "./AccountForm";
import CustomButton from "../../common/CustomButton";
import DateFormat from "../DateFormat";
export default function ActivityDetail() {
  const [account, setAccount] = useState({});
  const [formData, setFormData] = useState({});
  const [Boolean, setBoolean] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const accessToken = useSelector((state) => state.token.accessToken);
  const { id } = useParams();
  console.log("access token=>", accessToken);
  
  //updateUser apicall Function
  const handleAccountUpdate = async (e) => {
    e.preventDefault();
    const response = await updateAccount(accessToken, formData, id);
    // alert("user update success");
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
          <div className="my-1   w-full border p-3 ">
            <div className="flex justify-between mb-4 ">
              <h1 className="text-2xl  font-bold">Activity Details</h1>
              <div className="text-right">
                <CustomButton
                  // onClick={handleEditFormOpen}
                  className="bg-[#039a77]"
                >
                  Edit
                </CustomButton>
              </div>
            </div>
            <div className="my-3 flex flex-col  justify-center  ">
              <div className="grid md:grid-cols-2  mb-6 gap-4 md:gap-10">
                <div className="flex flex-col   ">
                  <p className="text-gray-700 text-start">Account Name </p>
                  <span className=" text-[#039a77] flex-shrink-0">Amit </span>
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-700 text-start">Account Name </p>
                  <span className=" text-[#039a77] flex-shrink-0">Amit </span>
                </div>
                <div className="flex flex-col ">
                  <p className="text-gray-700 text-start">Account Name </p>
                  <span className=" text-[#039a77] flex-shrink-0">Amit </span>
                </div>
                <div className="flex flex-col ">
                  <p className="text-gray-700 text-start">Account Name </p>
                  <span className=" text-[#039a77] flex-shrink-0">Amit </span>
                </div>
                <div className="flex flex-col ">
                  <p className="text-gray-700 text-start">Account Name </p>
                  <span className=" text-[#039a77] flex-shrink-0">Amit </span>
                </div>
                <div className="flex flex-col ">
                  <p className="text-gray-700 text-start">Account Name </p>
                  <span className=" text-[#039a77] flex-shrink-0">Amit </span>
                </div> <div className="flex flex-col ">
                  <p className="text-gray-700 text-start">Account Name </p>
                  <span className=" text-[#039a77] flex-shrink-0">Amit </span>
                </div> <div className="flex flex-col ">
                  <p className="text-gray-700 text-start">Account Name </p>
                  <span className=" text-[#039a77] flex-shrink-0">Amit </span>
                </div> <div className="flex flex-col ">
                  <p className="text-gray-700 text-start">Account Name </p>
                  <span className=" text-[#039a77] flex-shrink-0">Amit </span>
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
