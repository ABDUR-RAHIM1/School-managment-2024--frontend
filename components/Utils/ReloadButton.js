import { GlobalState } from '@/ContextApi/ContextApi'
import React, { useContext } from 'react'
import { IoReload } from 'react-icons/io5'

export default function ReloadButton() {
    const { reload, setReload } = useContext(GlobalState)
    const handleReload = () => {
        setReload(!reload)
    }
    return (
        <div onClick={handleReload} className="text-3xl cursor-pointer bg-blue-100 py-2 px-2 inline-block text-blue-800 rounded-full"> <IoReload /></div>
    )
}
