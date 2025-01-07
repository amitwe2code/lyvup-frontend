/* eslint-disable react/prop-types */
import React from 'react';

export default function CustomButton({
    onClick,
    children,
    type = 'button',
    className = '',
    disabled = false,
    id = '',
    size = 'medium',
    variant = 'primary'
}) {

    const sizeClasses = {
        small: 'px-2 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-8 py-2 text-lg ',
    };


    const variantClasses = {
        primary: 'bg-[#17686d] text-white ',
        outline: 'border border-[#17686d] text-[#17686d] hover:bg-[#17686d] hover:text-white',
    };

    return (
        <button
            className={`${sizeClasses[size]} ${variantClasses[variant]} rounded-md font-semibold transition-all duration-300 ease-in-out  ${className}`}
            onClick={onClick}
            id={id}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    );
}



export function Heading({ heading }) {

    return (
        <h1 className='text-3xl text-bold p-1 text-green-400 '>{heading}</h1>
    )
}