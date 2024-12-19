import { Mail, Phone, MapPin, Languages } from "lucide-react";
import TopBar from "../../../components/admin/TobBar";
import BottomNavbar from "../../../components/user/BottomNavbar";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getUser } from "../../../api/api";
import DateFormat from "../../../components/admin/DateFormat";
export default function Profile() {

  const [userData, setUserData] = useState({});
  const accessToken = useSelector((state) => state.accessToken);
  const user = JSON.parse(localStorage.getItem("user"));

  console.log("user-----", user);
  //getUser apicall Function
  const getuser = async () => {
    const response = await getUser(accessToken, user?.id);
    console.log("response in profile =>", response);
    setUserData(response.data.data);
  };

  //useEffect Call
  useEffect(() => {
    getuser();
  }, []);

  return (
    <div className="flex ">
      <TopBar />
      <BottomNavbar />
      <div className="mt-14 mb-14 h-[calc(100vh-112px)] overflow-auto w-full border p-3 ">
        <div className="grid md:grid-cols-2 gap-4 md:gap-10">
          {/* Left Column - Profile Photo */}
          <div className="md:col-span-1 bg-gray-50 p-6 flex items-center justify-center">
            <img
              //   src={userData.photoUrl}

              className="max-w-48 max-h-48 md:w-64 md:h-64   rounded-full object-cover shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-6xl text-[#039a77] capitalize  sm:text-left font-bold">
              {userData?.name}
            </h2>
            <div className="hidden md:flex items-center text-xl py-2 space-x-3">
              <Mail className="text-[#039a77] flex-shrink-0" />
              <p className=" truncate">{userData?.email}</p>
            </div>
          </div>
        </div>
        <div className="my-8 flex-col items-center text-xl  justify-center">
          <div className="grid md:grid-cols-2 gap-4  md:gap-10 mb-6">
            <div className="flex items-cente md:ml-10 space-x-3">
              <Mail className=" text-[#039a77] flex-shrink-0" />
              <p className="text-gray-700 truncate">{userData?.email}</p>
            </div>
            <div className="flex items-center space-x-3">
              <Languages className=" text-[#039a77] flex-shrink-0" />
              <p className="text-gray-700">{userData?.language_preference}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2  mb-6 gap-4 md:gap-10">
            <div className="flex items-center md:ml-10 space-x-3">
              <Phone className=" text-[#039a77] flex-shrink-0" />
              <p className="text-gray-700">{userData.phone}</p>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className=" text-[#039a77] flex-shrink-0" />
              <p className="text-gray-700 bg-gray-200">{userData.user_type}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2  mb-6 gap-4 md:gap-10">
            <div className="flex items-center md:ml-10 space-x-3">
              <Phone className=" text-[#039a77] flex-shrink-0" />
              <p className="text-gray-700">
                {<DateFormat updatedAt={userData.created_at} />}
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className=" text-[#039a77] flex-shrink-0" />
              <p className="text-gray-700">
                {<DateFormat updatedAt={userData.updated_at} />}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
