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
import Toast from "../../common/Toast";

export default function ProgramActivityForm(props) {
  const[loading,setLoading]=useState(false)
  const [filterShow, setFilterShow] = useState(false);
  const [showDateTime, setShowDateTime] = useState(false);
  const [activityList, setActivityList] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const accessToken = useSelector((state) => state.token.accessToken);

  console.log("props=>", props);
  const getactivityList = async () => {
    const response = await getActivity({ accessToken, search, filter });
    console.log("actvity=>", response.data.data.results);
    setActivityList(response.data.data.results);
  };
  // initialFormState
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

  // call by useEffect at update time set updatedata in state
  const UpdateProgramActivity = (updateProgramActivity) => {
    setShowDateTime(true)
    setState({ ...updateProgramActivity })
  }
  console.log('state=>', state);
  const addActivityInWeek = async (e, id) => {
    e.preventDefault()
    try {
      setLoading(true)
      if (validate()) {
        if (id) {
          const response = await UpdateWeakActivity(accessToken, state, id);
          Toast(response)
          console.log('response=>', response)
        }
        else {
          const response = await addWeakActivity(accessToken, state);
          Toast(response)
          console.log('response=>', response)
        }
        close()
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };

  const close = () => {
    setState(initialFormState);
    props?.setUpdateProgramActivity('')
    props?.setApiCall(true)
    props?.setWeekNo()
    props?.setIsOpen(false);
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

    <div className="bg_secondary_color max-h-full overflow-y-auto rounded-lg  max-w-2xl shadow-xl w-full ">
      <div className="flex flex-row justify-between items-center  p-3 btn_theme_color sm:mb-2  border-b-2 gap-2">
        <h2 className="text-2xl sm:text-2xl font-bold ">
          Add intervention to the week
        </h2>
        <button className=" pr-2" onClick={() => close()}>
          <b>X</b>
        </button>
      </div>
      <div className=" flex flex-col gap-3 border-b-2 border-white justify-start items-center p-4 ">
        <div className="w-full ">
          <small className="flex justify-start  items-center   gap-1">
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
          <div className="flex flex-wrap w-full items-center   ">
            <div className="sm:w-1/2 pr-1 ">
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

            <div className="sm:w-1/2 pl-1">
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
            <span className="text-danger capitalize text-sm pl-1">
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
                <span className="text-danger capitalize text-sm pl-1">
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
                <span className="text-danger capitalize text-sm pl-1">
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
            variant="none"
            className=" btn_cancle"
          >
            Cancel
          </CustomButton>
          <CustomButton
            type="submit"
            id={state?.id}
            onClick={(e) => addActivityInWeek(e, state?.id)}
            className=" "
          >
            {loading ?
              <span
                className="spinner-border spinner-border-sm "
                role="status"
                aria-hidden="true"
              ></span> : <>
                {state?.id ? 'Update' : 'Add'}
              </>
            }
          </CustomButton>
        </div>
      </form>
    </div>

  );
}
