import React from 'react'
import CustomButton from './CustomButton'

export default function Header(props) {
    return (
        <div className='w-full flex justify-between items-center'>
            <h3 className="text-2xl  font-bold"> {props.heading} </h3>
            <CustomButton className="" onClick={() =>props.setIsOpen(true)}>
               {props.btnLabel}
            </CustomButton>
        </div>
    )
}


// call dummy code ==
{/* <Header heading='' setIsOpen={} btnLabel=''/> */}