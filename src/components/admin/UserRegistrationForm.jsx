import React, { useEffect, useState } from "react";
import CustomButton from "../common/CustomButton";
import { addUser, updateUser } from "../../api/api";
import useValidation from '../common/UseValidation'
import { useSelector } from "react-redux";
export default function UserRegistrationForm(props) {
  const accessToken = useSelector((state) => state.token.accessToken);
  const initialFormState = {
    name: "",
    email: "",
    password: "",
    phone: "",
    user_type: "",
    language_preference: "",
  };
  const validators = {
    email: [
      (value) =>
        value === null || value.trim() === ""
          ? "email is required"
          : !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)
            ? "Please enter a valid email address"
            : null,
    ],
    name: [
      (value) =>
        value === null || value.trim() === ""
          ? "Name is required" : null,
    ],
    phone: [
      (value) =>
        value === null || value.trim() === ""
          ? "Phone Number is required"
          : !/^\d{10}$/.test(value) ?
            "Phone number is 10 digit number"
            : null,
    ],
    user_type: [
      (value) =>
        value === null || value.trim() === ""
          ? "User_type  is required" : null,
    ],
    language_preference: [
      (value) =>
        value === null || value.trim() === ""
          ? "language  is required" : null,
    ],

    password: [
      (value) =>
        value === null || value.trim() === ""
          ? "password is required"
          : /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)
            ? "at least one speacial character one number and one upper and lower case letter"
            : null,
    ],

  };
  const { state, setState, onInputChange, errors, setErrors, validate } = useValidation(initialFormState, validators);

  //user Update apiFunction Call
  const handleUserUpdate = async (user) => {
    setState({
      ...user
    });
    setIsOpen(true);
  };

  //newUser add apifunction Call
  const handleUserAdd = async (id) => {
    try {
      e.preventDefault();
      if (validate()) {
        if (id) {
          const response = await addUser(accessToken, state);
        } else {
          const response = await updateUser(accessToken, state, id);
        }
        props.setApiCall(true);
        setState({ ...initialFormState })
        props.setIsOpen(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  useEffect(()=>{
    if(props.updateUser){
      handleUserUpdate(props.updateUser)
    }

  },[props?.isOpen])


  return (

    <div className="bg-white max-h-full overflow-auto rounded-lg  shadow-xl w-full max-w-2xl">
      <div className="p-3 btn_theme_color   border-b">
        <h2 className="text-lg  font-semibold">User Registration</h2>
      </div>
      <form className="p-4 space-y-3 bg_secondary_color">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={state.name}
              onChange={onInputChange}
              placeholder="enter name"
              required
              className="w-full input  text-sm  "
            />
            {errors.name && (
              <span
                key={errors.name}
                className="text-danger font-size-3"
              >
                {errors.name}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              value={state.email}
              onChange={onInputChange}
              required
              className="w-full input  text-sm  "
            />
            {errors.email && (
              <span
                key={errors.email}
                className="text-danger font-size-3"
              >
                {errors.email}
              </span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter phone No."
              value={state.phone}
              onChange={onInputChange}
              required
              className="w-full input  text-sm  "
            />
            {errors.phone && (
              <span
                key={errors.phone}
                className="text-danger font-size-3"
              >
                {errors.phone}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="language"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Language
            </label>
            <select
              id="language"
              name="language_preference"
              value={state.language_preference}
              onChange={onInputChange}
              required
              className="w-full input  text-sm  "
            >
              <option value="">Select</option>
              <option value="English">English</option>
              <option value="Dutch">Dutch</option>
            </select>
            {errors.language_preference && (
              <span
                key={errors.language_preference}
                className="text-danger font-size-3"
              >
                {errors.language_preference}
              </span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="userType"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              User Type
            </label>
            <select
              id="user_type"
              name="user_type"
              value={state.user_type}
              onChange={onInputChange}
              required
              className="w-full input  text-sm  "
            >
              <option value="">Select</option>
              <option value="admin">Admin</option>
              <option value="patient">Patient</option>
            </select>
            {errors.user_type && (
              <span
                key={errors.user_type}
                className="text-danger font-size-3"
              >
                {errors.user_type}
              </span>
            )}
          </div>
          {!state?.id ? (
            <>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  value={state.password}
                  onChange={onInputChange}
                  required
                  className="w-full input  text-sm  "
                />
                {errors.password && (
                  <span
                    key={errors.password}
                    className="text-danger font-size-3"
                  >
                    {errors.password}
                  </span>
                )}
              </div>
            </>
          ) : null}
        </div>
        <div className="flex justify-end space-x-2 mt-4">
          <CustomButton
            type="button"
            onClick={() => props.setIsOpen(false)}
            className="px-3 py-1 text-xs bg-gray-300  rounded hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 text-black"
          >
            Cancel
          </CustomButton>
          <CustomButton
            type="submit"
            onClick={handleUserAdd}
            id={state?.id}
            variant="outline"
            className=" text-xs   rounded "
          >
            {state?.id ? 'Update' : 'Add'}
          </CustomButton>
        </div>
      </form>
    </div>

  );
}