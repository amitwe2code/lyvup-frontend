import React, { useEffect, useState } from 'react'
import { CopyWeek, deleteWeekActivity, getWeek } from '../../../api/api'
import { useSelector } from 'react-redux';
import { CloudDownload, CopyIcon, Edit2Icon, LetterText, PlusIcon, TrashIcon } from 'lucide-react';
import AddWeekForm from './AddWeekForm';
import ProgramActivityForm from './ProgramActivityForm';

export default function WeekTable(props) {
    const accessToken = useSelector((state) => state.token.accessToken)
    const [programActivitys, setProgramActivitys] = useState({})
    const [apiCall, setApiCall] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [isProgramActivityFormOpen, setIsProgramActivityFormOpen] = useState(false)
    const [nextWeekNo, setNextWeekNo] = useState()  //add new week number 
    const [weekNo, setWeekNo] = useState()
    const [updateProgramActivity,setUpdateProgramActivity]=useState()


    // get programActivity api call function 
    const getProgramActivitys = async () => {
        const response = await getWeek(accessToken, props.program_id)
        const WeekActivityData = response.data.data.results.reduce((acc, activity) => {
            acc[activity.week_no] = acc[activity.week_no] || [];
            acc[activity.week_no].push(activity);
            return acc;
        }, {});
        setProgramActivitys(WeekActivityData)
        let WeekNos = response.data.data.results.map((item) => item.week_no)
        if (WeekNos) {
            let LastWeekCount = Math.max(...WeekNos)
            if (LastWeekCount !== -Infinity) {
                setNextWeekNo(LastWeekCount + 1)
            }
            else { setNextWeekNo(1) }
        }
    }


    //  week and  programactivity in a week  delete api call function 
    const handleProgramActivityDelete = async (e, weekNo = '', activityId = '') => {
        e.preventDefault()
        const data = {
            week_no: weekNo,
            program_id: props?.program_id,
            activity_id: activityId
        }
        const response = await deleteWeekActivity(accessToken, data)
        setApiCall(true)
    }
    //inside week programactivity update function 
    const handleUpdateProgramActivity=(e,programActivity)=>{
        e.preventDefault()
        setUpdateProgramActivity(programActivity)   
        setIsProgramActivityFormOpen(true)        
    }

    //function Activity add 
    const handleActivityAddInWeek = (e, weekNo) => {
        e.preventDefault()
        setWeekNo(weekNo)
        setIsProgramActivityFormOpen(true)
    }

    
    
    // copy week api call function pass new week extra 
    const handleCopyWeek=async(e,week)=>{
        e.preventDefault()
        const data={
            week_no:week,
            program_id:props?.program_id,
            newWeek:nextWeekNo
        }
        console.log('data=>',data);
        const response=await CopyWeek(accessToken,data)
        console.log('response in copy week=>',response);
        setApiCall(true)
    }
    
    useEffect(() => {
        getProgramActivitys()
        setApiCall(false)
    }, [apiCall, , props.program_id])

    return (
        <>
            <div>
                {Object.keys(programActivitys).map((week) => (<div key={week} className="week-card  my-2 border w-full">
                    <div className=" week-header flex flex-row bg_secondary_color justify-between items-center py-2 px-3">
                        <h4 className='capitalize font-semibold'>week {week}  </h4>

                        <div className='flex flex-row items-center gap-4'>
                            {/* <div className='hidden sm:block'><h6>Duration: 0 min.</h6></div> */}
                            <div className='flex flex-row gap-4 '>
                                <button id={week} onClick={(e) => handleActivityAddInWeek(e, week)}><PlusIcon className='icon_size_small' /></button>
                                <button id={week} onClick={(e)=>handleCopyWeek(e,week)}><CopyIcon className='icon_size_small' /></button>
                                <button id={week} onClick={(e) => handleProgramActivityDelete(e, week)}><TrashIcon className='icon_size_small' /></button>
                            </div>
                        </div>
                    </div>
                    <div className='week-body p-1 w-full overflow-auto bg-white flex flex-wrap gap-3  justify-start'>
                        {programActivitys[week] && <>
                            <table className="table w-full h-auto overflow-auto">
                                <thead>
                                    <tr>
                                        <th>activity_name</th>
                                        <th>activity_type</th>
                                        <th>brand</th>
                                        <th>day </th>
                                        <th>time</th>
                                        <th>setting</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {programActivitys[week].map((activity) => (
                                        activity?.activity_id ?
                                            <tr key={activity?.id}>
                                                <td >{activity?.activity_name}</td>
                                                <td>{activity?.activity_type}</td>
                                                <td>{activity?.brand}</td>
                                                <td>{activity?.day ? activity?.day : 'N/A'}</td>
                                                <td>{activity?.time ? activity?.time : 'N/A'}</td>
                                                <td>
                                                    <div className="inline-flex btn-group gap-1" role="group">
                                                        <button className='' id={activity?.id} onClick={(e) => handleUpdateProgramActivity(e, activity)}><LetterText className='icon_size_small ' /></button>
                                                        <button className='' id={activity?.id} onClick={(e) => handleProgramActivityDelete(e, activity?.week_no, activity?.id)}><TrashIcon className='icon_size_small ' /></button>
                                                    </div>
                                                </td>
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
                {isOpen && (
                    <AddWeekForm
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        setApiCall={setApiCall}
                        program_id={props.program_id}
                        week_no={nextWeekNo}
                        setWeekNo={setNextWeekNo}
                    />
                )}
                {((weekNo && props?.program_id)||updateProgramActivity) && (
                    <ProgramActivityForm
                        isOpen={isProgramActivityFormOpen}
                        setIsOpen={setIsProgramActivityFormOpen}
                        setApiCall={setApiCall}
                        program_id={props.program_id}
                        week_no={weekNo}
                        updateProgramActivity={updateProgramActivity}
                        setUpdateProgramActivity={setUpdateProgramActivity}
                        setWeekNo={setWeekNo} />
                )}
            </div>

        </>
    )
}