import { LogOut } from 'lucide-react'
import { useNavigate } from 'react-router'
import { logoutUser } from '../../../api/api'
import { useEffect, useState } from 'react'

export default function Logout() {
  const [boolean, setBoolean] = useState(false)
  const navigate = useNavigate()
  const accessToken = localStorage.getItem('accessToken')
  const refreshToken = localStorage.getItem('refreshToken')

  // const handleLogOut = async () => {
  //   try {
  //     const response = await logoutUser(accessToken, refreshToken)
  //     localStorage.removeItem('accessToken')
  //     localStorage.removeItem('refreshToken')
  //     localStorage.removeItem('user')
  //     setBoolean(true)
  //     console.log(response)
  //   } catch (error) {
  //     console.error('Logout error:', error)
  //     // Error के case में भी user को logout करें
  //     localStorage.removeItem('accessToken')
  //     localStorage.removeItem('refreshToken')
  //     localStorage.removeItem('user')
  //     setBoolean(true)}

    const handleLogOut=async()=>{
    const response=await logoutUser(accessToken,refreshToken)
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('user')
    console.log(response)
    navigate('/')
    window.location.reload()
    }

  useEffect(() => {
    if (boolean) {
      navigate('/')
      window.location.reload()
    }
  }, [boolean, navigate])

  // अगर tokens नहीं हैं तो automatically login page पर redirect करें
  useEffect(() => {
    if (!accessToken || !refreshToken) {
      navigate('/')
    }
  }, [accessToken, refreshToken, navigate])

  return (
    <button
      onClick={handleLogOut}
      className="flex items-center gap-2 w-full text-left px-4 py-2 text-lg hover:text-[#039a77] hover:bg-gray-100"
    >
      <LogOut /> Logout
    </button>
  )
}
 

