import React, { useEffect, useState } from 'react'
import { notification, updatenotification } from '../../../api/api'
import { useSelector } from 'react-redux';
import { BellIcon, LoaderCircleIcon } from 'lucide-react';
import Loader from '../Loader';

export default function Notification(props) {
    const accessToken = useSelector((state) => state.token.accessToken);
    const [isOpen, setIsOpen] = useState(true)
    const [loading, setLoading] = useState(true)
    const [notifications, setNotifications] = useState([])

    const updateNotificationModelApiCall = async (e, id) => {
        e.preventDefault()
        try {

            const response = await updatenotification({ accessToken, id })
        } catch (error) {

        }
    }
    const countUnreadNotifications = (data) => {
        return data.filter(item => item.is_read === false).length;
      };
    const getNotification = async (id) => {
        try {
            setLoading(true)
            const response = await notification({ accessToken, id })
            setNotifications(response.data.data)
            console.log('response from notification =--------------------------', response);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }

    }
    useEffect(() => {
        if (props?.user) {
            getNotification(props?.user?.id)

            const intervalId = setInterval(() => {
                getNotification(props?.user?.id)
            }, 5000); 

          return () => clearInterval(intervalId);
        }
    }, [])

    const unreadCount = countUnreadNotifications(notifications);
    return (
        <>
            <div><BellIcon onClick={() => setIsOpen(!isOpen)} className='text_theme_color hover:text-[#db8b40]' /></div>
            <div className={`fixed inset-y-0 right-0 w-80 bg-white shadow-lg  h-[calc(100vh)]  z-50 transform transition-transform duration-1000 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <Loader />
                    </div>) : (<>
                        {notifications.map((notification) => (

                            <p key={notification?.id} onClick={(e) => updateNotificationModelApiCall(e, notification?.id)}>{notification.message}</p>
                        ))}
                    </>)}
            </div>

        </>
    )
}
