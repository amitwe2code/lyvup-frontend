import React, { useState } from "react";
import { useEffect } from "react";
import BottomNavbar from "../../components/user/BottomNavbar";
import TopBar from "../../components/admin/TobBar";
import { useSelector } from "react-redux";
import { addActivity, deleteActivity,  getActivity, updateUser } from "../../api/api";
import CustomButton from "../../components/common/CustomButton";
import CustomInput from "../../components/common/CustomInput";
import Pagination from "../../components/common/Pagination";
import ActivityTable from "../../components/admin/ActivityTable";
import ActivityForm from "../../components/admin/ActivityForm";
import Select from "react-select";
import AccountDetail from "../../components/admin/AccountDetail";
import ActivityDetail from "../../components/admin/ActivityDetail";

export default function Activity() {
  // state
  const [filter, setFilter] = useState('')
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0)
  const [totalPage, setTotalPage] = useState(0)
  const [ordering, setOrdering] = useState("name");
  const [pageSize, setPageSize] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [activitys, setActivitys] = useState([]);
  const [isBoolean, setIsBoolean] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedActivity,setSelectedActivity]=useState();
  const accessToken = useSelector((state) => state.token.accessToken);
  const [formData, setFormData] = useState({});
  


  //Activity list get/reterview fuction call
  async function getActivityList(accessToken) {
    const response = await getActivity(accessToken, search, currentPage, pageSize, ordering);
    console.log('activity res=>', response)
    setActivitys(response.data.data.results);
    setCount(response.data.data.pagination.count)
    setTotalPage(response.data.data.pagination.total_pages)
    setPageSize(response.data.data.pagination.page_size)
    setCurrentPage(response.data.data.pagination.current_page)
  }

  //Activity delete apiFunction Call
  const handleActivityDelete = async (id) => {
    console.log("activity id =>",id)
    const response = await deleteActivity(accessToken, id);
    console.log("res=>", response);
  };

  //Activity Update apiFunction Call
  const handleActivityUpdate = async (user) => {
    setFormData({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      user_type: user.user_type,
      language_preference: user.language_preference,
    });
    setIsOpen(true);
  };
  //newActivity add apifunction Call
  const handleActivityAdd = async (e) => {
    e.preventDefault();

    console.log("form data in activity =>",formData)
    
   
    if (
      e.target.id == "" ||
      e.target.id == "undefined" ||
      e.target.id == "null"
    ) {
      const response = await addActivity(accessToken, formData);
      console.log("response=", response);
      setFormData("");
    } else {
      console.log("passed data=>", formData);
      const response = await updateUser(accessToken, formData, e.target.id);
      console.log("response=", response);
      // alert("user update success");
    }
    setIsBoolean(true)
    setIsOpen(false);
  };



  // //useEffect
  useEffect(() => {
    getActivityList(accessToken);
    setIsBoolean(false);
  }, []);

  return (
    <div className="flex">
      <TopBar />
      <BottomNavbar />
      <div className="mt-14 mb-14 h-[calc(100vh-112px)] overflow-auto w-full border p-3 ">
        <div className="flex h-auto w-full flex-col md:flex-row justify-between">
          <div className="md:w-1/2">
            <h3 className="text-2xl  font-bold"> Activity</h3>
          </div>
          <div className="md:w-1/2 flex flex-wrap justify-start md:justify-end ">
            <CustomInput
              onChange={(e) => setSearch(e.target.value)}
              placeholder="search"
              size="medium"
              className="border m-1  rounded-md "
            />
            <CustomButton className="my-1" onClick={() => setIsOpen(true)}>
              Add Activity
            </CustomButton>
          </div>
        </div>


        <div className=" flex h-auto justify-start my-2 items-center">
          <div className="inline-flex gap-3 rounded-md" role="group">
            <Select

              name="label"
              placeholder='-label- '
              id="label"
              // onChange={handleFilter}
              className=" rounded-none border-none sm:w-48"
              isClearable
            />
            <Select
              placeholder='-type-'
              name="type"
              id="type"
              // onChange={handleFilter}
              className="text-capitalize  sm:w-48"
              isClearable
            />
          </div>
        </div>
        <div className="my-1 h-full flex-grow flex gap-1 ">
          <div className="w-3/5 h-full overflow-y-scroll">
            <ActivityTable
              activitys={activitys}
              setOrdering={setOrdering}
              handleActivityDelete={handleActivityDelete}
              handleActivityUpdate={handleActivityUpdate}
              setSelectedActivity={setSelectedActivity}
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
          {/* <div className="w-2/5 max-h-full overflow-y-scroll">
            <ActivityDetail activity={selectedActivity} />

          </div> */}
        </div>
      </div>

      <ActivityForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setFormData={setFormData}
        handleFormSubmit={handleActivityAdd}
      />

      {/* </div> */}
    </div>
  );
}
