import React, { useEffect, useState } from "react";
import CustomButton from "../../common/CustomButton";
import useValidation from "../../common/UseValidation";
import { useSelector } from "react-redux";
import { addActivity, updateActivity } from "../../../api/api";

export default function ActivityForm(props) {
  const accessToken = useSelector((state) => state.token.accessToken);
  const [step, setStep] = useState(1);
  const initialFormState = {
    activity_type: "",
    language: "",
    activity_name: "",
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
    excercise: '',
    url: "",
  };

  // const initialFormState = formData
  const validators = {
    activity_type: [
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
    activity_name: [
      (value) =>
        step === 2
          ? value === "" || value === null || value.trim() === ""
            ? "Activity name is required"
            : null
          : null,
    ],
    activity_description: [
      (value) =>
        step === 2
          ? value === null || value.trim() === ""
            ? "Activity description is required"
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
        step === 3 && state.activity_type == "survey"
          ? value === null || value.trim() === ""
            ? "complition check is required"
            : null
          : null,
    ],
    coach_type: [
      (value) =>
        step === 3 &&
          (state.activity_type === "interview" ||
            state.activity_type === "other" ||
            state.activity_type === "workshop" ||
            state.activity_type === "assignment")
          ? value === null || value.trim() === ""
            ? "Coach type is required"
            : null
          : null,
    ],
    challenge: [
      (value) =>
        step === 3 && state.activity_type === "challenge"
          ? value === null || value.trim() === ""
            ? "Challenge are required"
            : null
          : null,
    ],
    amount: [
      (value) =>
        step === 3 &&
          (state.activity_type === "challenge" ||
            state.activity_type === "other")
          ? value === null
            ? "Amount are required"
            : null
          : null,
    ],
    location: [
      (value) =>
        step === 3 &&
          (state.activity_type === "interview" ||
            state.activity_type === "workshop" ||
            state.activity_type === "other" ||
            state.activity_type === "assignment")
          ? value === null || value.trim() === ""
            ? "Location are required"
            : null
          : null,
    ],
    user_duration: [
      (value) =>
        step === 3 &&
          (state.activity_type === "interview" ||
            state.activity_type === "workshop" ||
            state.activity_type === "other" ||
            state.activity_type === "assignment" ||
            state.activity_type === "podcast" ||
            state.activity_type === "video")
          ? value === null
            ? "User duration is required"
            : null
          : null,
    ],
    coach_duration: [
      (value) =>
        step === 3 &&
          (state.activity_type === "interview" ||
            state.activity_type === "other" ||
            state.activity_type === "workshop" ||
            state.activity_type === "assignment")
          ? value === null
            ? "Duration for coach is required"
            : null
          : null,
    ],
    teamlead_duration: [
      (value) =>
        step === 3 &&
          (state.activity_type === "interview" ||
            state.activity_type === "other" ||
            state.activity_type === "workshop" ||
            state.activity_type === "assignment")
          ? value === null
            ? "Duration for team lead is required"
            : null
          : null,
    ],
    travel_time: [
      (value) =>
        step === 3 &&
          (state.activity_type === "interview" ||
            state.activity_type === "assignment" ||
            state.activity_type === "other" ||
            state.activity_type === "workshop")
          ? value === null
            ? "Travel time is required"
            : null
          : null,
    ],
    file: [
      (value) =>
        step === 3 &&
          (state.activity_type === "interview" ||
            state.activity_type === "video" ||
            state.activity_type === "assignment" ||
            state.activity_type === "other" ||
            state.activity_type === "podcast" ||
            state.activity_type === "workshop")
          ? value === null || value.trim() === ""
            ? "File is required"
            : null
          : null,
    ],
    url: [
      (value) =>
        step === 3 &&
          (state.activity_type === "interview" ||
            state.activity_type === "video" ||
            state.activity_type === "assignment" ||
            state.activity_type === "other" ||
            state.activity_type === "podcast" ||
            state.activity_type === "workshop")
          ? value === null || value.trim() === ""
            ? "URL is required"
            : null
          : null,
    ],
    indicate_when_completed: [
      (value) =>
        step === 3 &&
          (state.activity_type === "interview" ||
            state.activity_type === "video" ||
            state.activity_type === "assignment" ||
            state.activity_type === "excercise" ||
            state.activity_type === "other" ||
            state.activity_type === "podcast" ||
            state.activity_type === "workshop")
          ? value === null || value.trim() === ""
            ? "Indicate when completed is required"
            : null
          : null,
    ],
    send_reminder: [
      (value) =>
        step === 3 &&
          (state.activity_type === "survey" ||
            state.activity_type === "challenge" ||
            state.activity_type === "interview" ||
            state.activity_type === "assignment" ||
            state.activity_type === "podcast" ||
            state.activity_type === "other" ||
            state.activity_type === "workshop" ||
            state.activity_type === "video")
          ? value === null || value.trim() === ""
            ? "Send reminder option is required"
            : null
          : null,
    ],
    show_in_task: [
      (value) =>
        step === 3 &&
          (state.activity_type === "survey" ||
            state.activity_type === "challenge" ||
            state.activity_type === "interview" ||
            state.activity_type === "assignment" ||
            state.activity_type === "podcast" ||
            state.activity_type === "other" ||
            state.activity_type === "workshop" ||
            state.activity_type === "video")
          ? value === null || value.trim() === ""
            ? "Show in task option is required"
            : null
          : null,
    ],
    upload_possible: [
      (value) =>
        step === 3 &&
          (state.activity_type === "assignment" ||
            state.activity_type === "other" ||
            state.activity_type === "workshop")
          ? value === null || value.trim() === ""
            ? "Upload option is required"
            : null
          : null,
    ],
    add_comment_option: [
      (value) =>
        step === 3 &&
          (state.activity_type === "survey" ||
            state.activity_type === "challenge" ||
            state.activity_type === "interview" ||
            state.activity_type === "assignment" ||
            state.activity_type === "podcast" ||
            state.activity_type === "other" ||
            state.activity_type === "workshop" ||
            state.activity_type === "video")
          ? value === null || value.trim() === ""
            ? "Add comment option is required"
            : null
          : null,
    ],
    excercise: [
      (value) =>
        step === 3 && state.activity_type === "excercise"
          ? value === null || value.trim() === ""
            ? "excercise is required"
            : null
          : null,
    ],
  };
  const { state, setState, onInputChange, errors, setErrors, validate } =
    useValidation(initialFormState, validators);

  const handleActivityUpdate = (activity) => {
    setState({ ...activity })
  }

  const handleActivityAddAndUpdate = async (e, id) => {
    e.preventDefault();
    try {
      if (validate()) {
        if (id) {
          const response = await updateActivity(accessToken, state, id);

        } else {
          const response = await addActivity(accessToken, state);
        }
        props?.setApiCall(true)
        close()
      }
    }
    catch (err) {
      console.log(err);
    }

  };

  const close = () => {
    setState(initialFormState)
    setStep(1)
    props?.setIsOpen(false)
  }

  useEffect(() => {
    if (props.updateActivity) {
      handleActivityUpdate(props.updateActivity)
    }
  }, [props?.isOpen])

  return (
   
          <div className="bg_secondary_color max-h-full overflow-auto rounded-lg  shadow-xl w-full max-w-2xl">
            <div className="p-3 border-b btn_theme_color flex justify-between item-center ">
              <h2 className="text-lg font-semibold ">
                {step === 1
                  ? "Step 1: Initial Details"
                  : step === 2
                    ? "Step 2 : Basic Details"
                    : "Step 3 : Final Details"}
              </h2>
              <CustomButton
                size="small "
                variant="outline "
                className="font-bold"
                onClick={() => { close() }
                }
              >
                X
              </CustomButton>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="p-4"
            >
              <div className="overflow-y-auto flex-grow">
                {step === 1 ? (
                  <>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="language"
                          className="form_label"
                        >
                          Language
                        </label>
                        <select
                          id="language"
                          name="language"
                          value={state.language}
                          onChange={onInputChange}
                          className={`w-full  text-sm input ${errors.language ? " border-danger" : ""
                            } rounded `}
                        >
                          <option value="">Select Language</option>
                          <option value="en">English</option>

                        </select>
                        {errors.language && (
                          <span className="text-danger font-size-3">
                            {errors.language.join(", ")}
                          </span>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="activity_type"
                          className='form_label'
                        >
                          Type
                        </label>
                        <select
                          name="activity_type"
                          id="activity_type"
                          value={state.activity_type}
                          onChange={onInputChange}
                          className={`w-full  ${errors.activity_type ? " border-danger" : ""
                            } input text-sm border rounded `}
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
                        {errors.activity_type && (
                          <span className="text-danger font-size-3">
                            {errors.activity_type.join(", ")}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                      <CustomButton
                        type="button"
                        variant="none"
                        className='btn_cancle'
                        onClick={() => { close() }
                        }
                      >
                        Cancel
                      </CustomButton>
                      <CustomButton
                        type="button"
                        onClick={() => {
                          if (validate()) {
                            setStep(2);
                          }
                        }}
                        className="px-3 py-1.5 text-sm bg-[#039a77] text-white rounded hover:bg-[#028567]"
                      >
                        Next
                      </CustomButton>
                    </div>
                  </>
                ) : null}

                {state.activity_type && step === 2 ? (
                  <>
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="activity_name"
                          className="form_label"
                        >
                          activity Name
                        </label>
                        <input
                          type="text"
                          name="activity_name"
                          id="activity_name"
                          placeholder="Enter Name"
                          value={state.activity_name}
                          onChange={onInputChange}
                          className={`w-full input text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.activity_name ? " border-danger" : ""
                            }`}
                        />
                        {errors.activity_name && (
                          <span className="text-danger font-size-3">
                            {errors.activity_name.join(", ")}
                          </span>
                        )}
                      </div>
                      <div className="row-span-3">
                        <label
                          htmlFor="activity_description"
                          className="form_label"
                        >
                          Description
                        </label>
                        <textarea
                          name="activity_description"
                          id="activity_description"
                          value={state.activity_description}
                          onChange={onInputChange}
                          placeholder="Enter description"
                          rows={2}
                          className={`w-full min-h-32 p-2 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.activity_description
                            ? " border-danger"
                            : ""
                            }`}
                        />
                        {errors.activity_description && (
                          <span className="text-danger font-size-3">
                            {errors.activity_description.join(", ")}
                          </span>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="brand"
                          className="form_label"
                        >
                          Label
                        </label>
                        <select
                          name="brand"
                          id="brand"
                          value={state.brand}
                          onChange={onInputChange}
                          className={`w-full input text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.brand ? " border-danger" : ""
                            }`}
                        >
                          <option value="">Select Label</option>
                          <option value="Lyvup">Lyvup</option>
                          <option value="Gallop">Gallop</option>
                          <option value="Yenzar">Yenzar</option>
                          <option value="GLI">GLI</option>
                        </select>
                        {errors.brand && (
                          <span className="text-danger font-size-3">
                            {errors.brand.join(", ")}
                          </span>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="completion_check"
                          className="form_label"
                        >
                          completion_check
                        </label>
                        <select
                          name="completion_check"
                          id="completion_check"
                          value={state.completion_check}
                          onChange={onInputChange}
                          className={`w-full input  ${errors.completion_check ? " border-danger" : ""
                            }`}
                        >
                          <option value="">Select Label</option>
                          <option value="yes">yes</option>
                          <option value="no">no</option>
                        </select>
                        {errors.completion_check && (
                          <span className="text-danger font-size-3">
                            {errors.completion_check.join(", ")}
                          </span>
                        )}
                      </div>

                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                      <CustomButton
                        type="button"
                        variant="none"
                        onClick={() => {
                          setStep(1);
                        }}
                        className="btn_cancle "
                      >
                        Cancel
                      </CustomButton>
                      <CustomButton
                        type="button"
                        onClick={() => {
                          if (validate()) {
                            setStep(3);
                          }
                        }}
                        className="px-3 py-1.5 text-sm bg-[#039a77] text-white rounded hover:bg-[#028567]"
                      >
                        Next
                      </CustomButton>
                    </div>
                  </>
                ) : null}

                {state.activity_type && step === 3 ? (
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                      <div>
                        <label
                          htmlFor="who"
                          className="form_label"
                        >
                          For Whom
                        </label>
                        <select
                          name="who"
                          id="who"
                          value={state.who}
                          onChange={onInputChange}
                          className={`w-full input text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.who ? " border-danger" : ""
                            }`}
                        >
                          <option value="">-Select-</option>
                          <option value="team">team</option>
                          <option value="individual">individual</option>
                          <option value="team lead">team lead</option>
                          <option value="coach">coach</option>
                        </select>
                        {errors.who && (
                          <span className="text-danger font-size-3">
                            {errors.who.join(", ")}
                          </span>
                        )}
                      </div>
                      {state.activity_type === "survey" && (
                        <div>
                          <label
                            htmlFor="activity"
                            className="form_label"
                          >
                            survey
                          </label>
                          <input
                            type="text"
                            name="activity"
                            id="activity"
                            value={state.activity}
                            onChange={onInputChange}
                            className={`w-full input text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.activity ? " border-danger" : ""
                              }`}
                          />
                          {errors.activity && (
                            <span className="text-danger font-size-3">
                              {errors.activity.join(", ")}
                            </span>
                          )}
                        </div>
                      )}
                      {(state.activity_type === "survey" ||
                        state.activity_type === "challenge" ||
                        state.activity_type === "interview" ||
                        state.activity_type === "assignment" ||
                        state.activity_type === "podcast" ||
                        state.activity_type === "other" ||
                        state.activity_type === "workshop" ||
                        state.activity_type === "video") && (
                          <div>
                            <label
                              htmlFor="send_reminder"
                              className="form_label"
                            >
                              Send Reminder
                            </label>
                            <select
                              name="send_reminder"
                              id="send_reminder"
                              value={state.send_reminder}
                              onChange={onInputChange}
                              className={`w-full input text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.send_reminder ? " border-danger" : ""
                                }`}
                            >
                              <option value="">-Select-</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                            {errors.send_reminder && (
                              <span className="text-danger font-size-3">
                                {errors.send_reminder.join(", ")}
                              </span>
                            )}
                          </div>
                        )}
                      {(state.activity_type === "survey" ||
                        state.activity_type === "challenge" ||
                        state.activity_type === "assignment" ||
                        state.activity_type === "podcast" ||
                        state.activity_type === "other" ||
                        state.activity_type === "interview" ||
                        state.activity_type === "workshop" ||
                        state.activity_type === "video") && (
                          <div>
                            <label
                              htmlFor="show_in_task"
                              className="form_label"
                            >
                              Show in Task
                            </label>
                            <select
                              name="show_in_task"
                              id="show_in_task"
                              value={state.show_in_task}
                              onChange={onInputChange}
                              className={`w-full input text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.show_in_task ? " border-danger" : ""
                                }`}
                            >
                              <option value="">-Select-</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                            {errors.show_in_task && (
                              <span className="text-danger font-size-3">
                                {errors.show_in_task.join(", ")}
                              </span>
                            )}
                          </div>
                        )}
                      {(state.activity_type === "survey" ||
                        state.activity_type === "challenge" ||
                        state.activity_type === "podcast" ||
                        state.activity_type === "other" ||
                        state.activity_type === "assignment" ||
                        state.activity_type === "interview" ||
                        state.activity_type === "workshop" ||
                        state.activity_type === "video") && (
                          <div>
                            <label
                              htmlFor="add_comment_option"
                              className="form_label"
                            >
                              Add Comment Option
                            </label>
                            <select
                              name="add_comment_option"
                              id="add_comment_option"
                              value={state.add_comment_option}
                              onChange={onInputChange}
                              className={`w-full input text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.add_comment_option ? " border-danger" : ""
                                }`}
                            >
                              <option value="">-Select-</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                            {errors.add_comment_option && (
                              <span className="text-danger font-size-3">
                                {errors.add_comment_option.join(", ")}
                              </span>
                            )}
                          </div>
                        )}

                      {state.activity_type === "challenge" && (
                        <div>
                          <label
                            htmlFor="challenge"
                            className="form_label"
                          >
                            Challenge
                          </label>
                          <select
                            name="challenge"
                            id="challenge"
                            value={state.challenge}
                            onChange={onInputChange}
                            className={`w-full input text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.challenge ? " border-danger" : ""
                              }`}
                          >
                            <option value="">-Select-</option>
                            <option value="Give praises">Give praises</option>
                            <option value="Request feedback">Request feedback</option>
                            <option value="Define goals">Define goals</option>
                          </select>
                          {errors.challenge && (
                            <span className="text-danger font-size-3">
                              {errors.challenge.join(", ")}
                            </span>
                          )}
                        </div>
                      )}
                      {(state.activity_type === "challenge" ||
                        state.activity_type === "other") && (
                          <div>
                            <label
                              htmlFor="amount"
                              className="form_label"
                            >
                              Amount
                            </label>
                            <input
                              type="number"
                              name="amount"
                              id="amount"
                              value={state.amount}
                              onChange={onInputChange}
                              className={`w-full input text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.amount ? " border-danger" : ""
                                }`}
                            />
                            {errors.amount && (
                              <span className="text-danger font-size-3">
                                {errors.amount.join(", ")}
                              </span>
                            )}
                          </div>
                        )}

                      {(state.activity_type === "interview" ||
                        state.activity_type === "workshop" ||
                        state.activity_type === "other" ||
                        state.activity_type === "assignment") && (
                          <div>
                            <label
                              htmlFor="location"
                              className="form_label"
                            >
                              Location
                            </label>
                            <select
                              name="location"
                              id="location"
                              value={state.location}
                              onChange={onInputChange}
                              className={`w-full input text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.location ? " border-danger" : ""
                                }`}
                            >
                              <option value="">-Select-</option>
                              <option value="online">online</option>
                              <option value="video conference">video conference</option>
                              <option value="live"> live</option>
                            </select>
                            {errors.location && (
                              <span className="text-danger font-size-3">
                                {errors.location.join(", ")}
                              </span>
                            )}
                          </div>
                        )}

                      {(state.activity_type === "interview" ||
                        state.activity_type === "other" ||
                        state.activity_type === "workshop" ||
                        state.activity_type === "assignment") && (
                          <div>
                            <label
                              htmlFor="coach_type"
                              className="form_label"
                            >
                              Practitioner type
                            </label>
                            <select
                              name="coach_type"
                              id="coach_type"
                              value={state.coach_type}
                              onChange={onInputChange}
                              className={`w-full input text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.coach_type ? " border-danger" : ""
                                }`}
                            >
                              <option value="">-Select-</option>
                              <option value="intern">intern</option>
                              <option value="extern">extern</option>
                              <option value="other">other</option>
                              <option value="none">none</option>
                            </select>
                            {errors.coach_type && (
                              <span className="text-danger font-size-3">
                                {errors.coach_type.join(", ")}
                              </span>
                            )}
                          </div>
                        )}

                      {(state.activity_type === "interview" ||
                        state.activity_type === "workshop" ||
                        state.activity_type === "other" ||
                        state.activity_type === "assignment" ||
                        state.activity_type === "podcast" ||
                        state.activity_type === "video") && (
                          <div>
                            <label
                              htmlFor="user_duration"
                              className="form_label"
                            >
                              User Duration
                            </label>
                            <input
                              type="number"
                              name="user_duration"
                              id="user_duration"
                              value={state.user_duration}
                              onChange={onInputChange}
                              className={`w-full input text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.user_duration ? " border-danger" : ""
                                }`}
                            />
                            {errors.user_duration && (
                              <span className="text-danger font-size-3">
                                {errors.user_duration.join(", ")}
                              </span>
                            )}
                          </div>
                        )}
                      {(state.activity_type === "interview" ||
                        state.activity_type === "other" ||
                        state.activity_type === "workshop" ||
                        state.activity_type === "assignment") && (
                          <div>
                            <label
                              htmlFor="coach_duration"
                              className="form_label"
                            >
                              Duration for Coach
                            </label>
                            <input
                              type="number"
                              name="coach_duration"
                              id="coach_duration"
                              value={state.coach_duration}
                              onChange={onInputChange}
                              className={`w-full input text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.coach_duration ? " border-danger" : ""
                                }`}
                            />
                            {errors.coach_duration && (
                              <span className="text-danger font-size-3">
                                {errors.coach_duration.join(", ")}
                              </span>
                            )}
                          </div>
                        )}
                      {state.activity_type === "excercise" && (
                        <div>
                          <label
                            htmlFor="excercise"
                            className="form_label"
                          >
                            excercise
                          </label>
                          <input
                            type="text"
                            name="excercise"
                            id="excercise"
                            placeholder="Enter excercise"
                            value={state.excercise}
                            onChange={onInputChange}
                            className={`w-full input text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.excercise ? " border-danger" : ""
                              }`}
                          />
                          {errors.excercise && (
                            <span className="text-danger font-size-3">
                              {errors.excercise.join(", ")}
                            </span>
                          )}
                        </div>
                      )}
                      {(state.activity_type === "interview" ||
                        state.activity_type === "other" ||
                        state.activity_type === "workshop" ||
                        state.activity_type === "assignment") && (
                          <div>
                            <label
                              htmlFor="teamlead_duration"
                              className="form_label"
                            >
                              Duration for Team Lead
                            </label>
                            <input
                              type="number"
                              name="teamlead_duration"
                              id="teamlead_duration"
                              value={state.teamlead_duration}
                              onChange={onInputChange}
                              className={`w-full input text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.teamlead_duration ? " border-danger" : ""
                                }`}
                            />
                            {errors.teamlead_duration && (
                              <span className="text-danger font-size-3">
                                {errors.teamlead_duration.join(", ")}
                              </span>
                            )}
                          </div>
                        )}
                      {(state.activity_type === "interview" ||
                        state.activity_type === "assignment" ||
                        state.activity_type === "other" ||
                        state.activity_type === "workshop") && (
                          <div>
                            <label
                              htmlFor="travel_time"
                              className="form_label"
                            >
                              Travel Time
                            </label>
                            <input
                              type="text"
                              name="travel_time"
                              id="travel_time"
                              value={state.travel_time}
                              onChange={onInputChange}
                              className={`w-full input text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.travel_time ? " border-danger" : ""
                                }`}
                            />
                            {errors.travel_time && (
                              <span className="text-danger font-size-3">
                                {errors.travel_time.join(", ")}
                              </span>
                            )}
                          </div>
                        )}
                      {(state.activity_type === "interview" ||
                        state.activity_type === "video" ||
                        state.activity_type === "assignment" ||
                        state.activity_type === "other" ||
                        state.activity_type === "podcast" ||
                        state.activity_type === "workshop") && (
                          <div>
                            <label
                              htmlFor="file"
                              className="form_label"
                            >
                              Attach File
                            </label>
                            <input
                              type="text"
                              name="file"
                              id="file"
                              value={state.file}
                              onChange={onInputChange}
                              className={`w-full input text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.file ? " border-danger" : ""
                                }`}
                            />
                            {errors.file && (
                              <span className="text-danger font-size-3">
                                {errors.file.join(", ")}
                              </span>
                            )}
                          </div>
                        )}
                      {(state.activity_type === "interview" ||
                        state.activity_type === "video" ||
                        state.activity_type === "assignment" ||
                        state.activity_type === "other" ||
                        state.activity_type === "podcast" ||
                        state.activity_type === "workshop") && (
                          <div>
                            <label
                              htmlFor="url"
                              className="form_label"
                            >
                              URL
                            </label>
                            <input
                              type="text"
                              name="url"
                              id="url"
                              value={state.url}
                              onChange={onInputChange}
                              className={`w-full input text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.url ? " border-danger" : ""
                                }`}
                            />
                            {errors.url && (
                              <span className="text-danger font-size-3">
                                {errors.url.join(", ")}
                              </span>
                            )}
                          </div>
                        )}
                      {(state.activity_type === "interview" ||
                        state.activity_type === "video" ||
                        state.activity_type === "assignment" ||
                        state.activity_type === "excercise" ||
                        state.activity_type === "other" ||
                        state.activity_type === "podcast" ||
                        state.activity_type === "workshop") && (
                          <div>
                            <label
                              htmlFor="indicate_when_completed"
                              className="form_label"
                            >
                              Indicate When Completed
                            </label>
                            <select
                              name="indicate_when_completed"
                              id="indicate_when_completed"
                              value={state.indicate_when_completed}
                              onChange={onInputChange}
                              className={`w-full input text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.indicate_when_completed
                                ? " border-danger"
                                : ""
                                }`}
                            >
                              <option value="">-Select-</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                            {errors.indicate_when_completed && (
                              <span className="text-danger font-size-3">
                                {errors.indicate_when_completed.join(", ")}
                              </span>
                            )}
                          </div>
                        )}

                      {(state.activity_type === "assignment" ||
                        state.activity_type === "other" ||
                        state.activity_type === "workshop") && (
                          <div>
                            <label
                              htmlFor="upload_possible"
                              className="form_label"
                            >
                              Upload Option
                            </label>
                            <select
                              name="upload_possible"
                              id="upload_possible"
                              value={state.upload_possible}
                              onChange={onInputChange}
                              className={`w-full input text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.upload_possible ? " border-danger" : ""
                                }`}
                            >
                              <option>-Select-</option>
                              <option value="True">Yes</option>
                              <option value="False">No</option>
                            </select>
                            {errors.upload_possible && (
                              <span className="text-danger font-size-3">
                                {errors.upload_possible.join(", ")}
                              </span>
                            )}
                          </div>
                        )}
                    </div>


                    <div className="flex justify-end gap-2 mt-4">
                      <CustomButton
                        type="button"
                        onClick={() => setStep(2)}
                        variant='none'
                        className="btn_cancle"
                      >
                        Back
                      </CustomButton>
                      <CustomButton
                        type="submit"
                        id={state.id}
                        onClick={(e) => { handleActivityAddAndUpdate(e, state?.id) }}
                        className=""
                      >
                        Submit
                      </CustomButton>
                    </div>
                  </div>
                ) : null}
              </div>
            </form>
          </div>
      
  );
}
