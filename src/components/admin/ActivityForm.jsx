import React, { useState } from 'react';
import CustomButton from '../common/CustomButton';

export default function ActivityForm({ isOpen, setIsOpen }) {
  const [formData, setFormData] = useState({
    language: '', type: '', name: '', description: '',
    survey: '', forWhom: '', cost: '', price: '',
    showInTask: 'no', sendReminder: 'no', addComment: 'no',
    amount: '', location: '', practitioner_type: '', travel_time: '',
    duration_user: '', duration_team_lead: "", duration_practitioner: '',
    indicate: '', url: '', file: ''
  });
  const [step, setStep] = useState(1);

  // if (formData.type == 'null' || formData.type == '' || formData.type == 'undefined') {
  //   setStep(1)
  // }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  console.log('challenge =>', formData.type);

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

            <div className="overflow-y-auto flex-grow">
              {step === 1 ? (<>
                <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="p-4">
                  <div className="grid  sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold  mb-1">
                        Language
                      </label>
                      <select
                        name="language"
                        value={formData.language}
                        onChange={handleInputChange}
                        required
                        className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                      >
                        <option value="">Select Language</option>
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Type
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        required
                        className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                      >
                        <option value="">Select Type</option>
                        <option value="survey">survey</option>
                        <option value="challenge">challenge</option>
                        <option value="interview">interview</option>
                        <option value="video">video</option>
                        <option value="workshop">workshop</option>
                        <option value="video">assignment</option>
                        <option value="excercise">excercise</option>
                        <option value="podcast">podcast</option>
                        <option value="other">other</option>
                      </select>
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
                      type="submit"
                      className="px-3 py-1.5 text-sm bg-[#039a77] text-white rounded hover:bg-[#028567]"
                    >
                      Next
                    </CustomButton>
                  </div>
                </form>
              </>) : null}


              {formData.type && step === 2 ? (<>
                <form onSubmit={(e) => { e.preventDefault(); setStep(3); }} className="p-4">
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
                    <div className=''>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                      />
                    </div>
                    <div className=' row-span-3'>
                      <label className="block w-full text-xs font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      <div className="border rounded focus-within:ring-1 focus-within:ring-[#039a77]">
                        <div className="border-b p-1.5 flex gap-2">
                          <button type="button" className="px-2 py-0.5 text-xs border rounded">H1</button>
                          <button type="button" className="px-2 py-0.5 text-xs border rounded">H2</button>
                          <button type="button" className="px-2 py-0.5 text-xs border rounded">H3</button>
                        </div>
                        <textarea
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          rows={2}
                          className="w-full min-h-32 p-2 text-sm focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className=''>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Label
                      </label>
                      <select
                        name="label"
                        value={formData.label}
                        onChange={handleInputChange}
                        className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                      >
                        <option value="">Select Label</option>
                        <option value="important">Important</option>
                        <option value="urgent">Urgent</option>
                        <option value="normal">Normal</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        For Whom
                      </label>
                      <select
                        name="forWhom"
                        value={formData.forWhom}
                        onChange={handleInputChange}
                        required
                        className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                      >
                        <option value="">-Select-</option>
                        <option value="group1">Group 1</option>
                        <option value="group2">Group 2</option>
                      </select>
                    </div>

                  </div>

                  <div className="flex justify-end gap-2 mt-4">
                    <CustomButton
                      type="button"
                      variant='outline'
                      onClick={() => setStep(1)}
                      className="px-3 py-1.5 text-sm border hover:bg-gray-300 rounded hover:text-[#039a77] "
                    >
                      Cancel
                    </CustomButton>
                    <CustomButton
                      type="submit"
                      className="px-3 py-1.5 text-sm bg-[#039a77] text-white rounded hover:bg-[#028567]"
                    >
                      Next
                    </CustomButton>
                  </div>
                </form>
              </>) : null}




              {formData.type && step === 3 ? (<>
                <form onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }} className="p-4">
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

                      {formData.type == 'survey' ? (<>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Survey
                          </label>
                          <select
                            name="survey"
                            value={formData.survey}
                            onChange={handleInputChange}
                            required
                            className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                          >
                            <option value="">Select Survey</option>
                            <option value="survey1">Survey 1</option>
                            <option value="survey2">Survey 2</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Cost
                          </label>
                          <input
                            type="number"
                            name="cost"
                            value={formData.cost}
                            placeholder='price'
                            onChange={handleInputChange}
                            className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Price
                          </label>
                          <input
                            type="number"
                            name="price"
                            placeholder='price'
                            value={formData.price}
                            onChange={handleInputChange}
                            className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Show in Task
                          </label>
                          <select
                            name="showInTask"
                            value={formData.showInTask}
                            onChange={handleInputChange}
                            className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                          >
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Send Reminder
                          </label>
                          <select
                            name="sendReminder"
                            value={formData.sendReminder}
                            onChange={handleInputChange}
                            className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                          >
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Add Comment
                          </label>
                          <select
                            name="addComment"
                            value={formData.addComment}
                            onChange={handleInputChange}
                            className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                          >
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                      </>) : null}
                      {formData.type == 'challenge' ? (
                        <>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Amount
                            </label>
                            <input
                              type="number"
                              name="amount"
                              value={formData.amount}
                              onChange={handleInputChange}
                              placeholder='-Amount-'
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Survey
                            </label>
                            <select
                              name="survey"
                              value={formData.survey}
                              onChange={handleInputChange}
                              required
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            >
                              <option value="">Select Survey</option>
                              <option value="survey1">Survey 1</option>
                              <option value="survey2">Survey 2</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Cost
                            </label>
                            <input
                              type="number"
                              name="cost"
                              value={formData.cost}
                              placeholder='cost'
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Price
                            </label>
                            <input
                              type="number"
                              name="price"
                              placeholder='price'
                              value={formData.price}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Show in Task
                            </label>
                            <select
                              name="showInTask"
                              value={formData.showInTask}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            >
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Send Reminder
                            </label>
                            <select
                              name="sendReminder"
                              value={formData.sendReminder}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            >
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Add Comment
                            </label>
                            <select
                              name="addComment"
                              value={formData.addComment}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            >
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>

                        </>) : null}
                      {formData.type == 'interview' ? (
                        <>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Location
                            </label>
                            <select
                              name="location"
                              value={formData.location}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            >
                              <option value=""> -Select-</option>
                              <option value="group1">Group 1</option>
                              <option value="group2">Group 2</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Parctitioner type
                            </label>
                            <select
                              name="Parctitioner_type"
                              value={formData.Parctitioner_type}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            >
                              <option value="">-Select-</option>
                              <option value="group1">Group 1</option>
                              <option value="group2">Group 2</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Travel time
                            </label>
                            <input
                              type="number"
                              name="travel_time"
                              value={formData.travel_time}
                              placeholder='travel time'
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            />
                          </div>
                          <div >
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Duration (user)
                            </label>
                            <input
                              type="number"
                              name="duration_user"
                              value={formData.duration_user}
                              placeholder='Duration (user)'
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Duration (team lead)
                            </label>
                            <input
                              type="number"
                              name="duration_team_lead"
                              value={formData.duration_team_lead}
                              placeholder='Duration (team lead)'
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Duration (Practitioner)
                            </label>
                            <input
                              type="number"
                              name="duration_practitioner"
                              value={formData.duration_Practitioner}
                              placeholder='Duration (Practitioner)'
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Cost
                            </label>
                            <input
                              type="number"
                              name="cost"
                              placeholder='cost'
                              value={formData.cost}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Price
                            </label>
                            <input
                              type="number"
                              name="price"
                              placeholder='price'
                              value={formData.price}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Show in Task
                            </label>
                            <select
                              name="showInTask"
                              value={formData.showInTask}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            >
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Send Reminder
                            </label>
                            <select
                              name="sendReminder"
                              value={formData.sendReminder}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            >
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Add Comment
                            </label>
                            <select
                              name="addComment"
                              value={formData.addComment}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            >
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Indicate when completed
                            </label>
                            <select
                              name="addComment"
                              value={formData.addComment}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            >
                              <option value="">-select-</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              URL
                            </label>
                            <input
                              type="number"
                              name="URL"
                              value={formData.URL}
                              placeholder='URL'
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Attach file
                            </label>
                            <input
                              type="file"
                              name="file"
                              value={formData.file}
                              placeholder='file'
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            />
                          </div>


                        </>) : null}
                      {formData.type == 'video' || formData.type == 'podcast' ? (<>
                        <div >
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Duration (user)
                          </label>
                          <input
                            type="number"
                            name="duration_user"
                            value={formData.duration_user}
                            placeholder='Duration (user)'
                            onChange={handleInputChange}
                            className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Cost
                          </label>
                          <input
                            type="number"
                            name="cost"
                            value={formData.cost}
                            placeholder='cost'
                            onChange={handleInputChange}
                            className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Price
                          </label>
                          <input
                            type="number"
                            name="price"
                            placeholder='price'
                            value={formData.price}
                            onChange={handleInputChange}
                            className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Show in Task
                          </label>
                          <select
                            name="showInTask"
                            value={formData.showInTask}
                            onChange={handleInputChange}
                            className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                          >
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Send Reminder
                          </label>
                          <select
                            name="sendReminder"
                            value={formData.sendReminder}
                            onChange={handleInputChange}
                            className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                          >
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Add Comment
                          </label>
                          <select
                            name="addComment"
                            value={formData.addComment}
                            onChange={handleInputChange}
                            className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                          >
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Indicate when completed
                          </label>
                          <select
                            name="addComment"
                            value={formData.addComment}
                            onChange={handleInputChange}
                            className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                          >
                            <option value="">-select-</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            URL
                          </label>
                          <input
                            type="number"
                            name="URL"
                            value={formData.URL}
                            placeholder='URL'
                            onChange={handleInputChange}
                            className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Attach file
                          </label>
                          <input
                            type="file"
                            name="file"
                            value={formData.file}
                            placeholder='file'
                            onChange={handleInputChange}
                            className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                          />
                        </div>
                      </>) : null}
                      {formData.type == 'workshop' || formData.type == 'assignment' ? (
                        <>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Location
                            </label>
                            <select
                              name="location"
                              value={formData.location}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            >
                              <option value=""> -Select-</option>
                              <option value="group1">Group 1</option>
                              <option value="group2">Group 2</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Parctitioner type
                            </label>
                            <select
                              name="Parctitioner_type"
                              value={formData.Parctitioner_type}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            >
                              <option value="">-Select-</option>
                              <option value="group1">Group 1</option>
                              <option value="group2">Group 2</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Travel time
                            </label>
                            <input
                              type="number"
                              name="travel_time"
                              value={formData.travel_time}
                              placeholder='travel time'
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            />
                          </div>
                          <div >
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Duration (user)
                            </label>
                            <input
                              type="number"
                              name="duration_user"
                              value={formData.duration_user}
                              placeholder='Duration (user)'
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Duration (team lead)
                            </label>
                            <input
                              type="number"
                              name="duration_team_lead"
                              value={formData.duration_team_lead}
                              placeholder='Duration (team lead)'
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Duration (Practitioner)
                            </label>
                            <input
                              type="number"
                              name="duration_practitioner"
                              value={formData.duration_Practitioner}
                              placeholder='Duration (Practitioner)'
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Cost
                            </label>
                            <input
                              type="next"
                              name="cost"
                              placeholder='cost'
                              value={formData.cost}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Price
                            </label>
                            <input
                              type="number"
                              name="price"
                              placeholder='price'
                              value={formData.price}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Show in Task
                            </label>
                            <select
                              name="showInTask"
                              value={formData.showInTask}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            >
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Send Reminder
                            </label>
                            <select
                              name="sendReminder"
                              value={formData.sendReminder}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            >
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Add Comment
                            </label>
                            <select
                              name="addComment"
                              value={formData.addComment}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            >
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Indicate when completed
                            </label>
                            <select
                              name="indicate"
                              value={formData.indicate}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            >
                              <option value="">-select-</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              URL
                            </label>
                            <input
                              type="number"
                              name="URL"
                              value={formData.URL}
                              placeholder='URL'
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Attach file
                            </label>
                            <input
                              type="file"
                              name="file"
                              value={formData.file}
                              placeholder='file'
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Upload Option
                            </label>
                            <select
                              name=""
                              value={formData.upload_option}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            >
                              <option value="">-select-</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>



                        </>
                      ) : null}
                      {formData.type == 'excercise' ? (
                        <>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Excercise
                            </label>
                            <input
                              type="text"
                              name="excercise"
                              value={formData.excercise}
                              placeholder='excercise'
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Indicate when completed
                            </label>
                            <select
                              name="indicate"
                              value={formData.indicate}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            >
                              <option value="">-select-</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>


                        </>) : null}
                      {formData.type == 'other' ? (
                        <>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              cp_enter Other
                            </label>
                            <input
                              type="text"
                              name="other"
                              value={formData.other}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Amount
                            </label>
                            <input
                              type="number"
                              name="amount"
                              value={formData.amount}
                              onChange={handleInputChange}
                              placeholder='-Amount-'
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Location
                            </label>
                            <select
                              name="location"
                              value={formData.location}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            >
                              <option value=""> -Select-</option>
                              <option value="group1">Group 1</option>
                              <option value="group2">Group 2</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Parctitioner type
                            </label>
                            <select
                              name="Parctitioner_type"
                              value={formData.Parctitioner_type}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            >
                              <option value="">-Select-</option>
                              <option value="group1">Group 1</option>
                              <option value="group2">Group 2</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Travel time
                            </label>
                            <input
                              type="number"
                              name="travel_time"
                              value={formData.travel_time}
                              placeholder='travel time'
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            />
                          </div>
                          <div >
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Duration (user)
                            </label>
                            <input
                              type="number"
                              name="duration_user"
                              value={formData.duration_user}
                              placeholder='Duration (user)'
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Duration (team lead)
                            </label>
                            <input
                              type="number"
                              name="duration_team_lead"
                              value={formData.duration_team_lead}
                              placeholder='Duration (team lead)'
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Duration (Practitioner)
                            </label>
                            <input
                              type="number"
                              name="duration_practitioner"
                              value={formData.duration_Practitioner}
                              placeholder='Duration (Practitioner)'
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Cost
                            </label>
                            <input
                              type="next"
                              name="cost"
                              placeholder='cost'
                              value={formData.cost}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Price
                            </label>
                            <input
                              type="number"
                              name="price"
                              placeholder='price'
                              value={formData.price}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Show in Task
                            </label>
                            <select
                              name="showInTask"
                              value={formData.showInTask}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            >
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Send Reminder
                            </label>
                            <select
                              name="sendReminder"
                              value={formData.sendReminder}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            >
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Add Comment
                            </label>
                            <select
                              name="addComment"
                              value={formData.addComment}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            >
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Indicate when completed
                            </label>
                            <select
                              name="indicate"
                              value={formData.indicate}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            >
                              <option value="">-select-</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              URL
                            </label>
                            <input
                              type="number"
                              name="URL"
                              value={formData.URL}
                              placeholder='URL'
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Attach file
                            </label>
                            <input
                              type="file"
                              name="file"
                              value={formData.file}
                              placeholder='file'
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Upload Option
                            </label>
                            <select
                              name=""
                              value={formData.upload_option}
                              onChange={handleInputChange}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                            >
                              <option value="">-select-</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                        </>
                      ) : null}
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
                </form>
              </>) : null}

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
