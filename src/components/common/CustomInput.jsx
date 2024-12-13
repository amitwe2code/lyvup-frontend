/* eslint-disable react/prop-types */
import React from 'react';




export default function CustomInput({
    value,
    onChange,
    placeholder,
    type = 'text',
    size = 'medium',
    className = '',
    disabled = false,
    ...rest
}) {
    const sizeClasses = {
        small: 'px-2 py-1 ',
        medium: 'px-4 py-2',
        large: 'px-10 py-2',
    };


    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            className={`custom-input ${sizeClasses[size]}  m-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
            {...rest} // Spread other props like name, id, etc.
        />
    );
}
