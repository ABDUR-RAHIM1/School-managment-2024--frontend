"use client"
import { GlobalState } from '@/ContextApi/ContextApi' 
import React, { useContext, useEffect } from 'react'

export default function StudentProfilePage() {

    const {  getStudentAllDataWithToken } = useContext(GlobalState)

    useEffect(() => {
       
        getStudentAllDataWithToken()
    }, [])

    
    return (
        <div>
            Student profile
        </div>
    )
}
