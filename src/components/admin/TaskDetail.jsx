import { CalculatorIcon, LetterTextIcon, PenIcon, TimerIcon } from 'lucide-react'
import React from 'react'

export default function TaskDetail() {
  return (
   <div className='h-full'>
        <h1 className='btn_theme_color p-2 sm:my-4 sm:min-h-20 font-bold rounded-md text-xl'>test podcast creater idcopy</h1>
        <div className='my-4'>
            <span className='rounded-md text_theme_color bg_secondary_color  p-1 font-semibold border'>Assignment</span>
            <div className='rounded-md p-2 flex  text_theme_color justify-center sm:my-4 items-center bg_secondary_color '>test podcast creater id123</div>
        </div>
        <div className='sm:my-4 flex flex-wrap gap-4'>
            <span className=' btn_theme_color p-2 rounded-md flex item-center gap-2'><TimerIcon/> 10 min </span>
            <span className='btn_theme_color p-2 px-4 rounded-md flex item-center gap-2'><CalculatorIcon/>   09 Sep 2021</span>
        </div>
        <div className='text-center my-2 sm:my-4'> <button className='p-2 px-4 btn_theme_color  rounded-md '>start</button></div>
        <hr />
        <div className='w-full border my-1  rounded-md  bg_secondary_color '>
            <div className='flex flex-wrap gap-2'>
                <div><img src="" alt="" /></div>
                <p className='text-base font-bold '> Welikeyou11 o</p>
            </div>
            <p className='my-2 p-3'> Comment on activity</p>
        </div>
   </div>
  )
}
