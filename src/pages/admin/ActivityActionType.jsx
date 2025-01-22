import React, { useState, useEffect } from 'react'
import Loader from '../../components/common/Loader'
import { addActivityType, deleteActivityType, getActivityTypes, updateActivityType } from '../../api/api'
import useValidation from '../../components/common/UseValidation'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import TopBar from '../../components/admin/TobBar'
import BottomNavbar from '../../components/user/BottomNavbar'
import CustomInput from '../../components/common/CustomInput'
import Pagination from '../../components/common/Pagination'
import CustomButton from '../../components/common/CustomButton'
import ActivityActionTypeForm from '../../components/admin/activityActionType/ActivityActionTypeForm'
import ActivityActionTypeTable from '../../components/admin/activityActionType/ActivityActionTypeTable'
import Header from '../../components/common/Header'

export default function ActivityActionType() {
  const [apiCall, setApiCall] = useState(true);
  const [isOpen, setIsOpen] = useState(false);





  return (
    <div className="flex">
      <TopBar />
      <BottomNavbar />
        <div className="mt-14 mb-14 h-[calc(100vh-112px)] overflow-auto w-full border p-3 ">
          <div className=" w-full mb-4">
            <Header heading='Activity Action Type' setIsOpen={setIsOpen} btnLabel='ADD Activity Type' />
          </div>
          <div className="flex h-auto w-full flex-col md:flex-row justify-between">
            <div className="md:w-1/2 flex flex-wrap justify-start md:justify-end ">
              <CustomInput
                onChange={(e) => setSearch(e.target.value)}
                placeholder="search"
                size="medium"
                className="border m-1  rounded-md "
              />
              
            </div>
          </div>
          <div className="my-1">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <Loader />
              </div>
            ) : (<>
              <ActivityActionTypeTable
                activityTypes={activityTypes}
                ordering={ordering}
                setOrdering={setOrdering}
                handleActivityActionTypeDelete={handleActivityActionTypeDelete}
              // handleActivityActionTypeUpdate={handleActivityActionTypeUpdate}
              />
              <Pagination
                nPages={totalPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                total={count}
                count={pageSize}
                setPageSize={setPageSize}
              />
            </>
            )}
          </div>
          <ActivityActionTypeForm
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setApiCall={setApiCall}


          />
        </div>
      </div>
      )
}
