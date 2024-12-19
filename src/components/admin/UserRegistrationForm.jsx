import React, { useState } from "react";
import CustomButton from "../common/CustomButton";
import { updateUser } from "../../api/api";

export default function UserRegistrationForm({
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
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold">User Registration</h2>
            </div>
            <form className="p-4 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-medium text-gray-700 mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="language"
                    className="block text-xs font-medium text-gray-700 mb-1"
                  >
                    Language
                  </label>
                  <select
                    id="language"
                    name="language_preference"
                    value={formData.language_preference}
                    onChange={handleInputChange}
                    required
                    className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
                  >
                    <option value="">Select</option>
                    <option value="english">English</option>
                    <option value="dutch">Dutch</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="userType"
                    className="block text-xs font-medium text-gray-700 mb-1"
                  >
                    User Type
                  </label>
                  <select
                    id="user_type"
                    name="user_type"
                    value={formData.user_type}
                    onChange={handleInputChange}
                    required
                    className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
                  >
                    <option value="">Select</option>
                    <option value="admin">Admin</option>
                    <option value="patient">Patient</option>
                  </select>
                </div>
                {!formData.id ? (
                  <>
                    <div>
                      <label
                        htmlFor="password"
                        className="block text-xs font-medium text-gray-700 mb-1"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </>
                ) : null}
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <CustomButton
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-1 text-xs bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                >
                  Cancel
                </CustomButton>
                <CustomButton
                  type="submit"
                  onClick={handleFormSubmit}
                  id={formData?.id}
                  variant="outline"
                  className="px-3 py-1 text-xs   rounded focus:outline-none focus:ring-2  focus:ring-opacity-50"
                >
                  Register
                </CustomButton>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
