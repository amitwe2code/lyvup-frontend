import React from 'react'
import CustomButton from './CustomButton'
import { Trash } from 'lucide-react'

export default function DeleteDialog(props) {
    const close = () => {
        props?.setIsOpen(false)
    }
    return (
        <div>
            {props?.isOpen && (
                <div className="fixed  inset-0 bg-black px-4 pt-16 pb-2  bg-opacity-50 flex items-center justify-center ">
                    <div className="bg_secondary_color p-3 flex flex-col items-center justify-center max-h-full overflow-auto rounded-lg shadow-xl w-full max-w-xl">
                        <h1 className='text-3xl my-2 font-extrabold capitalize text_theme_color'>{props.name}</h1>
                        <p className='my-2  text-base '>are you sure you want to delete data ?</p>
                        <div className='flex justify-center gap-4 mt-4 mb-2 items-center'>
                            <CustomButton variant='none' className='btn_cancle' onClick={() => { close() }}>Cancle</CustomButton>
                            <CustomButton
                                variant='none'
                                className='bg-red-700 text-white hover:bg-red-900'
                                onClick={() => { props.handleDelete() }}
                            >
                                {props?.loading ?
                                    <span
                                        className="spinner-border spinner-border-sm "
                                        role="status"
                                        aria-hidden="true"
                                    ></span> : <>
                                        Delete</>
                                }
                            </CustomButton>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
