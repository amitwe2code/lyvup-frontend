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

  const close=()=>{
    setState(initialFormState);
    setIsOpen(false)
  }

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-[white] max-h-full overflow-y-auto rounded-lg shadow-xl w-full max-w-md">
            <div className="p-3 border-b flex flex-row justify-between items-center">
              <h2 className="text-lg font-semibold text_theme_color">Account Registration</h2>
              <button className="font-semibold " onClick={()=>close()}>X</button>
            </div>
            <form className="p-4 space-y-3">
              <div>
                <label
                  htmlFor="name"
                  className="block capitalize  font-medium text-gray-700 mb-1"
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
                  className={`w-full p-2 input text-sm rounded-md  ${errors.name ? " border-danger" : ""
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
                  className="block  font-medium text-gray-700 mb-1"
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
                  className={`w-full p-2 input text-sm  rounded  ${errors.description ? " border-danger" : ""
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
                  className="block  font-medium text-gray-700 mb-1"
                >
                  Label
                </label>
                <select
                  name="brand"
                  id="brand"
                  value={state.brand}
                  onChange={onInputChange}
                  className={`w-full p-2 input text-sm  rounded  ${errors.brand ? " border-danger" : ""
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
                  className="block  font-medium text-gray-700 mb-1"
                >
                  Label
                </label>
                <select
                  name="language"
                  id="language"
                  value={state.language}
                  onChange={onInputChange}
                  className={`w-full p-2 input text-sm  rounded  ${errors.language ? " border-danger" : ""
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
                  className="block  font-medium text-gray-700 mb-1"
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
                  className={`w-full p-2 input text-sm  rounded  ${errors.written_by ? " border-danger" : ""
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
                  className="block  font-medium text-gray-700 mb-1"
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
                  className={`w-full p-2 input text-sm  rounded  ${errors.version ? " border-danger" : ""
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
                  className="block  font-medium text-gray-700 mb-1"
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
                  className={`w-full p-2 input text-sm  rounded  ${errors.price ? " border-danger" : ""
                    }`}
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
                  className="px-3 py-1  bg-gray-200 text-gray-800 rounded hover:bg-gray-300 "
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
