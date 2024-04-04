
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FcApproval, FcDisapprove } from 'react-icons/fc'
import { MdDelete } from 'react-icons/md'

export default function Gallary(props) {
    const { _id, author, title, photo } = props.gallary
    const { margin, handleGallaryDelete } = props



    return (
        <div className={`${margin} rounded-md w-[24%] bg-white shadow-md border border-gray-100`}>
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
                    <Link href={`/dashboard/profile/${_id}`} title='See profile' className='capitalize underline cursor-pointer font-medium'>{author}</Link>

                    <div>
                        <span className='iconBtn bg-red-600'>
                            <FcDisapprove />
                        </span>
                        <span title='Approve' onClick={() => handleGallaryDelete(_id)} className='iconBtn bg-blue-600'>
                            <FcApproval />
                        </span>

                    </div>
                </div>
            </div>
        </div>
    )
}
