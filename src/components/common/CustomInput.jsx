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
        small: 'p-2 py-1 ',
        medium: 'p-2',
        large: 'p-2',
    };


    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            className={` ${sizeClasses[size]} input_field  ${className}`}
            {...rest} // Spread other props like name, id, etc.
        />
    );
}
