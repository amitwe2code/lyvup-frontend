import React, { useEffect, useState } from "react";
import CustomButton from "../../common/CustomButton";
import {
  addWeakActivity,
  getActivity,
  getSingleActivity,
  UpdateWeakActivity,
} from "../../../api/api";
import { useSelector } from "react-redux";
import useValidation from "../../common/UseValidation";

export default function ProgramActivityForm(props) {
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
  };
  const initialFormState = {
    week_no: props?.week_no,
    program_id: props?.program_id,
    activity_id: "",
    day: '',
    time: '',
  };


  const validators = {
    activity_id: [
      (value) =>
        value === null || value == '' ? "Activity is required" : null,
    ],
    day: [
      (value) =>
        (showDateTime)
          ? value === null || value.trim() === ""
            ? "Day is required"
            : null
          : null,
    ],
    time: [
      (value) =>
        (showDateTime)
          ? value === null || value.trim() === ""
            ? "Time is required"
            : null
          : null,
    ],
  };
  const { state, setState, onInputChange, errors, setErrors, validate } =
    useValidation(initialFormState, validators);

  const UpdateProgramActivity = (updateProgramActivity) => {
    console.log('program activity =>', updateProgramActivity);
    setShowDateTime(true)
    setState({ ...updateProgramActivity })
  }
  console.log('state=>', state);
  const addActivityInWeek = async (e, id) => {
    e.preventDefault()
    console.log('errors=>', errors);
    if (validate()) {
      if (id) {
        const response = await UpdateWeakActivity(accessToken, state, id);
        console.log('response=>', response)
      }
      else {
        const response = await addWeakActivity(accessToken, state);
        console.log('response=>', response)
      }
      close()

    }
  };

  const close = () => {

    setState(initialFormState);
    props?.setUpdateProgramActivity('')
    props?.setApiCall(true)
    props?.setWeekNo()
    props.setIsOpen(false);
  };


  useEffect(() => {
    getactivityList();

  }, [search, filter]);

  useEffect(() => {
    if (props?.updateProgramActivity) {
      UpdateProgramActivity(props?.updateProgramActivity)
    }
  }, [props.isOpen])


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
                  disabled={state.id}
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
                <div className="w-full flex flex-wrap justify-center   gap-1  sm:gap-2">
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
                  className=" btn_cancle"
                >
                  Cancel
                </CustomButton>
                <CustomButton
                  type="submit"
                  id={state?.id}
                  variant="outline"
                  onClick={(e) => addActivityInWeek(e, state?.id)}
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
