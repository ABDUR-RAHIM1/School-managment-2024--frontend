import { GlobalState } from '@/ContextApi/ContextApi';
import React, { useContext } from 'react';

export default function Inputs(props) {
    const { imgLoading } = useContext(GlobalState)
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
                className={`input ${imgLoading ? "border border-red-500" : ""}`}
                onChange={onChange}
            />
        </>
    );
}

