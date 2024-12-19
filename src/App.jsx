import { Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LoginForm from './pages/common/login/LoginForm'
import RegisterForm from './pages/common/login/RegisterForm'
import ForgetPasswordForm from './pages/common/login/ForgetPasswordForm'
import Dashboard from './pages/admin/Dashboard'
import Profile from './pages/common/profile/Profile'
import UserList from './pages/admin/UserList'
import NotFound from './pages/common/NotFound'
// import UserRegistrationForm from './components/admin/UserRegistrationForm'
// import User from './components/other/User'

export default function App() {
    const token = 'access token'
    // get usertype from localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className='box-border '>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<LoginForm />} />
                        <Route path='/sign' element={<RegisterForm />} />
                        <Route path='/forget' element={<ForgetPasswordForm />} />
                        <Route path='/profile' element={<Profile />} />


                        {user?.user_type === 'PATIENT' && token !== "" && token !== null && token !== undefined ? (
                            <>
                                <Route path='/profile' element={<Profile />} />

                            </>
                        ) : (<></>)}

                        {user?.user_type === 'Admin' && token !== "" && token !== null && token !== undefined ? (
                            <>
                                <Route path='/profile' element={<Profile />} />
                            </>
                        ) : (<></>)}


                        {user?.user_type === 'SUPERADMIN' && token !== "" && token !== null && token !== undefined ? (
                            <>
                                <Route path='/dashboard' element={<Dashboard />} />
                                <Route path='/users' element={<UserList />} />
                                <Route path='/profile' element={<Profile />} />
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
