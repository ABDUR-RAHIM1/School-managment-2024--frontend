"use client"
import Sidebar from '@/components/Sidebar'
import { useRouter } from 'next/navigation'
import React, { useLayoutEffect } from 'react'
import { IoMdMenu, IoIosSearch } from "react-icons/io";

export default function DashboardLayout({ children }) {
    const router = useRouter();

    useLayoutEffect(() => {
        const isAdmin = localStorage.getItem("isAdmin");
        if (!isAdmin) {
            router.push("/admin-auth")
        }
    }, [])
    return (
        <>
            <div className="dashboardHeader">
                <div className="logo">
                    <h4 className='text-xl font-medium capitalize'>School managment</h4>
                    <span className='text-4xl cursor-pointer'><IoMdMenu /> </span>
                </div>
                <div className="w-[350px] relative">
                    <input type="text" className='w-full py-3 px-3 pl-10 focus:outline-none border border-gray-100 bg-white rounded-sm' placeholder='search here' />
                    <span className='text-3xl absolute top-3 left-2'> <IoIosSearch /> </span>

                </div>
            </div>
            <div className='dashboard'>

                <div className="dashboardSidebar">
                    <Sidebar />
                </div>
                <div className='dashboardMain'>
                    {children}

                </div>
            </div>

        </>
    )
}
