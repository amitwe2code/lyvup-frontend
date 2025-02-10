import {
  Mail,
  Phone,
  MapPin,
  Languages,
  PenIcon,
  PenBoxIcon,
  UserIcon,
} from "lucide-react";
import TopBar from "../../../components/admin/TopBar";
import BottomNavbar from "../../../components/user/BottomNavbar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser, updateUser } from "../../../api/api";
import CustomButton from "../../../components/common/CustomButton";
import Loader from "../../../components/common/Loader";
import UserModelForm from "../../../components/admin/modelforms/UserModelForm";

export default function Profile() {
  const [user, setUser] = useState({});
  const [apiCall, setApiCall] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const accessToken = useSelector((state) => state.token.accessToken);
  const { id } = useParams();
  


  const [loading, setLoading] = useState(false);
  
  //getUser apicall Function
  const getuser = async (id) => {
    try {
      setLoading(true);
      const response = await getUser(accessToken, id=id);
      setUser(response.data.data);
      console.log("userData", response.data.data);
    } catch (error) { 
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  //useEffect Call
  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem('user'));
    getuser(userdata.id);
    setApiCall(false);
  }, [apiCall]);

  return (
    <div className="flex">
      <TopBar />
      <BottomNavbar />
      <div className="mt-14 mb-14 h-[calc(100vh-112px)] w-full overflow-hidden">
        {loading ? (
          <Loader />
        ) : user ? (
          <div className="overflow-auto w-full    p-3">
            <div className="text-right mb-3">
              <CustomButton
                onClick={()=>setIsOpen(true)}
                className="bg-none border-none text-[#17686d]"
              >
                <PenBoxIcon />
              </CustomButton>
            </div>
            <div className=" flex items-center overflow-auto justify-center">
              <div className="w-3/4 p-5 border rounded">
                <div className=" grid sm:grid-cols-2 gap-4">
                  {/* Left Column - Profile Photo */}
                  <div className="md:col-span-1 flex items-center md:ml-10">
                    <h2 className="text-2xl md:text-4xl text-[#17686d] capitalize  mr-3 sm:text-left ">
                      <UserIcon />
                    </h2>
                    <div className="flex capitalize items-center text-xl  space-x-3">
                      <p className=" truncate">{user?.name}</p>
                    </div>
                    {/* <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="w-48 h-48    rounded-full object-cover"
                /> */}
                  </div>
                </div>
                <div className="my-8 flex-col items-center text-xl  justify-center">
                  <div className="grid   sm:grid-cols-2 gap-4  md:gap-10 mb-6">
                    <div className="flex w-full overflow-auto scroll_none items-cente md:ml-10 space-x-3">
                      <Mail className=" text-[#17686d] flex-shrink-0 overflow-auto" />
                      <p className="text-gray-700  truncate">{user?.email}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Languages className=" text-[#17686d] flex-shrink-0" />
                      <p className="text-gray-700">
                        {user?.language_preference}
                      </p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2  mb-6 gap-4 md:gap-10">
                    <div className="flex items-center md:ml-10 space-x-3">
                      <Phone className=" text-[#17686d] flex-shrink-0" />
                      <p className="text-gray-700">{user.phone}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className=" text-[#17686d] flex-shrink-0" />
                      <p className="text-gray-700 bg-gray-200">
                        {user.user_type}
                      </p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2  mb-6 gap-4 md:gap-10">
                    <div className="flex items-center md:ml-10 space-x-3">
                      <Phone className=" text-[#17686d] flex-shrink-0" />
                      <p className="text-gray-700">
                        {/* {<DateFormat updatedAt={user.created_at} />} */}
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className=" text-[#17686d] flex-shrink-0" />
                      <p className="text-gray-700">
                        {/* {<DateFormat updatedAt={user.updated_at} />} */}
                      </p>
                    </div>
                  </div>
                </div>
                <UserModelForm
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        apicall={apiCall}
                        setApiCall={setApiCall}
                        updateUser={user}
                    />
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full flex justify-center items-center">
            <h1>No user data found</h1>
          </div>
        )}
      </div>
    </div>
  );
}
