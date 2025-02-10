import React, { useEffect, useState } from 'react'
import { notification, updatenotification } from '../../../api/api'
import { useSelector } from 'react-redux';
import { BellIcon, Check, LoaderCircleIcon, SidebarClose } from 'lucide-react';
import Loader from '../Loader';

export default function Notification(props) {
    const accessToken = useSelector((state) => state.token.accessToken);
    const [isOpen, setIsOpen] = useState(false)
    const [loading, setLoading] = useState(false)
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
            // setLoading(true)
            const response = await notification({ accessToken, id })
            setNotifications(response.data.data)
            console.log('response from notification =--------------------------', response);
        } catch (error) {
            console.log(error);
        }
        //  finally {
        //     setLoading(false)
        // }

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
            <div><button onClick={() => setIsOpen(!isOpen)} className='text_theme_color flex items-center position-relative hover:text-[#db8b40]'>
                <span class="position-absolute -top-2 left-8 start-100 text-white translate-middle badge rounded-pill bg-danger">
                    {unreadCount > 0 && unreadCount}
                </span>
                <BellIcon />
            </button></div>
            <div className={`fixed inset-y-0 right-0 w-1/2 sm:w-1/3 md:w-1/4 bg_secondary_color shadow-lg  h-[calc(100vh)]  z-50 transform transition-transform duration-1000 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <Loader />
                    </div>) : (<>
                        <div className='p-3 '>
                            <div className='flex justify-between items-center mb-6'>
                                <h1 className='text-xl sm:text-2xl font-bold text_theme_color'>Notification</h1>
                                <button className='font-bold text-[#aa3838]' onClick={() => setIsOpen(false)}> <SidebarClose /></button>
                            </div>
                            {notifications.map((notification) => (

                                <div
                                    key={notification.id}
                                    className={`p-4 rounded-lg border shadow-sm hover:shadow-md transition-shadow
                              ${notification.is_read ? 'bg-gray-50' : 'bg-white border-l-4 border-l-[#015a45]'}`}
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-1 flex-1">
                                            <p className="text-sm font-medium text-gray-800">
                                                {notification.message}
                                            </p>
                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                {/* <span>From: {notification.from}</span> */}
                                                <span>•</span>
                                                {/* <span>{notification.time}</span> */}
                                            </div>
                                        </div>
                                        <button
                                            className="ml-2 p-1 hover:bg-gray-100 rounded-full"
                                            aria-label="Mark as read"
                                        >
                                            {/* ${notification.is_read ? */}
                                            <Check className="w-4 h-4 text-[#015a45]" />
                                        </button>
                                    </div> 
                                </div>
                            ))}
                        </div>
                    </>)}
            </div>

        </>
    )
}
