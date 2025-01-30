import React, { useEffect, useState, useRef } from "react";

import Select from "react-select";
import CustomButton from "../../common/CustomButton";
import { AddUserAccount, getAccountUsers, RemoveUserAccount } from "../../../api/api";
import { useSelector } from "react-redux";

export default function AccountSidebar(props) {
  const [search, setSearch] = useState("");
  const [apiCall, setApiCall] = useState(true);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [unSelectedUsers, setUnSelectedUsers] = useState([]);
  const [unSelectedUsersList, setUnSelectedUsersList] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const accessToken = useSelector((state) => state.token.accessToken);
  const selectRef = useRef(null);

  const getSelectedUsers = async (account) => {
    const response = await getAccountUsers(accessToken,account.id);
    console.log('response in account sidebar=>',response);
    setSelectedUsers(response.data.data.connected_users);
    setUnSelectedUsers(response.data.data.unconnected_users);
  };
  /*Function to redender the data in the option of the select box*/
  useEffect(() => {
    const options = (unSelectedUsers || []).map((option) => ({
      value: option.id,
      label: option.name,
    }));
    setUnSelectedUsersList(options);
  }, [unSelectedUsers]);
  // const getUnSelectedUsers = async () => {
  //     const response = await GetUnSelectedUsers(selectedAccount.id);
  //     setUnSelectedUsers(response);
  // }

  const handleAddUserToAccount = async (id) => {
    const response = await AddUserAccount(accessToken,props?.selectedAccount.id, selectedOptions);
    // console.log(response);
    setSelectedOptions([]);
    setApiCall(true);
  };

  const handleRemoveUserFromAccount = async (id) => {
    const response = await RemoveUserAccount(accessToken,id);
    // alert(response.data.message);
    setApiCall(true);
  };
  useEffect(() => {
    if(props?.selectedAccount){
      getSelectedUsers(props?.selectedAccount);
      setApiCall(false);
    }
  }, [props?.isOpen, apiCall]);

  const getSelectOptions = () => {
    return unSelectedUsers.map((user) => ({
      value: user.id,
      label: user.name,
    }));
  };

  const handleSelectChange = (selectedOption) => {
    console.log("select option ----------", selectedOption);
    if (selectedOption) {
      const values = selectedOption.map((option) => option.value);
      setSelectedOptions(values);
    } else {
      setSelectedOptions([]);
    }
  };
  const handleAddUsers = () => {
    if (selectedOptions.length > 0) {
      handleAddUserToAccount(selectedOptions);
      setSelectedOptions([]);
      selectRef.current.clearValue();
    }
  };

  return (
    <div
      className={`fixed inset-y-0 right-0 w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
        props?.isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg text-[#039a77] font-semibold">Manage Users</h2>
          <button
            onClick={props?.onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        <div className="mb-2">
          <h3 className="font-bold">
            Account: {props?.selectedAccount?.account_name}
          </h3>
        </div>

        {/* User Management Section */}
        <div className="space-y-4 my-6">
          {/* Search User */}

          <div className="border rounded-md p-2">
            <h4 className="font-semibold mb-2">Add New User</h4>

            <div className="flex gap-2 ">
              <Select
                ref={selectRef}
                options={unSelectedUsersList}
                name="unSlectedUser"
                id="unSlectedUser"
                onChange={handleSelectChange}
                className="text-capitalize w-100"
                isMulti
                isClearable
              />
              <CustomButton
                size="small"
                variant="outline"
                className="px-3"
                onClick={handleAddUsers}
              >
                add
              </CustomButton>
            </div>
          </div>
          {/* User List */}
          <div className="border rounded-md  p-2">
            <h4 className="font-semibold mb-2">Team Users</h4>
            <div className="max-h-44 overflow-y-auto">
              {selectedUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex justify-between items-center p-2 hover:bg-gray-50"
                >
                  <span>{user.user.name}</span>
                  <CustomButton
                    variant="outline"
                    id={user.id}
                    size="small"
                    onClick={() => handleRemoveUserFromAccount(user.id)}
                    className="border-danger text-red-500 hover:bg-red-500 hover:text-white"
                  >
                    Remove
                  </CustomButton>
                </div>
              ))}
            </div>
          </div>

          {/* Add User Section */}
        </div>
      </div>
    </div>
  );
}
