import React, { useEffect, useState } from "react";
import CustomButton from "../../common/CustomButton";
import {
  addWeakActivity,
  getActivity,
  getSingleActivity,
} from "../../../api/api";
import { useSelector } from "react-redux";
import useValidation from "../../common/UseValidation";

export default function WeekForm(props) {
  const [filterShow, setFilterShow] = useState(false);
  const [showDateTime, setShowDateTime] = useState(false);
  const [activityList, setActivityList] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const accessToken = useSelector((state) => state.token.accessToken);

  console.log("props=>", props);
  const getactivityList = async () => {
    const response = await getActivity(accessToken, search, filter);
    console.log("actvity=>", response.data.data.results);
    setActivityList(response.data.data.results);
    setState({ ...state });
  };
  const initialFormState = {
    week_no: props?.week_no,
    program_id: props?.program_id,
    activity_id: "",
  };
  

  const validators = {
    activity_id: [
      (value) =>
        value === null || value.trim() === "" ? "Activity is required" : null,
    ],
    day: [
      (value) =>
        (showDateTime)
          ? value === null || value.trim() === ""
            ? "day is required"
            : null
          : null,
    ],
    time: [
      (value) =>
        (showDateTime) ?
          value === null || value.trim() === "" ? "time is required" : null :
          null
    ],
  };
  const { state, setState, onInputChange, errors, setErrors, validate } =
    useValidation(initialFormState, validators);
  const addActivityInWeek = async (e) => {
    e.preventDefault()
    if(validate()){
      const response = await addWeakActivity(accessToken, state);
      console.log('response=>', response)
      props?.setApiCall(true)
      props?.setWeekNo()
      close()
    }
  };

  const close = () => {
    setState(initialFormState);
    props.setIsOpen(false);
  };


  useEffect(() => {
    getactivityList();
  }, [search, filter]);

  return (
    <div>
      {props?.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg_secondary_color max-h-full overflow-y-auto rounded-lg  max-w-2xl shadow-xl w-full ">
            <div className="p-3  border-b">
              <h2 className="text-lg text-[#039a77] font-semibold">
                Add intervention to the week
              </h2>
            </div>
            <div className=" flex flex-col gap-2 border-b justify-start items-center ">
              <div className="text-center ">
                <small className="flex  items-center gap-1">
                  <input
                    type="checkbox"
                    id="show_child_program"
                    className=""
                    defaultChecked
                    checked={filterShow}
                    onChange={(e) => {
                      setFilterShow(!filterShow);
                    }}
                    style={{ display: "inline" }}
                  />
                  <span className="text-base">Dynamic intervention</span>
                </small>
              </div>

              {filterShow && (
                <div className="flex flex-wrap w-full items-center gap-3  justify-center">
                  <div className="sm:w-2/5 ">
                    <label
                      htmlFor="intervention_type"
                      className={`block text-gray-700 mb-1`}
                    >
                      Filter by Intervention
                    </label>
                    <select
                      name="intervention_type"
                      id="intervention_type"
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                      className={`w-full 
                                         p-2 text-sm input  rounded `}
                    >
                      <option value="">Select Type</option>
                      <option value="survey">survey</option>
                      <option value="challenge">challenge</option>
                      <option value="interview">interview</option>
                      <option value="video">video</option>
                      <option value="workshop">workshop</option>
                      <option value="assignment">assignment</option>
                      <option value="excercise">excercise</option>
                      <option value="podcast">podcast</option>
                      <option value="other">other</option>
                    </select>
                  </div>

                  <div className="sm:w-2/5 ">
                    <label
                      htmlFor="intervention_type"
                      className={`block text-gray-700 mb-1`}
                    >
                      Search by intervention:
                    </label>
                    <input
                      type="text"
                      id="search"
                      className=" input p-2  w-full 
                                         text-sm  rounded "
                      placeholder="Search"
                      // value={programSearch}
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
            <form className="p-4 space-y-3">
              <div className=" flex flex-col ">
                <label
                  htmlFor="activity_id"
                  className="block text-base font-medium text-gray-700 mb-1"
                >
                  Select Intervention for list
                </label>
                <select
                  name="activity_id"
                  id="activity_id"
                  value={state.activity_id}
                  onChange={onInputChange}
                  className={`w-1/2 p-2 input text-sm  rounded ${errors.activity_id ? " border-danger" : ""
                    }`}
                >
                  <option value="">Select intervention </option>
                  {activityList.map((activity) => (
                    <option key={activity.id} value={activity.id}>
                      {activity.activity_name}{" "}
                    </option>
                  ))}
                </select>
                {errors.activity_id && (
                  <span className="text-danger font-size-3">
                    {errors.activity_id.join(", ")}
                  </span>
                )}
              </div>
              <div className=" ">
                <small className="flex justify-center items-center gap-1">
                  <input
                    type="checkbox"
                    id="show_child_program"
                    className=""
                    checked={showDateTime}
                    onChange={(e) => {
                      setShowDateTime(!showDateTime);
                    }}
                    style={{ display: "inline" }}
                  />
                  <span className="text-base">Add day and time</span>
                </small>
              </div>
              {showDateTime && (
                <div className="w-full flex flex-wrap justify-center  text-center gap-1  sm:gap-2">
                  <div>
                    <select
                      name="day"
                      id="day"
                      value={state?.day}
                      onChange={onInputChange}
                      className={`w-full  p-2 input text-sm rounded   ${errors.day ? " border-danger" : ""
                        }
                                        `}
                    >
                      <option value="">To-do on </option>
                      <option value="sunday">sunday</option>
                      <option value="monday">monday</option>
                      <option value="tuesday">tuesday</option>
                      <option value="wednesday">wednesday</option>
                      <option value="thursday">thursday</option>
                      <option value="friday">friday</option>
                      <option value="saturday">saturday</option>
                    </select>
                    {errors.day && (
                      <span className="text-danger font-size-3">
                        {errors.day.join(", ")}
                      </span>
                    )}
                  </div>
                  <div className="w-20">
                    <input
                      type="time"
                      name="time"
                      id="time"
                      value={state?.time}
                      onChange={onInputChange}
                      className={`
                                            p-2 text-sm input rounded  ${errors.time
                          ? " border-danger"
                          : ""
                        }  `}
                    />
                    {errors.time && (
                      <span className="text-danger font-size-3">
                        {errors.time.join(", ")}
                      </span>
                    )}
                  </div>
                </div>
              )}

              <div className="flex justify-center space-x-2 mt-4">
                <CustomButton
                  type="button"
                  onClick={() => close()}
                  className=" bg-gray-400 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                >
                  Cancel
                </CustomButton>
                <CustomButton
                  type="submit"
                  id={state?.id}
                  variant="outline"
                  onClick={(e) => addActivityInWeek(e)}
                  className=" "
                >
                  {state?.id ? "Update" : "Add"}
                </CustomButton>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
