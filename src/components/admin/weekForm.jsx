import React, { useState } from "react";
import CustomButton from "../common/CustomButton";
import { updateUser } from "../../api/api";

export default function  WeekForm(props) {
    const initialFormState={
        week_no:props.week_no,
        problem_id:props.problem_id,
        activity_id:'',
        activity_type: "",
        language: "",
        activity_name:"",
        activity_description: "",
        brand: "",
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
    }
    
    const [filterShow, setFilterShow] = useState(false)
    const [showDateTime, setShowDateTime] = useState(false)
    

    return (
        <div>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg_secondary_color max-h-full overflow-y-auto rounded-lg  max-w-2xl shadow-xl w-full ">
                        <div className="p-3  border-b">
                            <h2 className="text-lg text-[#039a77] font-semibold">Add intervention to the week
                            </h2>
                        </div>
                        <div className="p-4 flex flex-col gap-2 border-b justify-start items-center ">
                            <div className="text-center ">
                                <small className="flex  items-center gap-1">
                                    <input
                                        type="checkbox"
                                        id="show_child_program"
                                        className=""
                                        checked={filterShow}
                                        onChange={(e) => {
                                            setFilterShow(!filterShow);
                                        }}
                                        style={{ display: "inline" }}
                                    />
                                    <span className="text-base">Dynamic intervention</span>
                                </small>
                            </div>


                            {filterShow && (<div className="flex flex-wrap w-full items-center gap-3  justify-center">
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
                                        value={state?.intervention_type}
                                        onChange={onInputChange}
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
                                        id="program_search"
                                        className=" input p-2  w-full 
                                         text-sm  rounded "
                                        placeholder="Search"
                                        // value={programSearch}
                                        onChange={(e) => {
                                            setProgramSearch(e.target.value);
                                            searchProgram("search");
                                        }}
                                    />
                                </div>
                            </div>)}
                        </div>
                        <form className="p-4 space-y-3">
                            {/* <div>
                                <label
                                    htmlFor="language"
                                    className="block text-base font-medium text-gray-700 mb-1"
                                >
                                    Language
                                </label>
                                <select
                                    name="language"
                                    id="language"
                                    value={state.language}

                                    onChange={onInputChange}
                                    className={`w-full p-2 input text-sm  rounded ${errors.language ? " border-danger" : ""
                                        }`}
                                >
                                    <option value="">Select language</option>
                                    <option value="important">Important</option>
                                    <option value="urgent">Urgent</option>
                                    <option value="normal">Normal</option>
                                </select>
                                {errors.language && (
                                    <span className="text-danger font-size-3">
                                        {errors.language.join(", ")}
                                    </span>
                                )}
                            </div> */}
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
                                            name="day_for_week_activity"
                                            id="day_for_week_activity"
                                            value={state?.day_for_week_activity}
                                            onChange={onInputChange}
                                            className={`w-full  p-2 input text-sm rounded   ${errors.day_for_week_activity ? " border-danger" : ""
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
                                        {errors.day_for_week_activity && (
                                            <span className="text-danger font-size-3">
                                                {errors.day_for_week_activity.join(", ")}
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
                                            p-2 text-sm input rounded  ${errors.time ? " border-danger" : ""
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
                                    onClick={() => {
                                        setState(initialFormState)
                                        setIsOpen(false)
                                    }
                                    }
                                    className=" bg-gray-400 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                                >
                                    Cancel
                                </CustomButton>
                                <CustomButton
                                    type="submit"
                                    id={state?.id}
                                    variant="outline"
                                    onClick={handleFormSubmit}
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
