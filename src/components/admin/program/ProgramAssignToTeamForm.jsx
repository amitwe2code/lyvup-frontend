import React, { useState } from "react";
import CustomButton from "../../common/CustomButton";
import { updateUser } from "../../../api/api";
import { CrossIcon, SidebarCloseIcon } from "lucide-react";
import useValidation from "../../common/UseValidation";

export default function ProgramAssignToTeamForm(props) {
    const [individual, setIndividual] = useState(false);
    const initialFormState = {}
    const validators = {
        activity_type: [
            (value) =>
                value === null || value.trim() === ""
                    ? "Activity type is required"
                    : null,
        ],
        activity: [
            (value) =>
                value === null || value.trim() === ""
                    ? "Activity is required"
                    : null,
        ],
        amount: [
            (value) =>
                value === null
                    ? "Amount is required"
                    : null,
        ],
        unit: [
            (value) =>
                value === null
                    ? "Unit is required"
                    : null,
        ],
        key_activity: [
            (value) =>
                value === null || value.trim() === ""
                    ? "Key activity is required"
                    : null,
        ],
    }
    const { state, setState, onInputChange, errors, setErrors, validate } =
        useValidation(initialFormState, validators);

    const close = () => {
        setState(initialFormState)
        setIsOpen(false)
    }


    return (<>
        {isOpen && (<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg_secondary_color max-h-full overflow-y-auto rounded-lg shadow-xl w-full max-w-2xl">
                <div className="p-4 sm:p-6 md:p-8 max-h-[80vh] overflow-y-auto">
                    <div className="p-3 border-b btn_theme_color gap-2 flex flex-row justify-between items-center">
                        <h2 className="text-lg font-semibold">Assign program</h2>
                        <button className=" pr-2" onClick={() => close()}><b>X</b></button>
                    </div>
                    <form className="space-y-4 sm:space-y-6">
                        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                            <label className="flex items-center w-full sm:w-1/2">
                                <input type="radio" name='individual' className="form-checkbox  text-[#039a77]" onChange={() => setIndividual(false)} checked={!individual} />
                                <span className="ml-2 text-gray-700">Assign to team</span>
                            </label>
                            <label className="flex items-center w-full sm:w-1/2">
                                <input type="radio" name='individual' className="form-checkbox text-[#039a77]" onChange={() => setIndividual(true)} checked={individual} />
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
                                    className={`input block w-full p-2 rounded-md ${errors.assign_company ? " border-danger" : ""
                                        } `}
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
                                    className={`input block w-full p-2 rounded-md  ${errors.assign_team ? " border-danger" : ""
                                        }`
                                    } >
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
                        {individual && (

                            <div>
                                <label htmlFor="assign_user" className="block text-sm font-medium text-gray-700 mb-1">Select individual</label>
                                <select
                                    id="assign_user"
                                    name="assign_user"
                                    onChange={onInputChange}
                                    className={`input b w-full p-2 rounded-md  ${errors.assign_user ? " border-danger" : ""
                                        }`}
                                >
                                    <option>Option A</option>
                                    <option>Option B</option>
                                </select>
                                {errors.assign_user && (
                                    <span className="text-danger font-size-3">
                                        {errors.assign_user.join(", ")}
                                    </span>
                                )}
                            </div>
                        )}

                        <div className="flex justify-center">
                            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
                                <label htmlFor="assign_start_date" className="block text-sm font-medium text-gray-700 mb-1 text-start">Select start date</label>
                                <input
                                    type="date"
                                    id="assign_start_date"
                                    name="assign_start_date"
                                    onChange={onInputChange}
                                    className={`input  mt-1  w-full p-2 rounded-md ${errors.assign_start_date ? " border-danger" : ""
                                        } `}
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
                                onClick={() => close()}
                                className="px-3 py-1 text-xs bg-none  rounded bg-slate-400 "
                            >
                                Cancel
                            </CustomButton>
                            <CustomButton
                                type="submit"
                                id={state?.id}
                                variant="outline"
                                onClick={handleFormSubmit}
                                className="px-3 py-1 text-xs  rounded "
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

