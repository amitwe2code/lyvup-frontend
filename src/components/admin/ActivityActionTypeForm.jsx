import React, { useState } from "react";
import CustomButton from "../common/CustomButton";
import { updateUser } from "../../api/api";

export default function ActivityActionTypeForm({
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
                                        value={formData.activity_type}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
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
                                        value={formData.activity}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
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
                                        type="text"
                                        id="amount"
                                        name="amount"
                                        value={formData.amount}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="unit"
                                        className="block text-xs font-medium text-gray-700 mb-1"
                                    >
                                        unit
                                    </label>
                                    <input
                                        type="text"
                                        id="unit"
                                        name="unit"
                                        value={formData.unit}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
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
                                        value={formData.key_activity}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>

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