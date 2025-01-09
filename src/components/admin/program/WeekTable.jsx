import React, { useEffect, useState } from 'react'
import { getWeek } from '../../../api/api'
import { useSelector } from 'react-redux';

export default function WeekTable() {
const [weeks,setWeeks]=useState()
const accessToken = useSelector((state) => state.token.accessToken);
    const getWeeks=async()=>{
        const respose=await getWeek(accessToken)
        setWeeks(respose.data.data.results)
    }
    useEffect(()=>{
        getWeeks()
    },)


    return (
        <div class="week-card  my-2 border w-full">
            <div class=" week-header flex flex-row bg_secondary_color justify-between items-center py-2 px-3">
                <h4 className='capitalize font-semibold'>week 1 </h4>

                <div className='flex flex-row items-center gap-4'>
                    <div className='hidden sm:block'><h6>Duration: 0 min.</h6></div>
                    <div className='flex flex-row gap-4 '>
                        <button><PlusIcon className='icon_size_small' /></button>
                        <button><CopyIcon className='icon_size_small' /></button>
                        <button><TrashIcon className='icon_size_small' /></button>
                    </div>
                </div>
            </div>
            <div className='week-body p-1 bg-white flex flex-wrap gap-3  justify-start'>
                <table class="table">
                    <thead>
                        <tr>
                            <th>activity_name</th>
                            <th>activity_type</th>
                            <th>brand</th>
                            <th>setting</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(week || []).map((activity) => (
                            <tr key={activity?.id}>
                                <td >{activity?.name}</td>
                                <td>{activity?.activity_type}</td>
                                <td>{activity?.brand}</td>
                                <td>  <button><TrashIcon className='icon_size_small' /></button></td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

        </div>
    )
}
