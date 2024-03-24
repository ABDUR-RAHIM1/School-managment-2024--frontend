"use client"
import Sidebar from '@/components/Sidebar'
import { useRouter } from 'next/navigation'
import React, { useLayoutEffect } from 'react'

export default function DashboardLayout({ children }) {
    const router = useRouter();

    useLayoutEffect(()=>{
         const isAdmin = localStorage.getItem("isAdmin");
         if (!isAdmin) {
            router.push("/admin-auth")
         }
    } , [])
    return (
        <div className='dashboard'>
            <div className="dashboardSidebar"> 
                <Sidebar/> 
            </div>
            <div className='dashboardMain'>
                {children}
                <div style={{height:"2000px"}}></div>
            </div>
        </div>
    )
}
