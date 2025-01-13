import React, { useState } from "react";
import CustomButton from "../../common/CustomButton";
import { useSelector } from "react-redux";
import { addWeakActivity } from "../../../api/api";

export default function AddWeekForm(props) {
  const accessToken = useSelector((state) => state.token.accessToken);
  const [weekNo, setWeekNo] = useState(props?.week_no);
  const initialFormState = {
    program_id: props.program_id,
    week_no: props?.week_no,
  };

  const addWeek = async (e) => {
    e.preventDefault();
    const response = await addWeakActivity(accessToken, initialFormState);
    console.log("response in form =>", response);
    props.setApiCall(true);
    props.setIsOpen(false);
  };

  const [step, setStep] = useState(1);
  const close = () => {
    //    props?.setState(props?.initialFormState)
    props?.setIsOpen(false);
    //    props?.setStep(1)
  };
  return (
    <div>
      {props?.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg_secondary_color max-h-full overflow-y-auto rounded-lg  max-w-2xl shadow-xl w-full  ">
            <div className="flex flex-row justify-between items-center  p-3 btn_theme_color sm:mb-6  border-b-2 gap-2">
              <h2 className="text-2xl sm:text-3xl font-bold ">
                Assign program
              </h2>
              <button className=" pr-2" onClick={() => close()}>
                <b>X</b>
              </button>
            </div>
            <form>
              {step === 1 && (
                <div className="w-full flex flex-row justify-center gap-4 p-2 my-4 items-center">
                  <CustomButton type="submit" onClick={(e) => addWeek(e)}>
                    cp_add_new_week
                  </CustomButton>
                  <CustomButton onClick={() => setStep(2)}>
                    Add midweak
                  </CustomButton>
                </div>
              )}
              {step === 2 && (
                <div className="flex flex-col justify-center p-3 items-center">
                  <div className="w-full">
                    <label
                      htmlFor="week_no_for_week"
                      className="block  font-medium text-gray-700 mb-1"
                    >
                      Label
                    </label>
                    <select
                      name="week_no_for_week"
                      id="week_no_for_week"
                      value={props?.state?.week_no_for_week}
                      onChange={props?.onInputChange}
                      className={`w-full p-2 input text-sm  rounded  ${
                        props?.errors?.week_no_for_week ? " border-danger" : ""
                      }`}
                    >
                      <option value="">Select Label</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    {props?.errors?.week_no_for_week && (
                      <span className="text-danger font-size-3">
                        {props?.errors?.week_no_for_week.join(", ")}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-end space-x-2 mt-4">
                    <CustomButton
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-3 py-1  bg-gray-200 text-gray-800 rounded hover:bg-gray-300 "
                    >
                      Back
                    </CustomButton>
                    <CustomButton
                      type="submit"
                      id={props?.state?.id}
                      variant="outline"
                      onClick={props?.handleFormSubmit}
                      className="px-3 py-1 text-xs   rounded focus:outline-none focus:ring-2  focus:ring-opacity-50"
                    >
                      Add
                    </CustomButton>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
