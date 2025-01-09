import React from 'react'
import UserRegistrationForm from '../users/UserRegistrationForm'
import AccountForm from '../account/AccountForm'

export default function AccountModelForm(props) {
    return (
        <div>
            {props.isOpen && (
                <div className="fixed inset-0 bg-black  bg-opacity-50 flex items-center justify-center p-4">
                    <AccountForm
                        isOpen={props?.isOpen}
                        setIsOpen={props?.setIsOpen}
                        apicall={props.apiCall}
                        setApiCall={props.setApiCall}
                        updateAccount={props?.updateAccount}
                        setUpdateAccount={props?.setUpdateAccount}
                    />
                </div>
            )}
        </div>
    )
}
