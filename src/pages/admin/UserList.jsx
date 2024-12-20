import React, { useState } from "react";
import { useEffect } from "react";
import BottomNavbar from "../../components/user/BottomNavbar";
import TopBar from "../../components/admin/TobBar";
import UserTable from "../../components/admin/UserTable";
import { useSelector } from "react-redux";
import { addUser, deleteUser, getUsers, updateUser } from "../../api/api";
import CustomButton from "../../components/common/CustomButton";
import CustomInput from "../../components/common/CustomInput";
import UserRegistrationForm from "../../components/admin/UserRegistrationForm";

export default function UserList() {
  // state
  const [search, setSearch] = useState("");
  const [userType, setUserType] = useState("");
//   const [ordering, setOrdering] = useState("name");
  const [users, setUsers] = useState([]);
  const [isBoolean, setIsBoolean] = useState(true);
  const [render, setRender] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const accessToken = useSelector((state) => state.accessToken);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    userType: "",
    language_preference: "",
  });
  
  //user list get/reterview fuction call
  async function getUserList(accessToken) {
    const response = await getUsers(accessToken, search, userType);
    console.log('res=>', response)
    setUsers(response.data.data.results);
  }

  //user delete apiFunction Call
  const handleUserDelete = async (e) => {
    const response = await deleteUser(accessToken, e.target.id);
    console.log("res=>", response);
    alert("delete user with id ", e.target.id);
  };

  //user Update apiFunction Call
  const handleUserUpdate = async (user) => {
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

  //newUser add apifunction Call
  const handleUserAdd = async (e) => {
    e.preventDefault();
    console.log("id=", e.target.id);
    console.log("user id is =>", e.target.id);
    if (
      e.target.id == "" ||
      e.target.id == "undefined" ||
      e.target.id == "null"
    ) {
      const response = await addUser(accessToken, formData);
      console.log("response=", response);
      alert("user add success");
      setFormData("");
    } else {
      console.log("passed data=>", formData);
      const response = await updateUser(accessToken, formData, e.target.id);
      console.log("response=", response);
      alert("user update success");
    }
    setIsOpen(false);
  };

  //useEffect
  useEffect(() => {
    getUserList(accessToken);
    setIsBoolean(false);
  }, [isBoolean, search, userType]);

  return (
    <div className="flex">
      <TopBar />
      <BottomNavbar />
      <div className="mt-14 mb-14 h-[calc(100vh-112px)] overflow-auto w-full border p-3 ">
        <div className="flex w-full flex-col md:flex-row justify-between">
          <div className="md:w-1/2">
            <h3 className="text-2xl  font-bold"> User List</h3>
          </div>
          <div className="md:w-1/2 flex flex-wrap justify-start md:justify-end ">
            {/* <select
              name="ordering"
              id="ordering"
              onChange={(e) => setOrdering(e.target.value)}
              className="border m-1  rounded-md "
            >
              <option value="name">name_asc</option>
              <option value="-name">name_desc</option>
              <option value="id">id_asc</option>
              <option value="-id">id_desc</option>
              <option value="email">email_asc</option>
              <option value="-email">email_desc</option>
            </select> */}
            <CustomInput
              onChange={(e) => setSe(e.target.value)}
              placeholder="search"
              size="medium"
              className="border m-1  rounded-md "
            />
            <CustomButton className="my-1" onClick={() => setIsOpen(true)}>
              Add User
            </CustomButton>
          </div>
        </div>


        <div className="flex justify-start my-2 items-center">
            <div className="inline-flex rounded-md" role="group">
                <CustomButton 
                    className={`w-40 px-10 capitalize rounded-none border-r-0 ${userType === 'admin' ? 'bg-[#039a77] text-white' : ''}`} 
                    variant="outline" 
                    onClick={() => setUserType("admin")}
                >
                    admin
                </CustomButton>
                <CustomButton 
                    className={`w-40 px-10 capitalize rounded-none ${userType === 'patient' ? 'bg-[#039a77] text-white' : ''}`} 
                    variant="outline" 
                    onClick={() => setUserType("patient")}
                >
                    patient
                </CustomButton>
            </div>
        </div>
        <div className="my-1">
          <UserTable
            users={users}
            handleUserDelete={handleUserDelete}
            handleUserUpdate={handleUserUpdate}
          />
        </div>
      </div>

      <UserRegistrationForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        formData={formData}
        setFormData={setFormData}
        handleFormSubmit={handleUserAdd}
      />
    </div>
  );
}
