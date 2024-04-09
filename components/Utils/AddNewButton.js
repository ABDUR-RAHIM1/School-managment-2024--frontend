"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import React, { useContext } from 'react'

export default function AddNewButton() {
    const { editValue, setEditValue } = useContext(GlobalState)
    const handleAddNewClick = () => {
        setEditValue({})
        console.log("click", editValue)
    }
    return (
        <>
            {
                Object.keys(editValue).length !== 0 ?
                    <h3 onClick={handleAddNewClick} className='text-sm font-medium border border-gray-200 cursor-pointer'>Add New</h3>
                    : null
            }
        </>
    )
}
