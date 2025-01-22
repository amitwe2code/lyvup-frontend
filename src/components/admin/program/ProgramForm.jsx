import React, { useEffect, useState } from "react";
import CustomButton from "../../common/CustomButton";
import { addProgram, CopyProgram, getSingleProgram, updateProgram, updateUser } from "../../../api/api";
import useValidation from "../../common/UseValidation";
import { useSelector } from "react-redux";

export default function ProgramForm(props) {

  const [loading, setLoading] = useState(false)
  const accessToken = useSelector((state) => state.token.accessToken);
  const initialFormState = {
    
  }

  // const initialFormState = formData
  const validators = {
    name: [
      (value) =>
        value === null || value.trim() === ""
          ? "name is required"
          : value.length<3
          ? 'Name must be at least 3 letter'
          : null,
    ],
    description: [
      (value) =>
        value === null || value.trim() === ""
          ? "description is required"
          : value.length<3
          ? 'description must be at least 3 letter'
          : null,
    ],
    written_by: [
      (value) =>
        value === null || value.trim() === ""
          ? "written by is required"
          : value.length<3
          ? 'Written by must be at least 3 letter'
          : null,
    ],
    version: [
      (value) =>
        value === null || value.trim() === ""
          ? "version is required"
          : null,
    ],
    price: [
      (value) =>
        value === null || value.trim() === ''
          ? "price is required"
          : null,
    ],
  }
  const { state, setState, onInputChange, errors, setErrors, validate } =
    useValidation(initialFormState, validators);


  const getUpdateProgram = async () => {
    if(props?.copyProgram){
      setState({...props?.program,
        id:null,
        isCopyProgram:props?.program?.id
      })
    }
    else{
      setState({
          ...props?.program
        })
      }
  }
  
  console.log('state=>',state);
  const handleProgramAddAndUpdate = async (e, id) => {
    e.preventDefault()
    console.log(errors)
    if (validate()) {
      console.log("id in update and add ", id);
      try {
        setLoading(true);
        if(props?.copyProgram){
          const response = await CopyProgram(accessToken, state);
          console.log("response=", response);
        }
        else if (id) {
          const response = await updateProgram(accessToken, state, id);
          console.log("response=", response);
          props?.setProgram(state)
        
        } else {
          const response = await addProgram(accessToken, state);
          console.log("response=", response);
        }
        props?.setApiCall(true)
        close()
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };



  const close = () => {
    setState(initialFormState);
    props?.setIsOpen(false)
  }
  useEffect(() => {
    
    if (props?.program) {
      getUpdateProgram()
    }


  }, [props.isOpen])

  return (
    
          <div className="bg_secondary_color max-h-full overflow-auto rounded-lg shadow-xl w-full max-w-md">
            <div className="p-3 border-b btn_theme_color gap-2 flex flex-row justify-between items-center">
              <h2 className="text-lg font-semibold">Program Registration </h2>
              <button className="font-semibold " onClick={() => close()}>X</button>
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
                  <span className="text-danger capitalize text-sm pl-1">
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
                  <span className="text-danger capitalize text-sm pl-1">
                    {errors.description.join(",")}
                  </span>
                )}
              </div>
              {/* <div className="hidden">
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
                  <span className="text-danger capitalize text-sm pl-1">
                    {errors.brand.join(", ")}
                  </span>
                )}
              </div> */}
              {/* <div className="hidden">
                <label
                  htmlFor="language"
                  className="block  font-medium text-gray-700 mb-1"
                >
                  Language
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
                  <option value="en">english</option>
                  <option value="nl">dutch</option>
                  <option value="hn">hindi</option>
                </select>
                {errors.language && (
                  <span className="text-danger capitalize text-sm pl-1">
                    {errors.language.join(", ")}
                  </span>
                )}
              </div> */}
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
                  <span className="text-danger capitalize text-sm pl-1">
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
                  <span className="text-danger capitalize text-sm pl-1">
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
                  type="number"
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
                  <span className="text-danger capitalize text-sm pl-1">
                    {errors.price.join(", ")}
                  </span>
                )}
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <CustomButton
                  type="button"
                  onClick={() => close()}
                  variant="none"
                  className=" btn_cancle"
                >
                  Cancel
                </CustomButton>
                <CustomButton
                  type="submit"
                  id={state?.id}
                  onClick={(e) => handleProgramAddAndUpdate(e, state?.id)}
                  className=""
                >
                  {state?.id ? "Update" : "Add"}
                </CustomButton>
              </div>
            </form>
          </div>
       
  );
}
