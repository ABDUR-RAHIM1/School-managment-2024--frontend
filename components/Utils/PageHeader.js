import React from 'react'
import ReloadButton from './ReloadButton'

export default function PageHeader({ text }) {
    return (
        <div className='flex items-center justify-between my-3 font-medium capitalize border-b pb-3'>
            <h2 className='text-2xl'>
                {text}
            </h2>
            <ReloadButton />
        </div>
    )
}