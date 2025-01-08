import React, { useState } from "react";
import CustomButton from "../common/CustomButton";
import { updateUser } from "../../api/api";

export default function AccountForm({
  isOpen,
  setIsOpen,
  formData,
  setFormData,
  handleFormSubmit,
}) {
  // handle formData fieldset function
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white max-h-full   overflow-y-auto rounded-lg  shadow-xl w-full max-w-2xl">
            <div className="p-3 btn_theme_color border-b">
              <h2 className="text-lg font-semibold">Account Registration</h2>
            </div>
            <form className="p-4 space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="account_name"
                    className="block  font-medium text-gray-700 mb-1"
                  >
                    account_name
                  </label>
                  <input
                    type="text"
                    id="account_name"
                    name="account_name"
                    value={formData.account_name}
                    placeholder="Enter account_name"
                    onChange={handleInputChange}
                    required
                    className="w-full input  text-sm  "
                  />
                </div>
                <div>
                  <label
                    htmlFor="account_type"
                    className="block  font-medium text-gray-700 mb-1"
                  >
                    account_type
                  </label>
                  <input
                    type="email"
                    id="account_type"
                    name="account_type"
                    value={formData.account_type}
                    placeholder="Enter account_type"
                    onChange={handleInputChange}
                    required
                    className="w-full input  text-sm  "
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="team_leader_id"
                    className="block  font-medium text-gray-700 mb-1"
                  >
                    team_leader_id
                  </label>
                  <input
                    type="number"
                    id="team_leader_id"
                    name="team_leader_id"
                    placeholder="Enter team_leader_id"
                    value={formData.team_leader_id}
                    onChange={handleInputChange}
                    required
                    className="w-full input  text-sm  "
                  />
                </div>
                <div>
                  <label
                    htmlFor="language"
                    className="block  font-medium text-gray-700 mb-1"
                  >
                    language
                  </label>
                  <select
                    id="language"
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                    required
                    className="w-full input  text-sm  "
                  >
                    <option value="">-Select Laguage-</option>
                    <option value="English">English</option>
                    <option value="Dutch">Dutch</option>
                  </select>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="organization_id"
                    className="block  font-medium text-gray-700 mb-1"
                  >
                    organization_id
                  </label>
                  <select
                    id="organization_id"
                    name="organization_id"
                    value={formData.organization_id}
                    onChange={handleInputChange}
                    required
                    className="w-full input  text-sm  "
                  >
                    <option value="">-Select organization_id-</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                  </select>
                </div>

              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <CustomButton
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-1  bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                >
                  Cancel
                </CustomButton>
                <CustomButton
                  type="submit"
                  onClick={handleFormSubmit}
                  id={formData?.id}
                  variant="outline"
                  className="px-3 py-1    rounded focus:outline-none focus:ring-2  focus:ring-opacity-50"
                >
                  {formData?.id ? 'Update' : 'Add'}
                </CustomButton>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}