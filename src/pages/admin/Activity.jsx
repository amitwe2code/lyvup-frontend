import React, { useState } from "react";
import { useEffect } from "react";
import BottomNavbar from "../../components/user/BottomNavbar";
import TopBar from "../../components/admin/TobBar";
import { useSelector } from "react-redux";
import {
  addActivity,
  deleteActivity,
  getActivity,
  updateActivity,
} from "../../api/api";
import CustomButton from "../../components/common/CustomButton";
import CustomInput from "../../components/common/CustomInput";
import Pagination from "../../components/common/Pagination";
import ActivityTable from "../../components/admin/activity/ActivityTable";
import ActivityForm from "../../components/admin/activity/ActivityForm";
import Select from "react-select";
// import ActivityDetail from "../../components/admin/ActivityDetail";
import useValidation from "../../components/common/UseValidation";
import ActivityComponent from "../../components/admin/activity/ActivityComponent";
import Header from "../../components/common/Header";
import ActivityModelForm from "../../components/admin/modelforms/ActivityModelForm";

export default function Activity() {
  // state
  const [isOpen, setIsOpen] = useState(false)
  const [apiCall, setApiCall] = useState()

  return (

    <div className="flex">
      <TopBar />
      <BottomNavbar activeTab='activity'/>
      <div className="mt-14 mb-14 h-[calc(100vh-112px)] scroll-none overflow-auto w-full border p-3 ">
        <div className=" w-full mb-4">
          <Header heading='Activity' setIsOpen={setIsOpen} btnLabel='ADD Activity' />
        </div>
        <ActivityComponent
          apiCall={apiCall}
          setApiCall={setApiCall}
        />
        

      </div>
      <ActivityModelForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setApiCall={setApiCall}

      />
    </div>


    // <div className="flex">
    //   <TopBar />
    //   <BottomNavbar />
    //   <div className="mt-14 mb-14 h-[calc(100vh-112px)] overflow-auto w-full border p-3 ">
    //     <div className="flex h-auto w-full flex-col md:flex-row justify-between">
    //       <div className="md:w-1/2">
    //         <h3 className="text-2xl  font-bold"> Activity</h3>
    //       </div>
    //       <div className="md:w-1/2 flex flex-wrap justify-start md:justify-end ">
    //         <CustomInput
    //           onChange={(e) => setSearch(e.target.value)}
    //           placeholder="search"
    //           size="medium"
    //           className="border m-1  rounded-md"
    //         />
    //         <CustomButton className="my-1" onClick={() => setIsOpen(true)}>
    //           Add Activity
    //         </CustomButton>
    //       </div>
    //     </div>

    //     {/* <div className=" flex h-auto justify-start my-2 items-center">
    //       <div className="inline-flex gap-3 rounded-md" role="group">
    //         <Select
    //           name="label"
    //           placeholder="-label- "
    //           id="label"
    //           // onChange={handleFilter}
    //           className=" rounded-none border-none sm:w-48"
    //           isClearable
    //         />
    //         <Select
    //           placeholder="-type-"
    //           name="type"
    //           id="type"
    //           // onChange={handleFilter}
    //           className="text-capitalize  sm:w-48"
    //           isClearable
    //         />
    //       </div>
    //     </div> */}
    //     <div className="my-1 h-full flex-grow flex gap-1 ">
    //       <div className=" h-full text-center w-full   overflow-y-scroll">
    //         <ActivityTable
    //           activitys={activitys}
    //           ordering={setOrdering}
    //           setOrdering={setOrdering}
    //           handleActivityDelete={handleActivityDelete}
    //           handleActivityUpdate={handleActivityUpdate}
    //           setSelectedActivity={setSelectedActivity}
    //         />
    //         <Pagination
    //           nPages={totalPage}
    //           currentPage={currentPage}
    //           setCurrentPage={setCurrentPage}
    //           total={count}
    //           count={pageSize}
    //           setPageSize={setPageSize}
    //         />
    //       </div>
    //       {/* <div className="w-2/5 max-h-full overflow-y-scroll">
    //           <ActivityDetail activity={selectedActivity} />

    //         </div> */}
    //     </div>
    //   </div>

    //   <ActivityForm

    //   />

    //   {/* </div> */}
    // </div>
  );
}
