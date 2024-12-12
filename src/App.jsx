import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginForm from './components/login/LoginForm'
import RegisterForm from './components/login/RegisterForm'
import ForgetPasswordForm from './components/login/ForgetPasswordForm'
import User from './components/other/User'

export default function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<LoginForm />} />
                        <Route path='/sign' element={<RegisterForm />} />
                        <Route path='/forget' element={<ForgetPasswordForm />} />
                        <Route path='/user' element={<User/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </Suspense>
    )
}
