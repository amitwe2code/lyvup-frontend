import React, { useState } from "react";
import CustomButton from "../common/CustomButton";
import { updateUser } from "../../api/api";

export default function ProgramAssignToTeam({
    initialFormState,
    isOpen,
    setIsOpen,
    state,
    setState,
    onInputChange,
    errors,
    handleFormSubmit,
}) {


    return (<>


        {isOpen && (<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white max-h-full overflow-y-auto rounded-lg shadow-xl w-full max-w-2xl">
                <div className="p-4 sm:p-6 md:p-8 max-h-[80vh] overflow-y-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 pb-2 border-b-2 border-[#039a77] text-[#039a77] sticky top-0 bg-white">Labeled Responsive Form</h2>

                    <form className="space-y-4 sm:space-y-6">
                        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                            <label className="flex items-center w-full sm:w-1/2">
                                <input type="checkbox" className="form-checkbox  text-[#039a77]" />
                                <span className="ml-2 text-gray-700">Assign to team</span>
                            </label>
                            <label className="flex items-center w-full sm:w-1/2">
                                <input type="checkbox" className="form-checkbox  text-[#039a77]" />
                                <span className="ml-2 text-gray-700"> Assign to individual</span>
                            </label>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                            <div className="w-full sm:w-1/2">
                                <label htmlFor="assign_company" className="block text-sm font-medium text-gray-700 mb-1">Select organisation</label>
                                <select
                                    id="assign_company"
                                    name="assign_company"
                                    onChange={onInputChange}
                                    className="form-select block w-full p-2 rounded-md border-gray-300 border focus:border-[#039a77] focus:ring focus:ring-[#039a77] focus:ring-opacity-50"
                                >
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                </select>
                                {errors.assign_company && (
                                    <span className="text-danger font-size-3">
                                        {errors.assign_company.join(", ")}
                                    </span>
                                )}
                            </div>
                            <div className="w-full sm:w-1/2">
                                <label htmlFor="assign_team" className="block text-sm font-medium text-gray-700 mb-1">Select team</label>
                                <select
                                    id="assign_team"
                                    name="assign_team"
                                    onChange={onInputChange}
                                    className="form-select block w-full p-2 rounded-md border-gray-300 border focus:border-[#039a77] focus:ring focus:ring-[#039a77] focus:ring-opacity-50"
                                >
                                    <option>Option A</option>
                                    <option>Option B</option>
                                </select>
                                {errors.assign_team && (
                                    <span className="text-danger font-size-3">
                                        {errors.assign_team.join(", ")}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="assign_user" className="block text-sm font-medium text-gray-700 mb-1">Select individual</label>
                            <input
                                type="text"
                                id="assign_user"
                                name="assign_user"
                                onChange={onInputChange}
                                className="form-input mt-1 block w-1/2 p-2 rounded-md border-gray-300 border focus:border-[#039a77] focus:ring focus:ring-[#039a77] focus:ring-opacity-50"
                                placeholder="Enter text here"
                            />
                            {errors.assign_user && (
                                <span className="text-danger font-size-3">
                                    {errors.assign_user.join(", ")}
                                </span>
                            )}
                        </div>

                        <div className="flex justify-center">
                            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
                                <label htmlFor="assign_start_date" className="block text-sm font-medium text-gray-700 mb-1 text-start">Select start date</label>
                                <input
                                    type="text"
                                    id="assign_start_date"
                                    name="assign_start_date"
                                    onChange={onInputChange}
                                    className="form-control hasDatepicker mt-1 block w-full p-2 rounded-md border-gray-300 border focus:border-[#039a77] focus:ring focus:ring-[#039a77] focus:ring-opacity-50"
                                    placeholder="Centered input"
                                />
                                {errors.assign_start_date && (
                                    <span className="text-danger font-size-3">
                                        {errors.assign_start_date.join(", ")}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="text-center flex  gap-4 justify-center">


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
        </div>)}
    </>
    );
}

