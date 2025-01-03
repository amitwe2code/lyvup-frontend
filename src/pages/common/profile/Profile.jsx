import { Mail, Phone, MapPin, Languages } from "lucide-react";
import TopBar from "../../../components/admin/TobBar";
import BottomNavbar from "../../../components/user/BottomNavbar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser, updateUser } from "../../../api/api";
import DateFormat from "../../../components/admin/DateFormat";
import CustomButton from "../../../components/common/CustomButton";
import UserRegistrationForm from "../../../components/admin/UserRegistrationForm";
import Loader from "../../../components/common/Loader";

export default function Profile() {
  const [user, setUser] = useState({});
  const [formData, setFormData] = useState({});
  const [Boolean, setBoolean] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const accessToken = useSelector((state) => state.token.accessToken);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  //open updateform and set formdata
  const handleEditFormOpen = () => {
    setFormData({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      userType: user.user_type,
      language_preference: user.language_preference,
    });
    setIsOpen(true);
  };

  //updateUser apicall Function
  const handleUserUpdate = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await updateUser(accessToken, formData, id);
      // alert("user update success");
      setIsOpen(false);
      setBoolean(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  //getUser apicall Function
  const getuser = async () => {
    try {
      setLoading(true);
      const response = await getUser(accessToken, id);
      setUser(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  //useEffect Call
  useEffect(() => {
    getuser();
    setBoolean(false);
  }, [Boolean]);

  return (
    <div className="flex">
      <TopBar />
      <BottomNavbar />
      <div className="mt-14 mb-14 h-[calc(100vh-112px)] w-full overflow-hidden">
        {loading ? (
          <Loader />
        ) : user ? (
          <div className="flex overflow-y-auto w-[800px] h-100 shadow-[0_-2px_10px_rgba(0,0,0,0.1)] p-3 m-auto flex-column position-relative">
            <div className="text-right position-absolute top-5 right-5">
              <CustomButton
                onClick={handleEditFormOpen}
                className="bg-[#039a77]"
              >
                Edit
              </CustomButton>
            </div>

            <div className="my-8 flex-col items-center text-xl justify-center">
              <div className="grid md:grid-cols-2 gap-4 md:gap-10 md:ml-10 space-x-3 mb-6">
                {/* Left Column - Profile Photo */}
                {/* <div className="md:col-span-1 flex items-center md:ml-10">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="w-48 h-48    rounded-full object-cover"
                />
              </div> */}
                <div className="flex flex-col items-left">
                  <h2 className="text-3xl md:text-4xl text-[#039a77] uppercase sm:text-left font-bold">
                    {user?.name}
                  </h2>
                  {/* <div className="hidden md:flex items-center text-xl py-2 space-x-3">
                  <Mail className="text-[#039a77] flex-shrink-0" />
                  <p className=" truncate">{user?.email}</p>
                </div> */}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4  md:gap-10 mb-6">
                <div className="flex items-cente md:ml-10 space-x-3">
                  <Mail className=" text-[#039a77] flex-shrink-0" />
                  <p className="text-gray-700 truncate">{user?.email}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Languages className=" text-[#039a77] flex-shrink-0" />
                  <p className="text-gray-700">{user?.language_preference}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2  mb-6 gap-4 md:gap-10">
                <div className="flex items-center md:ml-10 space-x-3">
                  <Phone className=" text-[#039a77] flex-shrink-0" />
                  <p className="text-gray-700">{user.phone}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className=" text-[#039a77] flex-shrink-0" />
                  <p className="text-gray-700">{user.user_type}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2  mb-6 gap-4 md:gap-10">
                <div className="flex items-center md:ml-10 space-x-3">
                  <Phone className=" text-[#039a77] flex-shrink-0" />
                  <p className="text-gray-700">
                    {<DateFormat updatedAt={user.created_at} />}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className=" text-[#039a77] flex-shrink-0" />
                  <p className="text-gray-700">
                    {<DateFormat updatedAt={user.updated_at} />}
                  </p>
                </div>
              </div>
            </div>
            <UserRegistrationForm
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              formData={formData}
              isUpdate="true"
              setFormData={setFormData}
              handleFormSubmit={handleUserUpdate}
            />
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
