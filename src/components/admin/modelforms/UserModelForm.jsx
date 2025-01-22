import React from 'react'
import UserRegistrationForm from '../users/UserRegistrationForm'

export default function UserModelForm(props) {
    return (
        <div>
            {props.isOpen && (
                <div className="fixed  inset-0 bg-black px-4 pt-16 pb-2  bg-opacity-50 flex items-center justify-center ">
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
// call component
{/* <UserModelForm
isOpen={props?.isOpen}
setIsOpen={props?.setIsOpen}
apicall={props.apiCall}
setApiCall={props.setApiCall}
updateUser={props?.updateUser}
setUpdateUser={props?.setUpdateUser}
/> */}