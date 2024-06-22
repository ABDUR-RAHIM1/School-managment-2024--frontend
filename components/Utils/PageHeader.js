import React from 'react'
import ReloadButton from './ReloadButton'

export default function PageHeader({ text }) {
    return (
        <div className='flex items-center justify-between my-3 font-medium capitalize border-b border-gray-100 dark:border-slate-800 pb-3'>
            <h2 className='text-2xl text-purple-600'>
                {text}
            </h2>
            <ReloadButton />
        </div>
    )
}
