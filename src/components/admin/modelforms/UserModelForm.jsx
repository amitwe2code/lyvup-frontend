import React from 'react'
import UserRegistrationForm from '../UserRegistrationForm'

export default function UserModelForm(props) {
    return (
        <div>
            {props.isOpen && (
                <div className="fixed inset-0 bg-black  bg-opacity-50 flex items-center justify-center p-4">
                    <UserRegistrationForm
                        isOpen={props?.isOpen}
                        setIsOpen={props?.setIsOpen}
                        apicall={props.apiCall}
                        setApiCall={props.setApiCall}
                        updateUser={props?.updateUser}
                        setUpdateUser={props?.setUpdateUser}
                    />
                </div>
            )}
        </div>
    )
}
