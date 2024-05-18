import React from 'react';

export default function Inputs(props) {
    const { type, name, value, placeholder, required = true, onChange } = props;
      
    return (
        <>
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                placeholder={placeholder}
                required={required}
                className='input'
                onChange={onChange}
            />
        </>
    );
}

