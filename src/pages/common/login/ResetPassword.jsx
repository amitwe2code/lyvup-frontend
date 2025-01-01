import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { resetPassword } from '../../../api/api'

export default function ResetPassword() {
const [password,setPassword]=useState('')
const [confermPassword,setConfermPassword]=useState('')
const location = useLocation();
const searchParams = new URLSearchParams(location.search);
const userId = searchParams.get("uid");
const token = searchParams.get("token");
console.log(userId,token)
const navigate=useNavigate()


// forgetapicall    
const handleReset=async()=>{
const response= await resetPassword(userId,token,password,confermPassword)
console.log('response password updated',response)
// alert('response update')
navigate('/')
}



return (
<>
<div className="flex justify-center items-center p-4 h-screen bg-gray-100">
<div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
<div className="logo text-center flex justify-center items-center">
<img src="https://lyvup.com/hs-fs/hubfs/Tekengebied%201%20(2).jpg?width=211&height=149&name=Tekengebied%201%20(2).jpg" alt="Lyvup Logo" className="logo-img" />
</div>
<h2 className="text-2xl font-semibold text-center mb-2">Forgot Password</h2>
<p className="text-gray-600 mb-4 text-center">
Enter your email to reset your password.
</p>
<form>
<div className="mb-4">
{/* <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
Email
</label> */}
<input
type="password"
id="password"
name="password"
onChange={(e)=>setPassword(e.target.value)}
className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
placeholder="Enter Your New Password"
/>
</div>
<div className="mb-4">
{/* <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
Email
</label> */}
<input
type="password"
id="confirmpassword"
name="confirmpassword"
onChange={(e)=>setConfermPassword(e.target.value)}
className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
placeholder="Enter Confirm Password"
/>
</div>
<button
type="button"
onClick={()=>handleReset()}
className="bg-[#0095f6] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-md w-full"
>
Reset Password
</button>
</form>
<div className="pl-2">
<Link to="/" className="text-[#0095f6] hover:text-blue-700">
Go to Login
</Link>
</div>
</div>
</div>

</>
)
}
