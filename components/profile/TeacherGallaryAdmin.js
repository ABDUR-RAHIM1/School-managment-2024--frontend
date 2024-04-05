
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function TeacherGallaryAdmin(props) {
    const { status, title, photo, createdAt } = props.gallary


    return (
        <div className={` my-10 rounded-md w-[48%] md:w-[24%] bg-white shadow-md border border-gray-100`}>
            <Image
                src={photo}
                blurDataURL={photo}
                width={1000}
                height={50}
                alt='gallary'
            />
            <div className='px-1.5'>
                <h5 className='font-medium my-1 capitalize'>{title}</h5>
                <div className='flex items-center justify-between my-3'>

                    <span className={` ${status ==="accept" ? "border-blue-600 text-blue-700" : "border-red-600 text-red-700"} border text-sm rounded-md capitalize px-3 py-2`}>
                        {status}
                    </span>

                    <p>{
                        new Date(createdAt).toLocaleDateString("en-US")
                    }</p>

                </div>
            </div>
        </div>
    )
}
