import React, { useState } from "react";
import CustomButton from "../../common/CustomButton";
import { useSelector } from "react-redux";
import { addWeakActivity } from "../../../api/api";
import useValidation from "../../common/UseValidation";

export default function AddWeekForm(props) {
  const accessToken = useSelector((state) => state.token.accessToken);
  const [weekNo, setWeekNo] = useState(props?.week_no);
  const [step, setStep] = useState(1);
  const initialFormState = {
    program_id: props.program_id,
    week_no: props?.week_no,
  };
  const validators = {
    week_no: [
      (value) =>
        step === 2
          ? value === "" || value === null
            ? "Week no is required"
            : null
          : null,
    ],
  }
  const { state, setState, onInputChange, errors, setErrors, validate } =
    useValidation(initialFormState, validators);


  const addWeek = async (e) => {
    e.preventDefault();
    console.log('errors=>', errors);
    console.log('state=>', state);
    console.log('validate=>', validate());
    if (validate()) {
       const response = await addWeakActivity(accessToken, state);
      console.log("response in form =>", response);
      props.setApiCall(true);
     close()
    }
  };

  const close = () => {
    props?.setIsOpen(false);
    setStep(1)
  };
  return (
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

              {/*/////////////////////////////////////// step 1 form ///////////////////////// */}
              {step === 1 && (
                <div className="w-full flex flex-row justify-center gap-4 p-2 my-4 items-center">
                  <CustomButton type="submit" onClick={(e) => addWeek(e)}>
                    cp_add_new_week
                  </CustomButton>
                  <CustomButton onClick={() => {
                    setStep(2)
                    setState({ ...state, week_no: "" })
                  }}>
                    Add midweak
                  </CustomButton>
                </div>
              )}

              {/* ////////////////////////////////step 2 form ///////////////////////////////*/}
              {step === 2 && (
                <div className="flex flex-col justify-center p-3 items-center">
                  <div className="w-full">
                    <label
                      htmlFor="week_no"
                      className="block  font-medium text-gray-700 mb-1"
                    >
                      Label
                    </label>
                    <select
                      name="week_no"
                      id="week_no"
                      value={state?.week_no}
                      onChange={onInputChange}
                      className={`w-full p-2 input text-sm  rounded  ${errors.week_no ? " border-danger" : ""
                        }`}
                    >
                      <option value="">Select Label</option>
                      {
                        // Loop through and render options using a for loop
                        [...Array(props?.week_no - 1)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))
                      }


                    </select>
                    {errors?.week_no && (
                      <span className="text-danger font-size-3">
                        {errors?.week_no.join(", ")}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-end space-x-2 mt-4">
                    <CustomButton
                      type="button"
                      variant="none"
                      onClick={() => {
                        setStep(1)
                        setState({ ...state, week_no: props?.week_no })
                      }}
                      className="btn_cancle"
                    >
                      Back
                    </CustomButton>
                    <CustomButton
                      type="submit"
                      id={props?.state?.id}
                      onClick={(e) => addWeek(e)}
                      className=""
                    >
                      Add
                    </CustomButton>
                  </div>
                </div>
              )}
            </form>
          </div>
  );
}
