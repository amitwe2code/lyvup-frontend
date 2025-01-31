import { Copy, CopyIcon, Edit2Icon, LetterTextIcon, PenBoxIcon, PencilIcon, PlusIcon, TrashIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import ProgramForm from './ProgramForm'
import { deleteProgram, getWeek } from '../../../api/api'
import { useSelector } from 'react-redux'
import AddWeekForm from './AddWeekForm'
import WeekTable from './WeekTable'
import ProgramModelForm from '../modelforms/ProgramModelForm'
import ProgramAssignToTeamForm from './ProgramAssignToTeamForm'
import DeleteDialog from '../../common/DeleteDialog'
import Toast from '../../common/Toast'

export default function ProgramDetail(props) {
  const [isOpen, setIsOpen] = useState(false)
  const [assignFormOpen, setAssignFormOpen] = useState(false)
  const accessToken = useSelector((state) => state.token.accessToken)
  const [copyProgram, setCopyProgram] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [deleteData, setDeleteData] = useState("")


  const programDelete = async () => {
    console.log('delete data id =>', deleteData?.id);
    const response = await deleteProgram(accessToken, deleteData?.id)
    console.log('delete program=>', response);
    Toast(response)
    setDeleteOpen(false)
    props?.setProgram('')
    setDeleteData('')
    props?.setApiCall(true)
  }
  const handleOpenDeleteDialog = (e, data) => {
    e.preventDefault()
    setDeleteData(data)
    setDeleteOpen(true)
  }

  const handleAssignForm = () => {
    setAssignFormOpen(true)
  }
  const handleCopyCall = () => {
    setCopyProgram(true)
    setIsOpen(true)
  }

  return (
    <>
      <div className='' >
        <div className='header w-full mb-3 flex flex-wrap gap-3 justify-between '>
          <h3 className='text-2xl capitalize text_theme_color font-bold '>{props?.program?.name} </h3>
          <div className='flex flex-row gap-4'>
            <button id={props?.program?.id} onClick={(e) => handleAssignForm()}  ><PlusIcon className='icon_size_small' /></button>
            <button id={props?.program?.id} onClick={(e) => setIsOpen(true)}  ><PenBoxIcon className='icon_size_small' /></button>
            <button id={props?.program?.id} onClick={() => handleCopyCall()} ><CopyIcon className='icon_size_small' /></button>
            <button onClick={(e) => handleOpenDeleteDialog(e, props?.program)} ><TrashIcon className='icon_size_small' /></button>
          </div>
        </div>
        <div className="add_program ">
          <div className="w-full bg_secondary_color py-3 rounded-md ">
            <span className=" text-gray-700 font-semibold capitalize p-2 rounded-md"><b className='text-gray-500'>Summary : </b> {props?.program?.description}</span>
          </div>
          <div className="add_program_info ">
            <span className="bg_secondary_color text-gray-700 font-semibold capitalize p-2 rounded-md"><b className='text-gray-500'>Written_by: </b> {props?.program?.written_by}</span>
            <span className="bg_secondary_color text-gray-700 font-semibold capitalize p-2 rounded-md"><b className='text-gray-500'> price: </b>{props?.program?.price}</span>
            <span className="bg_secondary_color text-gray-700 font-semibold capitalize p-2 rounded-md"><b className='text-gray-500'>version: </b>{props?.program?.version} </span>
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
          {assignFormOpen ? (<>
            <ProgramAssignToTeamForm
              isOpen={assignFormOpen}
              setIsOpen={setAssignFormOpen}
              program_id={props?.program?.id}
            />
          </>) : null}
          <DeleteDialog
            name={deleteData.name}
            isOpen={deleteOpen}
            setIsOpen={setDeleteOpen}
            handleDelete={programDelete}
          />


        </div>
      </div>
    </>
  )
}
