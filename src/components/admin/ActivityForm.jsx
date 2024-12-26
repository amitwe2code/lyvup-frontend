import React, { useState } from 'react';
import CustomButton from '../common/CustomButton';

export default function ActivityForm({isOpen, setIsOpen}) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    language: '', type: '', name: '', description: '',
    survey: '', forWhom: '', cost: '', price: '',
    showInTask: 'no', sendReminder: 'no', addComment: 'no'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
            <div className="p-3 border-b flex-shrink-0">
              <h2 className="text-lg font-semibold text-[#039a77]">
                {step === 1 ? 'Step 1: Initial Details' : 'Step 2: Additional Information'}
              </h2>
            </div>
            
            <div className="overflow-y-auto flex-grow">
              {step === 1 ? (
                <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="p-4">
                  <div className="grid  sm:grid-cols-2 gap-3">
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
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 mt-4">
                    <CustomButton
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="px-3 py-1.5 text-sm border rounded text-[#039a77] border-[#039a77]"
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
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }} className="p-4">
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
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
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
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
                          className="w-full p-2 text-sm focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
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
                          <option value="">Select Target</option>
                          <option value="group1">Group 1</option>
                          <option value="group2">Group 2</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          Cost
                        </label>
                        <input
                          type="text"
                          name="cost"
                          value={formData.cost}
                          onChange={handleInputChange}
                          className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          Price
                        </label>
                        <input
                          type="text"
                          name="price"
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
                    </div>

                    <div className="grid grid-cols-2 gap-3">
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
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
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
                        {/* Empty div for maintaining grid layout */}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 mt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
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
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
