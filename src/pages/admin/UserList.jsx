import React, { useState } from 'react'
import { useEffect } from 'react'
import BottomNavbar from '../../components/user/BottomNavbar'
import TopBar from '../../components/admin/TobBar'
import UserTable from '../../components/admin/UserTable'
import { useSelector } from 'react-redux'
import { deleteUser, getUsers } from '../../api/api'
import CustomButton from '../../components/common/CustomButton'
import CustomInput from '../../components/common/CustomInput'

export default function UserList() {
    // state
    const [users, setUsers] = useState([])
    const [render, setRender] = useState(true)
    const accessToken = useSelector((state) => state.accessToken)


    //user list get/reterview fuction call
    async function getUsersList(accessToken) {
        const response = await getUsers(accessToken)
        // console.log('res=>', response)
        setUsers(response.data.data)
    }

    //user delete apiFunction Call
    const handleUserDelete = async (e) => {
        const response = await deleteUser(accessToken, e.target.id)
        console.log('res=>', response)
        alert('delete user with id ', e.target.id)
    }

    //user Update apiFunction Call
    const handleUserUpdate = async (e) => {
        console.log(`user update who id is ${e}`)
    }


    //useEffect
    useEffect(() => {
        getUsersList(accessToken)
        setRender(false)
    }, [render])


    return (
        <div className="flex">
            <TopBar />
            <BottomNavbar />
            <div className="mt-14 mb-14 h-[calc(100vh-112px)] overflow-auto w-full border p-3 ">
                <div className="flex w-full flex-col md:flex-row justify-between">
                    <div className="w-1/2">
                        <h3 className="text-2xl  font-bold"> Manage Teams</h3>
                    </div>
                    <div className="w-1/2 text-right">
                        <CustomInput
                            onChange={console.log("onchange call")}
                            placeholder="search"
                            size="medium"
                            className="border m-1  rounded-md "
                        />
                        <CustomButton onClick={console.log("add team click")}>
                            Add User
                        </CustomButton>
                    </div>
                </div>
                <div className="my-1">

                    <UserTable
                        users={users}
                        handleUserDelete={handleUserDelete}
                        handleUserUpdate={handleUserUpdate}
                    />
                </div>

            </div>
        </div>
    )
}
