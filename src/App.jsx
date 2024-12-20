import { Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LoginForm from './pages/common/login/LoginForm'
import ForgetPasswordForm from './pages/common/login/ForgetPasswordForm'
import Dashboard from './pages/admin/Dashboard'
import Profile from './pages/common/profile/Profile'
import UserList from './pages/admin/UserList'
import NotFound from './pages/common/NotFound'
import SignupForm from './pages/common/login/SignupForm'
import Logout from './pages/common/login/Logout'

// import UserRegistrationForm from './components/admin/UserRegistrationForm'
// import User from './components/other/User'

export default function App() {
    const [user,setUser]=useState(null)
    const token=localStorage.getItem('accessToken')
    useEffect(()=>{
        const userdata = JSON.parse(localStorage.getItem('user'));
        setUser(userdata)
    },[])
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className='box-border '>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<LoginForm />} />
                        <Route path='/sign' element={<SignupForm />} />
                        <Route path='/forget' element={<ForgetPasswordForm />} />
                        <Route path='/logout' element={<Logout />} />
                       


                        {user?.user_type === 'PATIENT' && token !== "" && token !== null && token !== undefined ? (
                            <>
                                <Route path='/profile/:id' element={<Profile />} />

                            </>
                        ) : (<></>)}

                        {user?.user_type === 'Admin' && token !== "" && token !== null && token !== undefined ? (
                            <>
                                <Route path='/profile/:id' element={<Profile />} />
                            </>
                        ) : (<></>)}


                        {user?.user_type === 'SUPERADMIN' && token !== "" && token !== null && token !== undefined ? (
                            <>
                                <Route path='/dashboard' element={<Dashboard />} />
                                <Route path='/users' element={<UserList />} />
                                <Route path='/profile/:id' element={<Profile />} />
                            </>
                        ) : (<>
                            <Route path='/' element={<LoginForm />} />
                        </>)}
                        <Route path='*' element={<NotFound/>} />


                    </Routes>
                </BrowserRouter>
            </div>
        </Suspense>
    )
}
