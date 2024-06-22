"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import React, { useContext } from 'react'

export default function Heading({ text }) {
    const { editValue } = useContext(GlobalState)
    return (
        <div className={` ${editValue} text-2xl my-2 border border-gray-100 dark:border-slate-800 py-2 font-medium text-center uppercase`}>
            {text}
        </div>
    )
}
