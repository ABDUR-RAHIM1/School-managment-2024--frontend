"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import teacherSidebarData from '@/Data/TeacherSidebar'
import React, { useContext, useEffect } from 'react'

export default function TeacherProfile() {
    
    const {setSidebarItems} = useContext(GlobalState)

    useEffect(() => {
        setSidebarItems(teacherSidebarData)
    }, [])
    return (
        <div>TeacherProfile</div>
    )
}
