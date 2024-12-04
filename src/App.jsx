// import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginForm from './components/login/LoginForm'
import RegisterForm from './components/login/RegisterForm'
import ForgetPasswordForm from './components/login/ForgetPasswordForm'


export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {/* <div>
                    <Nav></Nav> */}
                    <Route path='/' element={<LoginForm />} />
                    <Route path='/sign' element={<RegisterForm />} />
                    <Route path='/forget' element={<ForgetPasswordForm />} />
                    {/* </div> */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}
