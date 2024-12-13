import React, { useState } from 'react'
import TopBar from '../../components/admin/TobBar'
import BottomNavbar from '../../components/user/BottomNavbar'
import CustomButton from '../../components/common/CustomButton'
import { Home } from 'lucide-react'
import CustomInput from '../../components/common/CustomInput'
import TeamTable from '../../components/admin/TeamTable'

export default function Dashboard() {


    return (
        <div className='flex '>
            <TopBar />
            <BottomNavbar />
            <div className='mt-14 mb-14 h-[calc(100vh-112px)] overflow-auto w-full border p-3 '>
                <div className='flex w-full flex-col md:flex-row justify-between'>
                    <div className='w-1/2'>
                        <h1 className='text-3xl p-1 font-bold'> Manage Teams</h1>
                    </div>
                    <div className='w-1/2 text-right'>
                        <CustomInput onChange={console.log('onchange call')} placeholder='search' size='medium' className='border m-1  rounded-md ' />
                        <CustomButton onClick={console.log('add team click')}>Add Team</CustomButton>
                    </div>
                </div>

                <div className='py-3 '>
                    <TeamTable />
                </div>


            </div>
        </div>
    )
}
