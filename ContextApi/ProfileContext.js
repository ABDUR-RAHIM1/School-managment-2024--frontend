"use client";
import React, { createContext, useState } from 'react'

export const ProfileContext = createContext()

export default function ProfileContextWrapper({ children }) {

    const [count, setCount] = useState(0)


    const value = {
        count, setCount,
    }

    return (
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    )
}
