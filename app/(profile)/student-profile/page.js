"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import studentSidebarItems from '@/Data/StudentSidebar'
import { getProfileDataWithToken } from '@/fetchApi/GetMethod/getDataWithToken'
import React, { useContext, useEffect } from 'react'

export default function StudentProfilePage() {

    const { setSidebarItems, profileData, setProfileData } = useContext(GlobalState)

    useEffect(() => {
        setSidebarItems(studentSidebarItems)
        const route = "/student/auth/user"
        const token = JSON.parse(window.localStorage.getItem("STUDENT_IS_LOGGED_IN"))
        const getData = async () => {
            const data = await getProfileDataWithToken(route, token)
            setProfileData(data)
        }
        getData()
    }, [])

    console.log(profileData)
    return (
        <div>
            Student profile
        </div>
    )
}
