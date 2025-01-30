import React, { useEffect, useState } from "react";
import CustomButton from "../../common/CustomButton";
import { addAssignedProgram, getAccountUsers, getAllAccountDetail, getAllOrganization, updateUser } from "../../../api/api";
import { CrossIcon, SidebarCloseIcon } from "lucide-react";
import useValidation from "../../common/UseValidation";
import { useSelector } from "react-redux";

export default function ProgramAssignToTeamForm(props) {
    const accessToken = useSelector((state) => state.token.accessToken);
    const [organisations, setOrganizations] = useState([])
    const [accounts, setAccounts] = useState([])
    const [users, setUsers] = useState([])
    const [accountId, setAccountId] = useState('')
    const [accountFilter, setAccountFilter] = useState('')
    const initialFormState = {
        assign_type: 'team',
        program_id: props?.program_id,
        account_id: '',
        company_id: '',
        start_date:''
    }
    const validators = {
        assign_to: [
            (value) =>
                state?.assign_type == 'user'
                    ? value == null || value.trim() === ''
                        ? "Assign_to is required"
                        : null
                    : null,
        ],
        assign_type: [
            (value) =>
                value === null || value.trim() === ""
                    ? "Assign_type  is required"
                    : null,
        ],
        account_id: [
            (value) =>
                value === null || value.trim() === ""
                    ? "account_id is required"
                    : null,
        ],
        company_id: [
            (value) =>
                value === null || value.trim() === ""
                    ? "company is required"
                    : null,
        ],
        start_date: [
            (value) =>
                value === null || value.trim() === ""
                    ? "Date is required"
                    : !/^\d{4}-\d{2}-\d{2}$/.test(value) // Regular expression for YYYY-MM-DD
                        ? "Date must be in YYYY-MM-DD format"
                        : null,
        ],
    }
    const { state, setState, onInputChange, errors, setErrors, validate } =
        useValidation(initialFormState, validators);

    const addAssignedProgramApiCall = async (e, state) => {
        e.preventDefault()    
        if (validate()) {
            const response = await addAssignedProgram(accessToken, state)
            close()
        }
    }


    // get company details  
    const getOrganization = async () => {
        const response = await getAllOrganization({ accessToken })
        setOrganizations(response.data)
    }
    // get account details
    const getAccount = async () => {
        const response = await getAllAccountDetail({ accessToken, filter: state?.company_id })
        setAccounts(response.data.data.results)
    }

    // get userAccount details
    const getUser = async () => {
        if (state?.account_id) {
            const response = await getAccountUsers(state?.account_id)
            setUsers(response.data.connected_users)
        }
    }

    // set all state in initial form or empty at form close 
    const close = () => {
        setState(initialFormState)
        setOrganizations([])
        setAccountFilter('')
        setAccounts([])
        props.setIsOpen(false)
    }

    //set assign_to in state depend on assign_type
    useEffect(() => {
        if (state.assign_type === 'team') {
            setState((prevState) => ({ ...prevState, assign_to: state.account_id }));
        }
        if (state.assign_type === 'user' || state.account_id === '') {
            setState((prevState) => ({ ...prevState, assign_to: '' }));
        }
    }, [state.account_id, state.assign_type]);

    // set filter in organization select 
    useEffect(() => {
        //if organization is not select then remove accounts
        if (state?.company_id == '') {
            setAccounts([])
            return
        }
        getAccount()
    }, [state?.company_id])

    // get user at account_id set 
    useEffect(() => {
        if (state?.account_id == '' || state?.assign_type == 'team') {
            setUsers([])
            return
        }
        if (state.assign_type === 'user') {
            getUser()
        }
    }, [state?.account_id, state?.assign_type])


    useEffect(() => {
        getOrganization()
    }, [props?.isOpen])
    return (<>
        {props?.isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                <div className="bg_secondary_color  max-h-full overflow-y-auto rounded-lg shadow-xl w-full max-w-2xl">
                    <div className="p-3 border-b btn_theme_color gap-2 flex flex-row justify-between items-center">
                        <h2 className="text-lg font-semibold">Assign program</h2>
                        <button className=" pr-2" onClick={() => close()}><b>X</b></button>
                    </div>
                    <form className="space-y-4 p-3 sm:space-y-6">
                        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                            <label className="flex items-center w-full sm:w-1/2">
                                <input type="radio" name='individual'
                                    className="form-checkbox text"
                                    onChange={() => {
                                        setState({ ...state, assign_type: 'team' });
                                    }}
                                    checked={state.assign_type === 'team'}
                                />
                                <span className="ml-2 text-gray-700">Assign to team</span>
                            </label>
                            <label className="flex items-center w-full sm:w-1/2">
                                <input type="radio" name='individual'
                                    className="form-checkbox text_theme_color"
                                    onChange={() => {
                                        setState({ ...state, assign_type: 'user' });
                                    }}
                                    checked={state.assign_type === 'user'}
                                />
                                <span className="ml-2 text-gray-700"> Assign to individual</span>
                            </label>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                            <div className="w-full sm:w-1/2">
                                <label htmlFor="company_id" className="block text-sm font-medium text-gray-700 mb-1">Select organisation</label>
                                <select
                                    id="company_id"
                                    name="company_id"
                                    value={state?.company_id}
                                    onChange={onInputChange}
                                    className={`input block w-full p-2 rounded-md ${errors.company_id ? " border-danger" : ""
                                        } `}
                                >
                                    <option value="">--select--</option>
                                    {organisations.map((organisation) => (
                                        <option key={organisation?.id} value={organisation?.id}>{organisation?.organization_name
                                        }</option>

                                    ))}
                                </select>
                                {errors.company_id && (
                                    <span className="text-danger font-size-3">
                                        {errors.company_id.join(", ")}
                                    </span>
                                )}
                            </div>
                            <div className="w-full sm:w-1/2">
                                <label htmlFor="account_id" className="block text-sm font-medium text-gray-700 mb-1">Select team</label>
                                <select
                                    id="account_id"
                                    name="account_id"
                                    onChange={onInputChange}
                                    className={`input block w-full p-2 rounded-md  ${errors.account_id ? " border-danger" : ""
                                        }`
                                    } >
                                    <option value=''>--select--</option>
                                    {accounts?.map((account) => (
                                        <option key={account.id} value={account.id}>{account.account_name}</option>
                                    ))}
                                </select>
                                {errors.account_id && (
                                    <span className="text-danger font-size-3">
                                        {errors.account_id.join(", ")}
                                    </span>
                                )}
                            </div>
                        </div>
                        {state.assign_type == 'user' && (

                            <div>
                                <label htmlFor="assign_to" className="block text-sm font-medium text-gray-700 mb-1">Select individual</label>
                                <select
                                    id="assign_to"
                                    name="assign_to"
                                    onChange={onInputChange}
                                    value={state?.assign_to}
                                    className={`input b w-full p-2 rounded-md  ${errors.assign_to ? " border-danger" : ""
                                        }`}
                                >
                                    <option value=''>--select--</option>
                                    {users.map((user) => (
                                        <option key={user.id} value={user.user.id}>{user.user.name}</option>
                                    ))}

                                </select>
                                {errors.assign_to && (
                                    <span className="text-danger font-size-3">
                                        {errors.assign_to.join(", ")}
                                    </span>
                                )}
                            </div>
                        )}

                        <div className="flex justify-center">
                            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
                                <label htmlFor="start_date" className="block text-sm font-medium text-gray-700 mb-1 text-start">Select start date</label>
                                <input
                                    type="date"
                                    id="start_date"
                                    name="start_date"
                                    onChange={onInputChange}
                                    className={`input  mt-1  w-full p-2 rounded-md ${errors.start_date ? " border-danger" : ""
                                        } `}
                                    placeholder="Centered input"
                                />
                                {errors.start_date && (
                                    <span className="text-danger font-size-3">
                                        {errors.start_date.join(", ")}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="text-center flex  gap-4 justify-center">
                            <CustomButton
                                type="button"
                                variant="none"
                                onClick={() => close()}
                                className="btn_cancle "
                            >
                                Cancel
                            </CustomButton>
                            <CustomButton
                                type="submit"
                                id={state?.id}
                                onClick={(e) => { addAssignedProgramApiCall(e, state) }}
                                className=""
                            >
                                {state?.id ? "Update" : "Add"}
                            </CustomButton>
                        </div>

                    </form>
                </div>
            </div>
        )}
    </>
    );
}

