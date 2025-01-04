import React, { useState } from "react";
import CustomButton from "../common/CustomButton";
import { updateUser } from "../../api/api";

export default function ActivityActionTypeForm({
  initialFormState,
  isOpen,
  setIsOpen,
  state,
  setState,
  onInputChange,
  errors,
  handleFormSubmit,
}) {
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold">Account Registration</h2>
            </div>
            <form className="p-4 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="activity_type"
                    className="block text-xs font-medium text-gray-700 mb-1"
                  >
                    activity_type
                  </label>
                  <input
                    type="text"
                    id="activity_type"
                    name="activity_type"
                    placeholder="Enter activity_type"
                    value={state.activity_type}
                    onChange={onInputChange}
                    required
                     className={`w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500   ${errors.activity_type ? " border-danger" : ""
                          } `}
                  />
                  {errors.activity_type && (
                    <span className="text-danger font-size-3">
                      {errors.activity_type.join(", ")}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="activity"
                    className="block text-xs font-medium text-gray-700 mb-1"
                  >
                    activity
                  </label>
                  <input
                    type="text"
                    id="activity"
                    name="activity"
                    placeholder="Enter activity"
                    value={state.activity}
                    onChange={onInputChange}
                    required
                     className={`w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500   ${errors.activity ? " border-danger" : ""
                          } `}
                  />
                  {errors.activity && (
                    <span className="text-danger font-size-3">
                      {errors.activity.join(", ")}
                    </span>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="amount"
                    className="block text-xs font-medium text-gray-700 mb-1"
                  >
                    amount
                  </label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder="Enter amount"
                    value={state.amount}
                    onChange={onInputChange}
                    required
                     className={`w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500   ${errors.amount ? " border-danger" : ""
                          } `}
                  />
                  {errors.amount && (
                    <span className="text-danger font-size-3">
                      {errors.amount.join(", ")}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="unit"
                    className="block text-xs font-medium text-gray-700 mb-1"
                  >
                    unit
                  </label>
                  <input
                    type="number"
                    id="unit"
                    name="unit"
                    placeholder="Enter unit"
                    value={state.unit}
                    onChange={onInputChange}
                    required
                     className={`w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500   ${errors.unit ? " border-danger" : ""
                          } `}
                  />
                  {errors.unit && (
                    <span className="text-danger font-size-3">
                      {errors.unit.join(", ")}
                    </span>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="key_activity"
                    className="block text-xs font-medium text-gray-700 mb-1"
                  >
                    key_activity
                  </label>
                  <input
                    type="text"
                    id="key_activity"
                    name="key_activity"
                    placeholder="Enter key_activity"
                    value={state.key_activity}
                    onChange={onInputChange}
                    required
                    className={`w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500   ${errors.key_activity ? " border-danger" : ""
                          } `}
                  />
                  {errors.key_activity && (
                    <span className="text-danger font-size-3">
                      {errors.key_activity.join(", ")}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <CustomButton
                  type="button"
                  onClick={() => {
                    setState(initialFormState)
                    setIsOpen(false)
                  }
                }
                  className="px-3 py-1 text-xs bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                >
                  Cancel
                </CustomButton>
                <CustomButton
                  type="submit"
                  id={state?.id}
                  variant="outline"
                  onClick={handleFormSubmit}
                  className="px-3 py-1 text-xs   rounded focus:outline-none focus:ring-2  focus:ring-opacity-50"
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
