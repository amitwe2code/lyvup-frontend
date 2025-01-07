import { Suspense, useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LoginForm from './pages/common/login/LoginForm'
import ForgetPasswordForm from './pages/common/login/ForgetPasswordForm'
import Dashboard from './pages/admin/Dashboard'
import Profile from './pages/common/profile/Profile'
import UserList from './pages/admin/UserList'
import NotFound from './pages/common/NotFound'
import SignupForm from './pages/common/login/SignupForm'
import Logout from './pages/common/login/Logout'
import ResetPassword from './pages/common/login/ResetPassword'
import Account from './pages/admin/Account'
import AccountDetail from './components/admin/AccountDetail'
import Activity from './pages/admin/Activity'
import ActivityDetail from './components/admin/ActivityDetail'
import ActivityActionType from './pages/admin/ActivityActionType';
import Programs from './pages/admin/Programs';
import Task from './pages/users/Task';


export default function App() {
  const [user, setUser] = useState(null)
  const token = localStorage.getItem('accessToken')

  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem('user'));
    setUser(userdata)
  }, [])

  // if user logged in 
  const RedirectToProfile = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData && token) {
      return <Navigate to={`/profile/${userData.id}`} />;
    }
    return null;
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='box-border'>
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            {/* Login routes with redirect */}
            <Route path='/' element={
              token && user ? <RedirectToProfile /> : <LoginForm />
            } />
            <Route path='/sign' element={
              token && user ? <RedirectToProfile /> : <SignupForm />
            } />
            <Route path='/forget' element={
              token && user ? <RedirectToProfile /> : <ForgetPasswordForm />
            } />
            <Route path='/reset' element={
              token && user ? <RedirectToProfile /> : <ResetPassword />
            } />
            <Route path='/logout' element={<Logout />} />

            {/* Existing routes */}
            {user?.user_type === 'PATIENT' || user?.user_type === 'patient' && token ? (
              <>
                <Route path='/profile/:id' element={<Profile />} />
              </>
            ) : null}
            {(user?.user_type === 'SUPERADMIN' || user?.user_type === 'superadmin' || user?.user_type === 'Admin' || user?.user_type === 'admin') && token ? (
              <>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/users' element={<UserList />} />
                <Route path='/profile/:id' element={<Profile />} />
                <Route path='/accounts' element={<Account />} />
                <Route path='/account/:id' element={<AccountDetail />} />
                <Route path='/activity' element={<Activity />} />
                <Route path='/activitytype' element={<ActivityActionType />} />
                <Route path='/activity/detail' element={<ActivityDetail />} />
                <Route path='/programs' element={<Programs />} />
                <Route path='/task' element={<Task/>}/>
              </>
            ) : null}

            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  )
}