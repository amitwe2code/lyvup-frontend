import React from 'react'
import ActivityActionTypeForm from '../activityActionType/ActivityActionTypeForm'


export default function ActivityActionTypeModelForm(props) {
    return (
        <div>
            {props.isOpen && (
                <div className="fixed  inset-0 bg-black px-4 pt-16 pb-2  bg-opacity-50 flex items-center justify-center ">
                    <ActivityActionTypeForm
                        isOpen={props?.isOpen}
                        setIsOpen={props?.setIsOpen}
                        setApiCall={props?.setApiCall}
                        updateActivityActionType={props?.updateActivityActionType}
                    />
                </div>
            )}
        </div>
    )
}
