import React, { useState } from 'react'
import Pagination from '../../components/common/Pagination'
import TopBar from '../../components/admin/TobBar';
import BottomNavbar from '../../components/user/BottomNavbar';
import CustomInput from '../../components/common/CustomInput';
import CustomButton from '../../components/common/CustomButton';
import ProgramsForm from '../../components/admin/ProgramsForm';
import Select from 'react-select/base';
import ProgramDetail from '../../components/admin/ProgramDetail';
import ProgramList from '../../components/admin/ProgramsList';

export default function Programs() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0)
  const [totalPage, setTotalPage] = useState(0)
  const [ordering, setOrdering] = useState("name");
  const [pageSize, setPageSize] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex">
      <TopBar />
      <BottomNavbar />
      <div className="mt-14 mb-14  w-full ">
          <div className='h-[calc(100vh-130px)] row px-0 pe-0'>
            <div className='col-3 bg-slate-200 p-2'>
              <ProgramList />
            </div>
            <div className='col-9 border'>
            <h3 className="text-2xl  font-bold ">Programs</h3>
              <ProgramDetail />
            </div>
          {/* <div className="m">
            <CustomInput
              onChange={(e) => setSearch(e.target.value)}
              placeholder="search"
              size="medium"
              className="border m-1  rounded-md "
            />
            <CustomButton className="my-1" onClick={() => setIsOpen(true)}>
              Add Programs
            </CustomButton>
          </div> */}
        </div>


        {/* <div className=" flex h-auto justify-start my-2 items-center">
          <div className="inline-flex gap-3 rounded-md" role="group">
            <Select
              placeholder='-type-'
              name="type"
              id="type"
              className="text-capitalize  sm:w-48"
              isClearable
            />
          </div>
        </div>
        <div className="my-1 h-full flex-grow flex gap-1 ">
          <div className="">
            <ProgramsTable />
            <Pagination
              nPages={totalPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              total={count}
              count={pageSize}
              setPageSize={setPageSize}
            />
          </div>

        </div> */}
      </div>

      {/* <ProgramsForm /> */}
    </div>)
}
