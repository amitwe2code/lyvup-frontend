/* eslint-disable react/prop-types */
import React from 'react';

export default function CustomButton({
    onClick,
    children,
    type = 'button',
    className = '',
    disabled = false,
    size = 'medium',
    variant = 'primary'
}) {

    const sizeClasses = {
        small: 'px-2 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-8 py-2 text-lg ',
    };


    const variantClasses = {
        primary: 'bg-blue-500 text-white hover:bg-blue-700',
        secondary: 'bg-gray-500 text-white hover:bg-gray-700',
        danger: 'bg-red-500 text-white hover:bg-red-700',
        outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
    };

    return (
        <button
            className={`${sizeClasses[size]} ${variantClasses[variant]} rounded-md font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
            onClick={onClick}
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