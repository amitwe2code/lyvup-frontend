import React, { useState } from 'react'
import TopBar from '../../components/admin/TobBar'
import BottomNavbar from '../../components/user/BottomNavbar'
import TaskTable from '../../components/admin/tables/TaskTable'
import TaskDetail from '../../components/admin/TaskDetail'

export default function Task() {
   
    return (
        <div className="flex">
            <TopBar />
            <BottomNavbar />
            <div className="mt-14 mb-14 h-[calc(100vh-112px)] overflow-auto w-full   ">
                <div className='flex flex-wrap  h-full flex-row'>
                    <div className='w-full sm:w-3/5 p-3 border-b  sm:border-r '>
                        <h3 className="text-2xl  font-bold"> Tasks</h3>
                        <div className='my-4 h-auto'>
                        <TaskTable />
                        </div>
                        
                    </div>
                    <div className={`sm:w-2/5 w-full sm:block  p-3  `}>
                        <TaskDetail/>
                    </div>
                </div>
            </div>
        </div>
    )
}
