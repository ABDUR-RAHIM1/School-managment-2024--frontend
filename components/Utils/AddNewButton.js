"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import React, { useContext } from 'react'

export default function AddNewButton() {
    const { editValue, setEditValue } = useContext(GlobalState)
    const handleAddNewClick = () => {
        setEditValue({})

    }
    return (
        <div className='text-center'>
            {
                Object.keys(editValue).length !== 0 ?
                    <p onClick={handleAddNewClick} className='text-sm inline-block font-medium border border-gray-200 cursor-pointer p-1'>Add New</p>
                    : null
            }
        </div>
    )
}
