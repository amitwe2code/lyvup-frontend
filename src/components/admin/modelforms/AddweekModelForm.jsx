import React from 'react'
import AddWeekForm from '../program/AddWeekForm'

export default function AddweekModelForm(props) {
    return (
        <div>
            {props.isOpen && (
                <div className="fixed  inset-0 bg-black px-4 pt-16 pb-2  bg-opacity-50 flex items-center justify-center ">
                    <AddWeekForm
                        isOpen={props?.isOpen}
                        setIsOpen={props?.setIsOpen}
                        setApiCall={props?.setApiCall}
                        program_id={props.program_id}
                        week_no={props?.week_no}
                    />
                </div>
            )}
        </div>
    )
}
