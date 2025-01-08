import React, { useState,useEffect } from 'react'
import Loader from '../../components/common/Loader'
import ActivityActionTypeForm from '../../components/admin/ActivityActionTypeForm'
import { addActivityType, deleteActivityType, getActivityTypes, updateActivityType } from '../../api/api'
import useValidation from '../../components/common/UseValidation'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import TopBar from '../../components/admin/TobBar'
import BottomNavbar from '../../components/user/BottomNavbar'
import CustomInput from '../../components/common/CustomInput'
import ActivityActionTypeTable from '../../components/admin/ActivityActionTypeTable'
import Pagination from '../../components/common/Pagination'
import CustomButton from '../../components/common/CustomButton'

export default function ActivityActionType() {
    const[activityTypes,setActivityTypes]=useState([])
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
    const initialFormState={
        activity_type:'',
        activity:'',
        amount:'',
        unit:'',
        key_activity:''
    }

  // const initialFormState = formData
  const validators = {
    activity_type: [
      (value) =>
        value === null || value.trim() === ""
            ? "Activity type is required"
           : null,
    ],
    activity: [
      (value) =>
        value === null || value.trim() === ""
            ? "Activity is required"
            :null,
    ],
    amount: [
      (value) =>
        value === null 
            ? "Amount is required"
            :null,
    ],
    unit: [
      (value) =>
        value === null
            ? "Unit is required"
            :null,
    ],
    key_activity: [
      (value) =>
        value === null || value.trim() === ""
            ? "Key activity is required"
           : null,
    ],
  }
  const { state, setState, onInputChange, errors, setErrors, validate } =
    useValidation(initialFormState, validators);

  
    const  getActivityActionTypes = async () => {
      try {
        setLoading(true);
        const response = await getActivityTypes(accessToken, search, currentPage, pageSize, ordering);
        console.log("activitytypes =>",response.data.data)
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
    const handleActivityActionTypeUpdate = async (activityType) => {
      setState({
        ...activityType
      });
      console.log("activity=>",activityType)
      setIsOpen(true);
      
    };
  
    const handleActivityActionTypeDelete = async (id) => {
      try {
        setLoading(true);
        console.log("e in type delete =>",id);
        const response = await deleteActivityType(accessToken, id);
        console.log("res=>", response);
        setIsBoolean(true);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
  
    const handleAccountAdd = async (e) => {
      if(validate){

        try {
          e.preventDefault();
          setLoading(true);
          
          if (e.target.id == "" || e.target.id == "undefined" || e.target.id == "null") {
            const response = await addActivityType(accessToken, state);
            console.log("response=", response);
            // alert("user add success");
           
            
          } else {
            const response = await updateActivityType(accessToken, state, e.target.id);
            console.log("response=", response);
            // alert("user update success");
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
            <div className="mt-14 mb-14 h-[calc(100vh-112px)] overflow-auto w-full border p-3 ">
                <div className="flex h-auto w-full flex-col md:flex-row justify-between">
                    <div className="md:w-1/2">
                        <h3 className="text-2xl  font-bold"> Activity Type</h3>
                    </div>
                    <div className="md:w-1/2 flex flex-wrap justify-start md:justify-end ">
                        <CustomInput
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="search"
                            size="medium"
                            className="border m-1  rounded-md "
                        />
                        <CustomButton className="my-1" onClick={() => setIsOpen(true)}>
                            Add Activity Type
                        </CustomButton>
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
                            handleActivityActionTypeUpdate={handleActivityActionTypeUpdate}
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
                    initialFormState={initialFormState}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    state={state}
                    setState={setState}
                    onInputChange={onInputChange}
                    errors={errors}
                    handleFormSubmit={handleAccountAdd}
                />
            </div>
        </div>
    )
}
