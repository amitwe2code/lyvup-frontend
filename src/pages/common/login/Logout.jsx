
import {  LogOutIcon } from 'lucide-react'
import { useNavigate } from 'react-router'
import { logoutUser } from '../../../api/api'

export default function Logout() {
    const navigate=useNavigate()
    const accessToken=localStorage.getItem('accessToken')
    const refreshToken=localStorage.getItem('refreshToken')

 
    }

    return(
        <button
        onClick={(e)=>handleLogOut(e)}
        className="flex items-center gap-2 w-full text-left px-4 py-2 text-lg hover:text-[#039a77] hover:bg-gray-100"
      >
         <LogOutIcon/> 
      </button>
    )
   
}
 

