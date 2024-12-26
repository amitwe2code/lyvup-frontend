import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleAccountDetail, updateAccount } from "../../api/api";
import TopBar from "./TobBar";
import BottomNavbar from "../user/BottomNavbar";
import AccountForm from "./AccountForm";
import CustomButton from "../common/CustomButton";
import DateFormat from "./DateFormat";
export default function ActivityDetail() {
  const [activity, setActivity] = useState({});
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

  const accountDetails = [
    [
      { label: "Account Name", value: "John Doe" },
      { label: "Account Number", value: "ACCT-2024-001" },
    ],
    [
      { label: "Email Address", value: "john.doe@example.com" },
      { label: "Phone Number", value: "+1 (555) 123-4567" },
    ],
    [
      { label: "Account Type", value: "Premium" },
      { label: "Date Created", value: "January 15, 2024" },
    ],
    [
      { label: "Account Status", value: "Active" },
      { label: "Last Updated", value: "March 20, 2024" },
    ],
  ];

  return (
    <div className="flex ">
      <TopBar />
      <BottomNavbar />

      <>
        <div className="mt-14 mb-14 h-[calc(100vh-112px)] overflow-auto w-full border p-3 ">
          <div className="flex justify-between items-center mb-4 ">
            <h1 className="text-2xl  text-[#039a77] font-bold">
              Account Details
            </h1>
            <div className="text-right">
              <CustomButton
                onClick={handleEditFormOpen}
                className="bg-[#039a77]"
              >
                Edit
              </CustomButton>
            </div>
          </div>
          <div className="h-full">
            <div className="w-80vw mx-auto">

                {/* Card Header */}
                <div className="p-3 bg-[#039a77]">
                  <div className="flex items-center">
                    <div className="ml-4">
                      <h2 className="text-white text-lg font-semibold">
                        Account Information
                      </h2>
                      <p className="text-white opacity-80 text-sm">
                        View and manage your details
                      </p>
                    </div>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="p-6">
                  <div className="space-y-2">
                    {accountDetails.map((row, rowIndex) => (
                      <div key={rowIndex} className="grid grid-cols-2 gap-6">
                        {row.map((detail, colIndex) => (
                          <div key={colIndex} className="border rounded-lg p-4">
                            <p className="text-sm text-gray-600 mb-1">
                              {detail.label}
                            </p>
                            <p
                              className="font-medium"
                              style={{ color: "#039a77" }}
                            >
                              {detail.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
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
    </div>
  );
}
