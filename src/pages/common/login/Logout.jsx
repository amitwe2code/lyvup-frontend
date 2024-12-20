
import { LogOut } from 'lucide-react'
import { useNavigate } from 'react-router'
import { logout } from '../../../api/api'

export default function Logout() {
    const navigate=useNavigate()
    const accessToken=localStorage.getItem('accessToken')
    const refreshToken=localStorage.getItem('refreshToken')

    const handleLogOut=async()=>{
    // const response=await logout(accessToken,refreshToken)
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('user')
    // console.log(response)
    navigate('/')
    }

    return(
        <button
        onClick={()=>handleLogOut()}
        className="flex items-center gap-2 w-full text-left px-4 py-2 text-lg hover:text-[#039a77] hover:bg-gray-100"
      >
         <LogOut/>   Logout
      </button>
    )
   
}
 

