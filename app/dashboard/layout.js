import Sidebar from '@/components/Sidebar'
import React from 'react'

export default function DashboardLayout({ children }) {
    return (
        <div className='dashboard'>
            <div className="dashboardSidebar"> 
                <Sidebar/>
                <div style={{height:"1000px"}}>

                </div>
            </div>
            <div className='dashboardMain'>
                {children}
                <div style={{height:"2000px"}}></div>
            </div>
        </div>
    )
}
