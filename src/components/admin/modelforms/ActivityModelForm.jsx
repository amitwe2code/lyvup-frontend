import React from 'react'
import ActivityForm from '../activity/ActivityForm'

export default function ActivityModelForm(props) {
    return (
        <div>
            {props.isOpen && (
                <div className="fixed  inset-0 bg-black px-4 pt-16 pb-2  bg-opacity-50 flex items-center justify-center ">
                    <ActivityForm
                        isOpen={props?.isOpen}
                        setIsOpen={props?.setIsOpen}
                        setApiCall={props?.setApiCall}
                        updateActivity={props?.updateActivity}
                        setUpdateActivity={props?.setUpdateActivity}
                    />
                </div>
            )}
        </div>
    )
}
