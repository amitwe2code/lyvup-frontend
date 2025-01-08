import { CopyIcon, Edit2Icon, LetterTextIcon, PenBoxIcon, PencilIcon, PlusIcon, TrashIcon } from 'lucide-react'
import React, { useState } from 'react'
import ProgramForm from './ProgramForm'
import { deleteProgram } from '../../api/api'
import { useSelector } from 'react-redux'

export default function ProgramDetail(props) {
  const [isOpen, setIsOpen] = useState(false)
  const accessToken = useSelector((state) => state.token.accessToken)

  const programDelete = async (id) => {
    console.log('id=', id);
    const response = await deleteProgram(accessToken, id)
    console.log("response in delte=>", response);
    props.setApiCall(true)
  }



  return (
    <>
      <div className='' >
        <div className='header w-full mb-3 flex flex-row justify-between '>
          <h3 className='text-2xl capitalize font-bold '>{props?.program?.name} </h3>
          <div className='flex flex-row gap-4'>
            <button  ><PlusIcon className='icon_size_small' /></button>
            <button id={props?.program?.id} onClick={() => setIsOpen(true)}  ><PenBoxIcon className='icon_size_small' /></button>
            <button><CopyIcon className='icon_size_small' /></button>
            <button onClick={() => programDelete(props?.program?.id)} ><TrashIcon className='icon_size_small' /></button>
          </div>
        </div>
        <div class="add_program ">
          <div class="program_card program_summary ">
            <h6 class="">Summary:</h6>
            <p className='text-base'>{props?.program?.description}</p>
          </div>
          <div class="add_program_info ">
            <span class="program_info_card"><b>Written_by:</b> {props?.program?.written_by}</span>
            <span class="program_info_card"><b> price:</b>{props?.program?.price}</span>
            <span class="program_info_card"><b>version</b>{props?.program?.version} </span>
            {/* <span class="program_info_card"><b>Language:</b>{props?.program?.language}</span>
            <span class="program_info_card"><b>label : </b>{props?.program?.label}</span> */}
          </div>


          <div class="week-card  my-2 border w-full">
            <div class=" week-header flex flex-row bg_secondary_color justify-between items-center py-2 px-3">
              <h4 className='capitalize font-semibold'>week 1 </h4>

              <div className='flex flex-row items-center gap-4'>
                <div className='hidden sm:block'><h6>Duration: 0 min.</h6></div>
                <div className='flex flex-row gap-4 '>
                  <button><PlusIcon className='icon_size_small' /></button>
                  <button><CopyIcon className='icon_size_small' /></button>
                  <button><TrashIcon className='icon_size_small' /></button>
                </div>
              </div>
            </div>
            <div className='week-body p-1 bg-white flex flex-wrap gap-3  justify-start'>
              {/* week assign activity  */}
              <div class="card_border   ">
                <div className='flex flex-row justify-end gap-3 p-2 '>

                </div>
                <div className='p-3'>

                  <p>New Test NEw Lyvup setup Description</p>
                  <p><b>Intervention type:</b>Survey</p>
                  <p><b>Intervention type</b>Survey</p>
                </div>
              </div>
            </div>

          </div>
          <div className=''>
            <button className='button p-2  py-1 border rounded-md btn_theme_color   text-white '>Add Week</button>
          </div>

          <ProgramForm
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            program={props.program}
            setprogram={props.setProgram}
            apiCall={props.apiCall}
            setApiCall={props.setApiCall}
          />


        </div>
      </div>
    </>
  )
}
