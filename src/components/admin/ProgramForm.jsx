import React, { useState } from "react";
import CustomButton from "../common/CustomButton";
import { updateUser } from "../../api/api";

export default function ProgramForm({
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
          <div className="bg-white max-h-full overflow-y-auto rounded-lg shadow-xl w-full max-w-md">
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold">Account Registration</h2>
            </div>
            <form className="p-4 space-y-3">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-gray-700 mb-1"
                >
                  name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter name"
                  value={state.name}
                  onChange={onInputChange}
                  className={`w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.name ? " border-danger" : ""
                    }`}
                />
                {errors.name && (
                  <span className="text-danger font-size-3">
                    {errors.name.join(", ")}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-xs font-medium text-gray-700 mb-1"
                >
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Enter description"
                  value={state.description}
                  onChange={onInputChange}
                  className={`w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.description ? " border-danger" : ""
                    }`}
                />
                {errors.description && (
                  <span className="text-danger font-size-3">
                    {errors.description.join(", ")}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="brand"
                  className="block text-xs font-medium text-gray-700 mb-1"
                >
                  Label
                </label>
                <select
                  name="brand"
                  id="brand"
                  value={state.brand}
                  onChange={onInputChange}
                  className={`w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.brand ? " border-danger" : ""
                    }`}
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
                <label
                  htmlFor="language"
                  className="block text-xs font-medium text-gray-700 mb-1"
                >
                  Label
                </label>
                <select
                  name="language"
                  id="language"
                  value={state.language}
                  onChange={onInputChange}
                  className={`w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.language ? " border-danger" : ""
                    }`}
                >
                  <option value="">Select Label</option>
                  <option value="important">Important</option>
                  <option value="urgent">Urgent</option>
                  <option value="normal">Normal</option>
                </select>
                {errors.language && (
                  <span className="text-danger font-size-3">
                    {errors.language.join(", ")}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="written_by"
                  className="block text-xs font-medium text-gray-700 mb-1"
                >
                  written_by
                </label>
                <input
                  type="text"
                  id="written_by"
                  name="written_by"
                  placeholder="Enter written_by"
                  value={state.written_by}
                  onChange={onInputChange}
                  required 
                  className={`w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500 ${errors.written_by ? " border-danger" : ""
                          }   `}
                />
                {errors.written_by && (
                  <span className="text-danger font-size-3">
                    {errors.written_by.join(", ")}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="version"
                  className="block text-xs font-medium text-gray-700 mb-1"
                >
                  version
                </label>
                <input
                  type="text"
                  id="version"
                  name="version"
                  placeholder="Enter version"
                  value={state.version}
                  onChange={onInputChange}
                  required
                  className={`w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-[#039a77] ${errors.brand ? " border-danger" : ""
                    }`}
                />
                {errors.version && (
                  <span className="text-danger font-size-3">
                    {errors.version.join(", ")}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block text-xs font-medium text-gray-700 mb-1"
                >
                  price
                </label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  placeholder="Enter price"
                  value={state.price}
                  onChange={onInputChange}
                  required
                  className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                {errors.price && (
                  <span className="text-danger font-size-3">
                    {errors.price.join(", ")}
                  </span>
                )}
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
