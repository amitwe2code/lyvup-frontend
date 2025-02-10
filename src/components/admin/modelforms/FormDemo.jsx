import React, { useEffect, useState } from "react";
import CustomButton from "../../common/CustomButton";
import { addActivityType, updateActivityType } from "../../../api/api";
import useValidation from "../../common/UseValidation";
import { useSelector } from "react-redux";

export default function formDemo(props) {
    const accessToken = useSelector((state) => state.token.accessToken);
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


    const updatefunctionname = async (updatevalue) => {
        setState({
            ...updatevalue
        });
    };



    const handleActivityActionTypeAddAndUpdate = async (e, id) => {
        e.preventDefault();
        if (validate) {
            try {
                // setLoading(true);

                if (id) {
                    const response = await updateActivityType(accessToken, state, id);
                    console.log("response=", response);
                } else {
                    const response = await addActivityType(accessToken, state);
                    console.log("response=", response);
                }
                props.setApiCall(true);
                close()
            } catch (error) {
                console.log(error);
            } finally {
                // setLoading(false);
            }
        }
    };

    const close = () => {
        setState(initialFormState)
        props?.setIsOpen(false)
    }

    useEffect(() => {
        if (props.updatevalue) {
            updatefunctionname(props.updateValue)
        }
    }, [props?.isOpen])

    return (
        <div className="bg_secondary_color max-h-full overflow-auto rounded-lg shadow-xl w-full max-w-2xl">
            <div className="p-3 btn_theme_color border-b">
                <h2 className="text-lg font-semibold">form header</h2>
            </div>
            <form className="p-4 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label
                            htmlFor="activity_type"
                            className="block capitalize  font-medium text-gray-700 mb-1"
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
                            className={`w-full input text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500   ${errors.activity_type ? " border-danger" : ""
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
                            className="block capitalize  font-medium text-gray-700 mb-1"
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
                            className={`w-full input text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500   ${errors.activity ? " border-danger" : ""
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
                            className="block capitalize font-medium text-gray-700 mb-1"
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
                            className={`w-full input text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500   ${errors.amount ? " border-danger" : ""
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
                            className="block capitalize  font-medium text-gray-700 mb-1"
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
                            className={`w-full input text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500   ${errors.unit ? " border-danger" : ""
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
                            className="block capitalize  font-medium text-gray-700 mb-1"
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
                            className={`w-full input text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500   ${errors.key_activity ? " border-danger" : ""
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
                        onClick={() => close()}
                        variant="none"
                        className="btn_cancle"
                    >
                        Cancel
                    </CustomButton>
                    <CustomButton
                        type="submit"
                        id={state?.id}
                        onClick={(e) => handleActivityActionTypeAddAndUpdate(e, state?.id)}
                        className=""
                    >
                        {state?.id ? "Update" : "Add"}
                    </CustomButton>
                </div>
            </form>
        </div>

    );
}
