import { CopyIcon, Edit2Icon, LetterTextIcon, PencilIcon, PlusIcon, TrashIcon } from 'lucide-react'
import React from 'react'

export default function ProgramDetail() {
  return (
    <>
      <div className='' >
          <div className='header w-full mb-3 flex flex-row justify-between '>
                  <h3 className='text-3xl font-semibold '>New Test NEw Lyvup setup </h3>
                  <div className='flex flex-row gap-4'>
                  <button className=''><PlusIcon className='icon_size_small' /></button>
                  <button><CopyIcon className='icon_size_small' /></button>
                  <button><TrashIcon className='icon_size_small' /></button>
                  </div>
          </div>
        <div class="add_program ">
          <div class="program_card program_summary ">
            <h6 class="">Summary:</h6>
            <p>New Test NEw Lyvup setup Description</p>
          </div>
          <div class="add_program_info ">
            <span class="program_info_card"><b>Owner:</b> Rohit</span>
            <span class="program_info_card"><b>Lead time:</b>3 Week</span>
            <span class="program_info_card"><b>IP owner:</b> </span>
            <span class="program_info_card"><b>Time load:</b>79 min.</span>
            <span class="program_info_card"><b>Version:</b>v1</span>
            <span class="program_info_card"><b>Workload (avg. per week):</b>26.33 min.</span>
            <span class="program_info_card"><b>Costs:</b>1111</span>
            <span class="program_info_card"><b>Language:</b>en</span>
          </div>


          <div class="week-card  my-2 border w-full">
            <div class=" week-header flex flex-row bg-green-100 justify-between items-center py-2 px-3">
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
                  <button><PencilIcon className='icon_size_small'/></button>
                  <button><TrashIcon className='icon_size_small'/></button>
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
            <button className='button p-2  py-1 border rounded-md bg-[#039a77] text-white '>Add Week</button>
          </div>
          

        </div>
      </div>
    </>
  )
}
