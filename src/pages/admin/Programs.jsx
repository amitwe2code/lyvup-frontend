import React, { useEffect, useState } from 'react'
import TopBar from '../../components/admin/TobBar';
import ProgramDetail from '../../components/admin/program/ProgramDetail';
import ProgramList from '../../components/admin/program/ProgramsList';

import { PanelRightClose } from 'lucide-react';
import BottomNavbar from '../../components/user/BottomNavbar';

export default function Programs() {
  const [isExpanded, setIsExpanded] = useState(false)   //for sidebar 
  const [program, setProgram] = useState("")
  const [apiCall, setApiCall] = useState(false)     

  return (
    <div className="flex">
      <TopBar />
      <BottomNavbar activeTab='program' />
      <div className="mt-14 mb-14  h-[calc(100vh-112px)]   w-full  ">
        <div className=' w-full h-full relative   flex '>
          <div className='  h-full w-full md:w-3/4 scroll-none overflow-y-auto border   p-3  '>
            <ProgramDetail
              program={program}
              setProgram={setProgram}
              setApiCall={setApiCall}
            />
          </div>
          <div className={`border  bg-white h-full  md:w-1/4 program_sidebar  ${isExpanded ? "program_sidebar_show" : ""
            }`}>
            <PanelRightClose className={`program_sidebar_btn  duration-1000  bg_theme_color w-10 h-10 p-2  ${isExpanded ? " rotate-180 " : ""} `} onClick={() => setIsExpanded(!isExpanded)} />
            <ProgramList
              program={program}
              setProgram={setProgram}
              apiCall={apiCall}
              setApiCall={setApiCall}
            />
          </div>

        </div>
      </div>
    </div>)
}
