import React from 'react'
import ProgramActivityForm from '../program/ProgramActivityForm'

export default function ProgramActivityModelForm(props) {
 return (
    <div>
            {props?.isOpen && (
                <div className="fixed  inset-0 bg-black px-4 pt-16 pb-2  bg-opacity-50 flex items-center justify-center ">
                    <ProgramActivityForm
                        isOpen={props?.isOpen}
                        setIsOpen={props?.setIsOpen}
                        setApiCall={props?.setApiCall}
                        program_id={props?.program_id}
                        week_no={props?.week_no}
                        updateProgramActivity={props?.updateProgramActivity}
                        setUpdateProgramActivity={props?.setUpdateProgramActivity}
                        setWeekNo={props?.setWeekNo} />
                </div>
            )}
        </div>
  )
}
