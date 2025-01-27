import React, { useEffect, useState } from "react";
import CustomButton from "../../common/CustomButton";
import { addAccount, updateAccount } from "../../../api/api";
import { useSelector } from "react-redux";
import useValidation from "../../common/UseValidation";

export default function AccountForm(props) {
  const accessToken = useSelector((state) => state.token.accessToken);
  const initialFormState = {
    organization_id: "",
    account_name: "",
    account_type: "",
    team_leader_id: "",
    language: "",
  };
  const validators = {

    account_name: [
      (value) =>
        value === null || value.trim() === ""
          ? "Account Name is required"
          :value.length<3
          ?'account name must at least 3 character ' 
          : null,
    ],
    account_type: [
      (value) =>
        value === null || value.trim() === ""
          ? "Account Type is required"
          :value.length<3
          ?'account Type must at least 3 character ' 
          : null,
    ],
    organization_id: [
      (value) =>
        value === null 
          ? "Organization Id  is required" : null,
    ],
    language: [
      (value) =>
        value === null || value.trim() === ""
          ? "language  is required" : null,
    ],

    team_leader_id: [
      (value) =>
        value === null 
          ? "Team_leader_id is required"
          : null,
    ],

  };
  const { state, setState, onInputChange, errors, setErrors, validate } = useValidation(initialFormState, validators);

  const handleAccountUpdate = async (account) => {
    setState({
      ...account
    });
  };

  const handleAccountAddAndUpdate = async (e, id) => {
    try {
      e.preventDefault();
      if(validate()){
      // setLoading(true);
      if (id) {
        const response = await updateAccount(accessToken, state, id);
        console.log("response=", response);
      } else {
        console.log('add call');
        const response = await addAccount(accessToken, state);
        console.log("response=", response);
      }
      props.setApiCall(true);
    }
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
    }
  
  };

  const close=()=>{
    setState(initialFormState)
    props?.setIsOpen(false)
  }


  useEffect(() => {
    if (props?.updateAccount) {
      handleAccountUpdate(props?.updateAccount)
    }
  }, [props?.isOpen])


  return (
    <div className="bg-white max-h-full   overflow-y-auto rounded-lg  shadow-xl w-full max-w-2xl">
      <div className="p-3 btn_theme_color border-b">
        <h2 className="text-lg font-semibold">Account Registration</h2>
      </div>
      <form className="p-4 space-y-3 bg_secondary_color">
        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="account_name"
              className="form_label"
            >
              account_name
            </label>
            <input
              type="text"
              id="account_name"
              name="account_name"
              value={state.account_name}
              placeholder="Enter account_name"
              onChange={onInputChange}
              required
              className={`w-full input text-sm ${errors.account_name ? 'border-danger' : ''}`}
            />
            {errors.account_name && (
              <span
                key={errors.account_name}
                className="text-danger capitalize text-sm pl-1"
              >
                {errors.account_name}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="account_type"
              className="form_label"
            >
              account_type
            </label>
            <input
              type="text"
              id="account_type"
              name="account_type"
              value={state.account_type}
              placeholder="Enter account_type"
              onChange={onInputChange}
              required
              className={`w-full input text-sm ${errors.account_type ? 'border-danger' : ''}`}
            />
            {errors.account_type && (
              <span
                key={errors.account_type}
                className="text-danger capitalize text-sm pl-1"
              >
                {errors.account_type}
              </span>
            )}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="team_leader_id"
              className="form_label"
            >
              team_leader_id
            </label>
            <input
              type="number"
              id="team_leader_id"
              name="team_leader_id"
              placeholder="Enter team_leader_id"
              value={state.team_leader_id}
              onChange={onInputChange}
              required
              className={`w-full input text-sm ${errors.team_leader_id ? 'border-danger' : ''}`}
            />
            {errors.team_leader_id && (
              <span
                key={errors.team_leader_id}
                className="text-danger capitalize text-sm pl-1"
              >
                {errors.team_leader_id}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="language"
              className="form_label"
            >
              language
            </label>
            <select
              id="language"
              name="language"
              value={state.language}
              onChange={onInputChange}
              className={`w-full input text-sm ${errors.language ? 'border-danger' : ''}`}
            >
              <option value="">-Select Laguage-</option>
              <option value="en">English</option>
              <option value="nl">Dutch</option>
            </select>
            {errors.language && (
              <span
                key={errors.language}
                className="text-danger capitalize text-sm pl-1"
              >
                {errors.language}
              </span>
            )}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="organization_id"
              className="form_label"
            >
              organization_id
            </label>
            <select
              id="organization_id"
              name="organization_id"
              value={state.organization_id}
              onChange={onInputChange}
              required
              className={`w-full input text-sm ${errors.organization_id ? 'border-danger' : ''}`}
            >
              <option value="">-Select organization_id-</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
            </select>
            {errors.organization_id && (
              <span
                key={errors.organization_id}
                className="text-danger capitalize text-sm pl-1"
              >
                {errors.organization_id}
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
            onClick={(e)=>handleAccountAddAndUpdate(e,state?.id)}
            className=""
          >
            {state?.id ? 'Update' : 'Add'}
          </CustomButton>
        </div>
      </form>
    </div>

  );
}