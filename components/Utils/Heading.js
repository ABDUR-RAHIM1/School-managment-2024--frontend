import React from 'react'

export default function Heading({ text }) {
    return (
        <div className='text-3xl my-2 border border-gray-100 py-2 font-medium text-center capitalize'>
            {text}
        </div>
    )
}
