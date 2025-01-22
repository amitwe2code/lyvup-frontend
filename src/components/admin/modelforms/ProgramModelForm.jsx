import React from 'react'
import ProgramForm from '../program/ProgramForm'

export default function ProgramModelForm(props) {
  return (
    <div>
            {props.isOpen && (
                <div className="fixed  inset-0 bg-black px-4 pt-16 pb-2  bg-opacity-50 flex items-center justify-center ">
                    <ProgramForm
                        isOpen={props?.isOpen}
                        setIsOpen={props?.setIsOpen}
                        program={props?.program}
                        setProgram={props?.setProgram}
                        setApiCall={props?.setApiCall}
                        copyProgram={props?.copyProgram}
                    />
                </div>
            )}
        </div>
  )
}


// return (
//     <div>
//             {props.isOpen && (
//                 <div className="fixed  inset-0 bg-black px-4 pt-16 pb-2  bg-opacity-50 flex items-center justify-center ">
                    
//                 </div>
//             )}
//         </div>
//   )
