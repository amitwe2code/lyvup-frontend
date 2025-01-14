import React, { useEffect, useState } from 'react'
import { deleteWeekActivity, getWeek } from '../../../api/api'
import { useSelector } from 'react-redux';
import { CopyIcon, PlusIcon, TrashIcon } from 'lucide-react';
import AddWeekForm from './AddWeekForm';
import WeekForm from './weekForm';

export default function WeekTable(props) {
    const accessToken = useSelector((state) => state.token.accessToken)
    const [weeks, setWeeks] = useState({})
    const [apiCall, setApiCall] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [isWeekFormOpen, setIsWeekFormOpen] = useState(false)
    const [addWeekNo, setAddWeekNo] = useState()  //add new week number 
    const [weekNo,setWeekNo]=useState()

    const getWeeks = async () => {
        const response = await getWeek(accessToken,props.program_id)
        // setWeeks(response.data.data.results)
        console.log('response =>',response)
        const WeekActivityData = response.data.data.results.reduce((acc, activity) => {
            acc[activity.week_no] = acc[activity.week_no] || [];
            acc[activity.week_no].push(activity);
            return acc;
        }, {});
        setWeeks(WeekActivityData)
        let WeekNos = response.data.data.results.map((item) => item.week_no)
        let LastWeekCount = Math.max(...WeekNos)
        setAddWeekNo(LastWeekCount+1)
    }

    const handleWeekActivityDelete = async (e, id) => {
        e.preventDefault()
        const response = await deleteWeekActivity(accessToken, id)
        setApiCall(true)
    }
    
    const handleAdd=(e,weekNo)=>{
        e.preventDefault()
        setWeekNo(weekNo)
        setIsWeekFormOpen(true)
    }   
    console.log('weekNo',weekNo)
    useEffect(() => {
        getWeeks()
    }, [apiCall,props.program_id])


    return (
        <>
            <div>

                {Object.keys(weeks).map((week) => (<div key={week} className="week-card  my-2 border w-full">
                    <div className=" week-header flex flex-row bg_secondary_color justify-between items-center py-2 px-3">
                        <h4 className='capitalize font-semibold'>week {week}  </h4>

                        <div className='flex flex-row items-center gap-4'>
                            <div className='hidden sm:block'><h6>Duration: 0 min.</h6></div>
                            <div className='flex flex-row gap-4 '>
                                <button id={week} onClick={(e)=>handleAdd(e,week)}><PlusIcon className='icon_size_small' /></button>
                                <button><CopyIcon className='icon_size_small' /></button>
                                <button><TrashIcon className='icon_size_small' /></button>
                            </div>
                        </div>
                    </div>
                    <div className='week-body p-1 w-full overflow-auto bg-white flex flex-wrap gap-3  justify-start'>
                        {weeks[week] && <>
                            <table className="table w overflow-auto">
                                <thead>
                                    <tr>
                                        <th>activity_name</th>
                                        <th>activity_type</th>
                                        <th>brand</th>
                                        <th>week no </th>
                                        <th>setting</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {weeks[week].map((activity) => (                       
                                            activity?.activity_id?
                                                <tr key={activity?.id}>
                                                    <td >{activity?.activity_name}</td>
                                                    <td>{activity?.activity_type}</td>
                                                    <td>{activity?.brand}</td>
                                                    <td>{activity?.week_no}</td>
                                                    <td>  <button id={activity?.id} onClick={(e) => handleWeekActivityDelete(e, activity?.id)}><TrashIcon className='icon_size_small' /></button></td>
                                                </tr>
                                                : null        
                                    ))}
                                </tbody>
                            </table>
                        </>}
                    </div>

                </div>
                ))}
                <div className='my-5'>
                    <button className='button p-2  py-1 border rounded-md btn_theme_color text-white ' onClick={() => setIsOpen(true)}>Add Week</button>
                </div>
              
                <AddWeekForm
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    setApiCall={setApiCall}
                    program_id={props.program_id}
                    week_no={addWeekNo}
                />
                {(weekNo && props?.program_id)&&(
                    <WeekForm 
                    isOpen={isWeekFormOpen}
                    setIsOpen={setIsWeekFormOpen}
                    setApiCall={setApiCall}
                    program_id={props.program_id}
                    week_no={weekNo} />
                )}
            </div>

        </>
    )
}