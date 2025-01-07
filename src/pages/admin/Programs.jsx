import React, { useEffect, useState } from 'react'
import Pagination from '../../components/common/Pagination'
import TopBar from '../../components/admin/TobBar';
import BottomNavbar from '../../components/user/BottomNavbar';
import CustomInput from '../../components/common/CustomInput';
import CustomButton from '../../components/common/CustomButton';
import ProgramsForm from '../../components/admin/ProgramForm';
import Select from 'react-select/base';
import ProgramDetail from '../../components/admin/ProgramDetail';
import ProgramList from '../../components/admin/ProgramsList';
import ProgramForm from '../../components/admin/ProgramForm';
import useValidation from '../../components/common/UseValidation';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { PanelRightClose } from 'lucide-react';

export default function Programs() {
  const [program, setProgram] = useState([])
  const { t } = useTranslation()
  const [isBoolean, setIsBoolean] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPage, setTotalPage] = useState(1);
  const [search, setSearch] = useState("");
  const [ordering, setOrdering] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const accessToken = useSelector((state) => state.token.accessToken);
  const [loading, setLoading] = useState(false);
  const [isExpanded,setIsExpanded]=useState(false)
  const initialFormState = {
    name: '',
    description: '',
    brand: '',
    language: '',
    written_by: '',
    version: '',
    price: ''
  }

  // const initialFormState = formData
  const validators = {
    name: [
      (value) =>
        value === null || value.trim() === ""
          ? "name is required"
          : null,
    ],
    description: [
      (value) =>
        value === null || value.trim() === ""
          ? "description is required"
          : null,
    ],
    brand: [
      (value) =>
        value === null
          ? "label is required"
          : null,
    ],
    language: [
      (value) =>
        value === null
          ? "language is required"
          : null,
    ],
    written_by: [
      (value) =>
        value === null || value.trim() === ""
          ? "written by is required"
          : null,
    ],
    version: [
      (value) =>
        value === null || value.trim() === ""
          ? "version is required"
          : null,
    ],
    price: [
      (value) =>
        value === null || value.trim() === ""
          ? "price is required"
          : null,
    ],
  }
  const { state, setState, onInputChange, errors, setErrors, validate } =
    useValidation(initialFormState, validators);

  const getActivityActionTypes = async () => {
    try {
      setLoading(true);
      const response = await getActivityTypes(accessToken, search, currentPage, pageSize, ordering);
      console.log("activitytypes =>", response.data.data)
      setActivityTypes(response.data.data.results);
      setCount(response.data.data.pagination.count);
      setTotalPage(response.data.data.pagination.total_pages);
      setCurrentPage(response.data.data.pagination.current_page);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleProgramUpdate = async (activityType) => {
    setState({
      ...activityType
    });
    console.log("activity=>", activityType)
    setIsOpen(true);

  };

  const handleProgramDelete = async (id) => {
    try {
      setLoading(true);
      console.log("e in type delete =>", id);
      const response = await deleteActivityType(accessToken, id);
      console.log("res=>", response);
      setIsBoolean(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleProgramAddAndUpdate = async (e) => {
    if (validate) {

      try {
        e.preventDefault();
        setLoading(true);
        if (e.target.id == "" || e.target.id == "undefined" || e.target.id == "null") {
          const response = await addActivityType(accessToken, state);
          console.log("response=", response);
        } else {
          const response = await updateActivityType(accessToken, state, e.target.id);
          console.log("response=", response);
        }
        setIsBoolean(true);
        setIsOpen(false);
        setState(initialFormState);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    getActivityActionTypes();
    setIsBoolean(false);
  }, [isBoolean, pageSize, currentPage, ordering, search]);

  return (
    <div className="flex">
      <TopBar />
      <BottomNavbar />
      <div className="mt-14 mb-14  h-[calc(100vh-112px)]   w-full  ">
        <div className=' w-full h-full relative   flex '>
      
          
          <div className={`border  bg-white h-full sm:w-1/4 program_sidebar  ${isExpanded ? "program_sidebar_show" : ""
          }`}>
             <PanelRightClose className={`program_sidebar_btn sm:hidden  duration-1000  bg_theme_color w-10 h-10 p-2  ${isExpanded ? " rotate-180" : ""
          } `}
          onClick={()=>setIsExpanded(!isExpanded)}/>
            <ProgramList />
          </div>
          
          <div className='  h-full sm:w-3/4 overflow-y-auto border  p-3  '>
            <ProgramDetail />
          </div>
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
   
   
    </div>)
}
