import React from 'react'

export default function Empty({ text }) {
    return (
        <div className='text-red-500 font-medium text-2xl italic my-10'>
            {text} !
        </div>
    )
}
