import React, { useState, useEffect } from 'react'
import TopBar from '../../components/admin/TobBar'
import BottomNavbar from '../../components/user/BottomNavbar'
import Header from '../../components/common/Header'
import ActivityActionTypeComponent from '../../components/admin/activityActionType/ActivityActionTypeComponent'
import ActivityActionTypeModelForm from '../../components/admin/modelforms/ActivityActionTypeModelForm'

export default function ActivityActionType() {
  const [apiCall, setApiCall] = useState(true);
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="flex">
      <TopBar />
      <BottomNavbar activeTab='activityActionType' />
      <div className="mt-14 mb-14 h-[calc(100vh-112px)] scroll-none overflow-auto w-full border p-3 ">
        <div className=" w-full mb-4">
          <Header heading='Activity Action Type' setIsOpen={setIsOpen} btnLabel='ADD Activity Type' />
        </div>
        <ActivityActionTypeComponent
          apiCall={apiCall}
          setApiCall={setApiCall}
        />

      </div>
      <ActivityActionTypeModelForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setApiCall={setApiCall}

      />
    </div>
  )
}
