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
import ActivityTable from "../../components/admin/ActivityTable";
import ActivityForm from "../../components/admin/ActivityForm";
import Select from "react-select";
// import ActivityDetail from "../../components/admin/ActivityDetail";
import useValidation from "../../components/common/UseValidation";

export default function Activity() {
  // state
  // const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [ordering, setOrdering] = useState("name");
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [activitys, setActivitys] = useState([]);
  const [isBoolean, setIsBoolean] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState();
  const accessToken = useSelector((state) => state.token.accessToken);
  const [step, setStep] = useState(1);
  const initialFormState = {
    intervention_type: "",
    language: "",
    intervention_name:"",
    intervention_description: "",
    brand: "",
    activity_type: "",
    completion_check: "",
    who: "",
    activity: "",
    coach_type: "",
    location: "",
    travel_time: "",
    user_duration: "",
    coach_duration: "",
    teamlead_duration: "",
    file: "",
    indicate_when_completed: "",
    price: "",
    show_in_task: "",
    send_reminder: "",
    add_comment_option: "",
    upload_possible: "",
    excercise:'',
    url: "",
  };

  // const initialFormState = formData
  const validators = {
    intervention_type: [
      (value) =>
        step === 1
          ? value === null || value.trim() === ""
            ? "Activity type is required"
            : null
          : null,
    ],
    language: [
      (value) =>
        step === 1
          ? value === null || value.trim() === ""
            ? "Language is required"
            : null
          : null,
    ],
    intervention_name: [
      (value) =>
        step === 2
          ? value === "" || value === null || value.trim() === ""
            ? "Intervention name is required"
            : null
          : null,
    ],
    intervention_description: [
      (value) =>
        step === 2
          ? value === null || value.trim() === ""
            ? "Intervention description is required"
            : null
          : null,
    ],
    brand: [
      (value) =>
        step === 2
          ? value === null || value.trim() === ""
            ? "Brand is required"
            : null
          : null,
    ],
    who: [
      (value) =>
        step === 3
          ? value === null || value.trim() === ""
            ? "For whom is required"
            : null
          : null,
    ],
    activity_type: [
      (value) =>
        step === 2
          ? value === null || value.trim() === ""
            ? "activity type is required"
            : null
          : null,
    ],
    completion_check: [
      (value) =>
        step === 2
          ? value === null || value.trim() === ""
            ? "completion check is required"
            : null
          : null,
    ],
    activity: [
      (value) =>
        step === 3 && state.intervention_type == "survey"
          ? value === null || value.trim() === ""
            ? "complition check is required"
            : null
          : null,
    ],
    coach_type: [
      (value) =>
        step === 3 &&
        (state.intervention_type === "interview" ||
          state.intervention_type === "other" ||
          state.intervention_type === "workshop" ||
          state.intervention_type === "assignment")
          ? value === null || value.trim() === ""
            ? "Coach type is required"
            : null
          : null,
    ],
    challenge: [
      (value) =>
        step === 3 && state.intervention_type === "challenge"
          ? value === null || value.trim() === ""
            ? "Challenge are required"
            : null
          : null,
    ],
    amount: [
      (value) =>
        step === 3 &&
        (state.intervention_type === "challenge" ||
          state.intervention_type === "other")
          ? value === null
            ? "Amount are required"
            : null
          : null,
    ],
    location: [
      (value) =>
        step === 3 &&
        (state.intervention_type === "interview" ||
          state.intervention_type === "workshop" ||
          state.intervention_type === "other" ||
          state.intervention_type === "assignment")
          ? value === null || value.trim() === ""
            ? "Location are required"
            : null
          : null,
    ],
    user_duration: [
      (value) =>
        step === 3 &&
        (state.intervention_type === "interview" ||
          state.intervention_type === "workshop" ||
          state.intervention_type === "other" ||
          state.intervention_type === "assignment" ||
          state.intervention_type === "podcast" ||
          state.intervention_type === "video")
          ? value === null
            ? "User duration is required"
            : null
          : null,
    ],
    coach_duration: [
      (value) =>
        step === 3 &&
        (state.intervention_type === "interview" ||
          state.intervention_type === "other" ||
          state.intervention_type === "workshop" ||
          state.intervention_type === "assignment")
          ? value === null
            ? "Duration for coach is required"
            : null
          : null,
    ],
    teamlead_duration: [
      (value) =>
        step === 3 &&
        (state.intervention_type === "interview" ||
          state.intervention_type === "other" ||
          state.intervention_type === "workshop" ||
          state.intervention_type === "assignment")
          ? value === null
            ? "Duration for team lead is required"
            : null
          : null,
    ],
    travel_time: [
      (value) =>
        step === 3 &&
        (state.intervention_type === "interview" ||
          state.intervention_type === "assignment" ||
          state.intervention_type === "other" ||
          state.intervention_type === "workshop")
          ? value === null
            ? "Travel time is required"
            : null
          : null,
    ],
    file: [
      (value) =>
        step === 3 &&
        (state.intervention_type === "interview" ||
          state.intervention_type === "video" ||
          state.intervention_type === "assignment" ||
          state.intervention_type === "other" ||
          state.intervention_type === "podcast" ||
          state.intervention_type === "workshop")
          ? value === null || value.trim() === ""
            ? "File is required"
            : null
          : null,
    ],
    url: [
      (value) =>
        step === 3 &&
        (state.intervention_type === "interview" ||
          state.intervention_type === "video" ||
          state.intervention_type === "assignment" ||
          state.intervention_type === "other" ||
          state.intervention_type === "podcast" ||
          state.intervention_type === "workshop")
          ? value === null || value.trim() === ""
            ? "URL is required"
            : null
          : null,
    ],
    indicate_when_completed: [
      (value) =>
        step === 3 &&
        (state.intervention_type === "interview" ||
          state.intervention_type === "video" ||
          state.intervention_type === "assignment" ||
          state.intervention_type === "excercise" ||
          state.intervention_type === "other" ||
          state.intervention_type === "podcast" ||
          state.intervention_type === "workshop")
          ? value === null || value.trim() === ""
            ? "Indicate when completed is required"
            : null
          : null,
    ],
    send_reminder: [
      (value) =>
        step === 3 &&
        (state.intervention_type === "survey" ||
          state.intervention_type === "challenge" ||
          state.intervention_type === "interview" ||
          state.intervention_type === "assignment" ||
          state.intervention_type === "podcast" ||
          state.intervention_type === "other" ||
          state.intervention_type === "workshop" ||
          state.intervention_type === "video")
          ? value === null || value.trim() === ""
            ? "Send reminder option is required"
            : null
          : null,
    ],
    show_in_task: [
      (value) =>
        step === 3 &&
        (state.intervention_type === "survey" ||
          state.intervention_type === "challenge" ||
          state.intervention_type === "interview" ||
          state.intervention_type === "assignment" ||
          state.intervention_type === "podcast" ||
          state.intervention_type === "other" ||
          state.intervention_type === "workshop" ||
          state.intervention_type === "video")
          ? value === null || value.trim() === ""
            ? "Show in task option is required"
            : null
          : null,
    ],
    upload_possible: [
      (value) =>
        step === 3 &&
        (state.intervention_type === "assignment" ||
          state.intervention_type === "other" ||
          state.intervention_type === "workshop")
          ? value === null || value.trim() === ""
            ? "Upload option is required"
            : null
          : null,
    ],
    add_comment_option: [
      (value) =>
        step === 3 &&
        (state.intervention_type === "survey" ||
          state.intervention_type === "challenge" ||
          state.intervention_type === "interview" ||
          state.intervention_type === "assignment" ||
          state.intervention_type === "podcast" ||
          state.intervention_type === "other" ||
          state.intervention_type === "workshop" ||
          state.intervention_type === "video")
          ? value === null || value.trim() === ""
            ? "Add comment option is required"
            : null
          : null,
    ],
    excercise: [
      (value) =>
        step === 3 && state.intervention_type === "excercise"
          ? value === null || value.trim() === ""
            ? "excercise is required"
            : null
          : null,
    ],
  };

  const { state, setState, onInputChange, errors, setErrors, validate } =
    useValidation(initialFormState, validators);

  //Activity list get/reterview fuction call
  async function getActivityList(accessToken) {
    const response = await getActivity(
      accessToken,
      search,
      currentPage,
      pageSize,
      ordering
    );
    // console.log("activity res=>", response);
    setActivitys(response.data.data.results);
    setCount(response.data.data.pagination.count);
    setTotalPage(response.data.data.pagination.total_pages);
    setPageSize(response.data.data.pagination.page_size);
    setCurrentPage(response.data.data.pagination.current_page);
  }

  //Activity delete apiFunction Call
  const handleActivityDelete = async (id) => {
    const response = await deleteActivity(accessToken, id);
    setIsBoolean(true);
  };

  //Activity Update apiFunction Call
  const handleActivityUpdate = async (activity) => {
    // console.log("acitivity in =>", activity);
    setState({
      ...activity,
    });
    setIsOpen(true);
  };

  //newActivity add apifunction Call
  const handleActivityAdd = async (e) => {
    e.preventDefault();
    // console.log("e in update =>", e);
    // console.log("state in activity =>", state);
    if (
      e.target.id == "" ||
      e.target.id == "undefined" ||
      e.target.id == "null"
    ) {
      try {
        const response = await addActivity(accessToken, state);
        console.log("response=", response);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("e in update =>", e.target.id);
      const response = await updateActivity(accessToken, state, e.target.id);
      console.log("response=", response);
    }
    setIsBoolean(true);
    setState(initialFormState)
    setIsOpen(false);
  };

  // //useEffect
  useEffect(() => {
    getActivityList(accessToken);
    setIsBoolean(false);
  }, [pageSize, search, ordering, currentPage, isBoolean]);

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
              className="border m-1  rounded-md"
            />
            <CustomButton className="my-1" onClick={() => setIsOpen(true)}>
              Add Activity
            </CustomButton>
          </div>
        </div>

        {/* <div className=" flex h-auto justify-start my-2 items-center">
          <div className="inline-flex gap-3 rounded-md" role="group">
            <Select
              name="label"
              placeholder="-label- "
              id="label"
              // onChange={handleFilter}
              className=" rounded-none border-none sm:w-48"
              isClearable
            />
            <Select
              placeholder="-type-"
              name="type"
              id="type"
              // onChange={handleFilter}
              className="text-capitalize  sm:w-48"
              isClearable
            />
          </div>
        </div> */}
        <div className="my-1 h-full flex-grow flex gap-1 ">
          <div className=" h-full text-center w-full   overflow-y-scroll">
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
        initialFormState={initialFormState}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        state={state}
        setState={setState}
        onInputChange={onInputChange}
        errors={errors}
        validate={validate}
        step={step}
        setStep={setStep}
        handleFormSubmit={handleActivityAdd}
      />

      {/* </div> */}
    </div>
  );
}
