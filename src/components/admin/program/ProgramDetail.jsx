import { Copy, CopyIcon, Edit2Icon, LetterTextIcon, PenBoxIcon, PencilIcon, PlusIcon, TrashIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import ProgramForm from './ProgramForm'
import { deleteProgram, getWeek } from '../../../api/api'
import { useSelector } from 'react-redux'
import AddWeekForm from './AddWeekForm'
import WeekTable from './WeekTable'
import ProgramModelForm from '../modelforms/ProgramModelForm'

export default function ProgramDetail(props) {
  const [isOpen, setIsOpen] = useState(false)
  const accessToken = useSelector((state) => state.token.accessToken)
  const [copyProgram,setCopyProgram]=useState(false)
 
  const programDelete = async (id) => {
    const response = await deleteProgram(accessToken, id)
    props?.setProgram('')
    props?.setApiCall(true) 
  }
  const handleCopyCall=()=>{
      setCopyProgram(true)
      setIsOpen(true)
  }

  return (
    <>
      <div className='' >
        <div className='header w-full mb-3 flex flex-row justify-between '>
          <h3 className='text-2xl capitalize font-bold '>{props?.program?.name} </h3>
          <div className='flex flex-row gap-4'>
            <button id={props?.program?.id} onClick={(e) => setIsOpen(true)}  ><PenBoxIcon className='icon_size_small' /></button>
            <button id={props?.program?.id} onClick={()=>handleCopyCall()} ><CopyIcon className='icon_size_small' /></button>
            <button onClick={() => programDelete(props?.program?.id)} ><TrashIcon className='icon_size_small' /></button>
          </div>
        </div>
        <div className="add_program ">
          <div className="program_card program_summary ">
            <h6 className="">Summary:</h6>
            <p className='text-base'>{props?.program?.description}</p>
          </div>
          <div className="add_program_info ">
            <span className="program_info_card"><b>Written_by:</b> {props?.program?.written_by}</span>
            <span className="program_info_card"><b> price:</b>{props?.program?.price}</span>
            <span className="program_info_card"><b>version</b>{props?.program?.version} </span>
            {/* <span className="program_info_card"><b>Language:</b>{props?.program?.language}</span>
            <span className="program_info_card"><b>label : </b>{props?.program?.label}</span> */}
          </div>
          <div className='my-3'>
            {props?.program?.id && (
              <WeekTable program_id={props?.program?.id} />
            )}
          </div>
          
          <ProgramModelForm
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            program={props?.program}
            setProgram={props?.setProgram}
            setApiCall={props?.setApiCall}
            copyProgram={copyProgram}
          />
         


        </div>
      </div>
    </>
  )
}
