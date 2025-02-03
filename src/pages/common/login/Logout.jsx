
import { LogOutIcon } from 'lucide-react'
import { useNavigate } from 'react-router'
import { logoutUser } from '../../../api/api'
import { useEffect, useState } from 'react'
import Loader from '../../../components/common/Loader'

export default function Logout() {
  const [apiCall, setApiCall] = useState(false)
  const [loading, setLoading] = useState(false)
  const accessToken = localStorage.getItem('accessToken')
  const refreshToken = localStorage.getItem('refreshToken')
  const navigate = useNavigate()


  //logout from backend and local storage call function
  const LogoutModelApiCall = async () => {
    try {
      setLoading(true)
      const response = await logoutUser(accessToken, refreshToken)
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('user')
      setApiCall(true)
      console.log(response)
    } catch (error) {
      console.error('Logout error:', error)
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('user')
      setApiCall(true)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    if (apiCall) {
      navigate('/')
      window.location.reload()
    }
  }, [apiCall, navigate])

  if (loading) {
    return <Loader />
  }

  return (
    <button
      onClick={(e) => LogoutModelApiCall(e)}
      className="flex items-center gap-2 w-full text-left px-4 py-2 text-lg hover:text-[#039a77] hover:bg-gray-100"
    >
      <LogOutIcon />
    </button>
  )

}


