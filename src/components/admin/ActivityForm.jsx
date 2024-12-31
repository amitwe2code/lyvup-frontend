import React, { useState } from 'react';
import CustomButton from '../common/CustomButton';
import useValidation from '../common/UseValidation';

export default function ActivityForm({ isOpen, setIsOpen, }) {
  const [step, setStep] = useState(1);
  const initialFormState = {
    activity: "",
    intervetion_name: "",
    intervention_type: "",
    intervention_description: "",
    brand: "",
    coach_type: "",
    costs: "",
    location: "",
    user_duration: "",
    duration_coach: "",
    duration_teamlead: "",
    file: "",
    indicate_when_completed: "",
    language: "",
    price: "",
    send_reminder: "",
    show_in_task: "",
    travel_time: "",
    upload_possible: "",
    url: "",
    who: "",
  }

  // const initialFormState = formData
  const validators = {
    intervention_type: [(value) =>
      step === 1 ?
        value === null || value.trim() === ""
          ? "Activity type is required"
          : null
        : null
    ],
    language: [(value) =>
      step === 1 ?
        value === null || value.trim() === ""
          ? "Language is required"
          : null
        : null
    ],
    intervention_name: [
      (value) =>
        step === 1 || step === 2 ?
          value === null || value.trim() === ""
            ? "Intervention name is required"
            : null
          : null,
    ],
    intervention_description: [
      (value) =>
        step === 1 || step === 2 ?
          value === null || value.trim() === ""
            ? "Intervention description is required"
            : null
          : null,
    ],
    brand: [
      (value) =>
        step === 1 || step === 2 ?
          value === null || value.trim() === ""
            ? "Brand is required"
            : null
          : null,
    ],
    coach_type: [(value) =>
      step === 1 || step === 2 ?
        value === null || value.trim() === ""
          ? "Coach type is required"
          : null
        : null
    ],
    activity: [
      (value) =>
        step === 1 ?
          null :
          value === null || value.trim() === ""
            ? "Activity is required"
            : null,
    ],
    who: [
      (value) =>
        step === 1 ?
          value === null || value.trim() === ""
            ? "For whom is required"
            : null
          : null,
    ],
    costs: [
      (value) =>
        step === 1 ?
          value === null || value.trim() === ""
            ? "Costs are required"
            : null
          : null,
    ],
    user_duration: [
      (value) =>
        step === 1 ?
          value === null || value.trim() === ""
            ? "User duration is required"
            : null
          : null,
    ],
    duration_coach: [
      (value) =>
        step === 1 ?
          value === null || value.trim() === ""
            ? "Duration for coach is required"
            : null
          : null,
    ],
    duration_teamlead: [
      (value) =>
        step === 1 ?
          value === null || value.trim() === ""
            ? "Duration for team lead is required"
            : null
          : null,
    ],
    travel_time: [
      (value) =>
        step === 1 ?
          value === null || value.trim() === ""
            ? "Travel time is required"
            : null
          : null,
    ],
    file: [
      (value) =>
        step === 1 ?
          value === null || value.trim() === ""
            ? "File is required"
            : null
          : null,
    ],
    url: [
      (value) =>
        step === 1 ?
          value === null || value.trim() === ""
            ? "URL is required"
            : null
          : null,
    ],
    indicate_when_completed: [
      (value) =>
        step === 1 ?
          value === null || value.trim() === ""
            ? "Indicate when completed is required"
            : null
          : null,
    ],
    send_reminder: [
      (value) =>
        step === 1 ?
          value === null || value.trim() === ""
            ? "Send reminder option is required"
            : null
          : null,
    ],
    show_in_task: [
      (value) =>
        step === 1 ?
          value === null || value.trim() === ""
            ? "Show in task option is required"
            : null
          : null,
    ],
    upload_possible: [
      (value) =>
        step === 1 ?
          value === null || value.trim() === ""
            ? "Upload option is required"
            : null
          : null,
    ],
    add_comment_option: [
      (value) =>
        step === 1 ?
          value === null || value.trim() === ""
            ? "Add comment option is required"
            : null
          : null,
    ],
  }

  const { state, setState, onInputChange, errors, setErrors, validate } = useValidation(initialFormState, validators);


  // console.log('challenge =>', formData.type);
  console.log("intervention type =>", state.intervention_type);

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col">
            <div className="p-3 border-b flex justify-between item-center ">
              <h2 className="text-lg font-semibold text-[#039a77]">
                {step === 1 ? 'Step 1: Initial Details' : step === 2 ? 'Step 2 : Basic Details' : 'Step 3 : Final Details'}
              </h2>
              <CustomButton size='small ' variant='outline ' className='font-bold' onClick={() => setIsOpen(false)}>X</CustomButton>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); }} className="p-4">
              <div className="overflow-y-auto flex-grow">
                {step === 1 ? (<>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor='language' className="block text-xs font-bold mb-1">
                        Language
                      </label>
                      <select
                        id='language'
                        name="language"
                        value={state.language}
                        onChange={onInputChange}
                        className={`w-full px-2 py-1 text-sm border ${errors.language ? " border-danger" : ""} rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]`}
                      >
                        <option value="">Select Language</option>
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                      </select>
                      {errors.language && (
                        <span className="text-danger font-size-3">
                          {errors.language.join(", ")}
                        </span>
                      )}
                    </div>
                    <div>
                      <label htmlFor='intervention_type' className={`block text-xs font-bold text-gray-700 mb-1`}>
                        Type
                      </label>
                      <select
                        name="intervention_type"
                        id="intervention_type"
                        value={state.intervention_type}
                        onChange={onInputChange}
                        className={`w-full ${errors.intervention_type ? " border-danger" : ""} px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]`}
                      >
                        <option value="">Select Type</option>
                        <option value="survey">survey</option>
                        <option value="challenge">challenge</option>
                        <option value="interview">interview</option>
                        <option value="video">video</option>
                        <option value="workshop">workshop</option>
                        <option value="assignment">assignment</option>
                        <option value="exercise">exercise</option>
                        <option value="podcast">podcast</option>
                        <option value="other">other</option>
                      </select>
                      {errors.intervention_type && (
                        <span className="text-danger font-size-3">
                          {errors.intervention_type.join(", ")}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 mt-4">
                    <CustomButton
                      type="button"
                      variant='outline'
                      onClick={() => setIsOpen(false)}
                      className="px-3 py-1.5 text-sm border hover:bg-gray-300 rounded hover:text-[#039a77] "
                    >
                      Cancel
                    </CustomButton>
                    <CustomButton
                      type="button"
                      onClick={() => {
                        if (validate()) {
                          setStep(2)
                        }
                      }}
                      className="px-3 py-1.5 text-sm bg-[#039a77] text-white rounded hover:bg-[#028567]"
                    >
                      Next
                    </CustomButton>
                  </div>
                </>) : null}

                {state.intervention_type && step === 2 ? (<>
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor='intervention_name' className="block text-xs font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        name="intervention_name"
                        id='intervention_name'
                        value={state.intervention_name}
                        onChange={onInputChange}
                        className={`w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.intervention_name ? " border-danger" : ""}`}
                      />
                      {errors.intervention_name && (
                        <span className="text-danger font-size-3">
                          {errors.intervention_name.join(", ")}
                        </span>
                      )}
                    </div>
                    <div>
                      <label htmlFor='intervention_description' className="block text-xs font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      <textarea
                        name="intervention_description"
                        id='intervention_description'
                        value={state.intervention_description}
                        onChange={onInputChange}
                        rows={2}
                        className={`w-full min-h-32 p-2 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.intervention_description ? " border-danger" : ""}`}
                      />
                      {errors.intervention_description && (
                        <span className="text-danger font-size-3">
                          {errors.intervention_description.join(", ")}
                        </span>
                      )}
                    </div>
                    <div>
                      <label htmlFor='brand' className="block text-xs font-medium text-gray-700 mb-1">
                        Label
                      </label>
                      <select
                        name="brand"
                        id='brand'
                        value={state.brand}
                        onChange={onInputChange}
                        className={`w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.brand ? " border-danger" : ""}`}
                      >
                        <option value="">Select Label</option>
                        <option value="important">Important</option>
                        <option value="urgent">Urgent</option>
                        <option value="normal">Normal</option>
                      </select>
                      {errors.brand && (
                        <span className="text-danger font-size-3">
                          {errors.brand.join(", ")}
                        </span>
                      )}
                    </div>
                    <div>
                      <label htmlFor='who' className="block text-xs font-medium text-gray-700 mb-1">
                        For Whom
                      </label>
                      <select
                        name="who"
                        id='who'
                        value={state.who}
                        onChange={onInputChange}
                        className={`w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.who ? " border-danger" : ""}`}
                      >
                        <option value="">-Select-</option>
                        <option value="group1">Group 1</option>
                        <option value="group2">Group 2</option>
                      </select>
                      {errors.who && (
                        <span className="text-danger font-size-3">
                          {errors.who.join(", ")}
                        </span>
                      )}
                    </div>
                    <div>
                      <label htmlFor='costs' className="block text-xs font-medium text-gray-700 mb-1">
                        Costs
                      </label>
                      <input
                        type="text"
                        name="costs"
                        id='costs'
                        value={state.costs}
                        onChange={onInputChange}
                        className={`w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.costs ? " border-danger" : ""}`}
                      />
                      {errors.costs && (
                        <span className="text-danger font-size-3">
                          {errors.costs.join(", ")}
                        </span>
                      )}
                    </div>
                    <div>
                      <label htmlFor='user_duration' className="block text-xs font-medium text-gray-700 mb-1">
                        User Duration
                      </label>
                      <input
                        type="text"
                        name="user_duration"
                        id='user_duration'
                        value={state.user_duration}
                        onChange={onInputChange}
                        className={`w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.user_duration ? " border-danger" : ""}`}
                      />
                      {errors.user_duration && (
                        <span className="text-danger font-size-3">
                          {errors.user_duration.join(", ")}
                        </span>
                      )}
                    </div>
                    <div>
                      <label htmlFor='duration_coach' className="block text-xs font-medium text-gray-700 mb-1">
                        Duration for Coach
                      </label>
                      <input
                        type="text"
                        name="duration_coach"
                        id='duration_coach'
                        value={state.duration_coach}
                        onChange={onInputChange}
                        className={`w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.duration_coach ? " border-danger" : ""}`}
                      />
                      {errors.duration_coach && (
                        <span className="text-danger font-size-3">
                          {errors.duration_coach.join(", ")}
                        </span>
                      )}
                    </div>
                    <div>
                      <label htmlFor='duration_teamlead' className="block text-xs font-medium text-gray-700 mb-1">
                        Duration for Team Lead
                      </label>
                      <input
                        type="text"
                        name="duration_teamlead"
                        id='duration_teamlead'
                        value={state.duration_teamlead}
                        onChange={onInputChange}
                        className={`w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.duration_teamlead ? " border-danger" : ""}`}
                      />
                      {errors.duration_teamlead && (
                        <span className="text-danger font-size-3">
                          {errors.duration_teamlead.join(", ")}
                        </span>
                      )}
                    </div>
                    <div>
                      <label htmlFor='travel_time' className="block text-xs font-medium text-gray-700 mb-1">
                        Travel Time
                      </label>
                      <input
                        type="text"
                        name="travel_time"
                        id='travel_time'
                        value={state.travel_time}
                        onChange={onInputChange}
                        className={`w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.travel_time ? " border-danger" : ""}`}
                      />
                      {errors.travel_time && (
                        <span className="text-danger font-size-3">
                          {errors.travel_time.join(", ")}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 mt-4">
                    <CustomButton
                      type="button"
                      variant='outline'
                      onClick={() => { setStep(1) }}
                      className="px-3 py-1.5 text-sm border hover:bg-gray-300 rounded hover:text-[#039a77] "
                    >
                      Cancel
                    </CustomButton>
                    <CustomButton
                      type="button"
                      onClick={() => {
                        if (validate()) {
                          setStep(3)
                        }
                      }}
                      className="px-3 py-1.5 text-sm bg-[#039a77] text-white rounded hover:bg-[#028567]"
                    >
                      Next
                    </CustomButton>
                  </div>
                </>) : null}

                {state.intervention_type && step === 3 ? (<>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                      <div>
                        <label htmlFor='file' className="block text-xs font-medium text-gray-700 mb-1">
                          Attach File
                        </label>
                        <input
                          type="file"
                          name="file"
                          id='file'
                          value={state.file}
                          onChange={onInputChange}
                          className={`w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.file ? " border-danger" : ""}`}
                        />
                        {errors.file && (
                          <span className="text-danger font-size-3">
                            {errors.file.join(", ")}
                          </span>
                        )}
                      </div>
                      <div>
                        <label htmlFor='url' className="block text-xs font-medium text-gray-700 mb-1">
                          URL
                        </label>
                        <input
                          type="text"
                          name="url"
                          id='url'
                          value={state.url}
                          onChange={onInputChange}
                          className={`w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.url ? " border-danger" : ""}`}
                        />
                        {errors.url && (
                          <span className="text-danger font-size-3">
                            {errors.url.join(", ")}
                          </span>
                        )}
                      </div>
                      <div>
                        <label htmlFor='indicate_when_completed' className="block text-xs font-medium text-gray-700 mb-1">
                          Indicate When Completed
                        </label>
                        <select
                          name="indicate_when_completed"
                          id='indicate_when_completed'
                          value={state.indicate_when_completed}
                          onChange={onInputChange}
                          className={`w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.indicate_when_completed ? " border-danger" : ""}`}
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
                      <div>
                        <label htmlFor='send_reminder' className="block text-xs font-medium text-gray-700 mb-1">
                          Send Reminder
                        </label>
                        <select
                          name="send_reminder"
                          id='send_reminder'
                          value={state.send_reminder}
                          onChange={onInputChange}
                          className={`w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.send_reminder ? " border-danger" : ""}`}
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
                      <div>
                        <label htmlFor='show_in_task' className="block text-xs font-medium text-gray-700 mb-1">
                          Show in Task
                        </label>
                        <select
                          name="show_in_task"
                          id='show_in_task'
                          value={state.show_in_task}
                          onChange={onInputChange}
                          className={`w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.show_in_task ? " border-danger" : ""}`}
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
                      <div>
                        <label htmlFor='upload_possible' className="block text-xs font-medium text-gray-700 mb-1">
                          Upload Option
                        </label>
                        <select
                          name="upload_possible"
                          id='upload_possible'
                          value={state.upload_possible}
                          onChange={onInputChange}
                          className={`w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.upload_possible ? " border-danger" : ""}`}
                        >
                          <option value="">-Select-</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                        {errors.upload_possible && (
                          <span className="text-danger font-size-3">
                            {errors.upload_possible.join(", ")}
                          </span>
                        )}
                      </div>
                      <div>
                        <label htmlFor='add_comment_option' className="block text-xs font-medium text-gray-700 mb-1">
                          Add Comment
                        </label>
                        <select
                          name="add_comment_option"
                          id='add_comment_option'
                          value={state.add_comment_option}
                          onChange={onInputChange}
                          className={`w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.add_comment_option ? " border-danger" : ""}`}
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
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-3 py-1.5 text-sm border rounded text-[#039a77] border-[#039a77]"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="px-3 py-1.5 text-sm bg-[#039a77] text-white rounded hover:bg-[#028567]"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </>) : null}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
