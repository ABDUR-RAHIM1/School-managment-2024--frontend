"use client"
import Image from 'next/image'
import React from 'react'
import Avatar from "@/public/images/sd.png"
import { FaFacebookMessenger } from 'react-icons/fa'
import { MdMenu } from 'react-icons/md'

//  child of  teacher and student 
export default function ProfileNavbar(props) {
    const { handleShowSidebar } = props;

    return (
        <div className='sticky top-0 flex items-center justify-between px-5 py-2 bg-gray-100 '>
            <div className="logo flex items-center justify-between w-[200px]">
                school name
                <span onClick={handleShowSidebar} className='text-3xl'>
                    <MdMenu />
                </span>
            </div>
            <div>
                <input type="search" className='input' placeholder='Search' />
            </div>
            <div className='flex items-center justify-center gap-2'>

                <div>
                    <button className='py-2 px-3 bg-green-500 text-white rounded-md flex items-center gap-1'>
                        <span className='text-2xl'><FaFacebookMessenger /></span>  Message
                    </button>
                </div>
                <div className='flex items-center gap-2'>
                    <Image
                        src={Avatar}
                        width={500}
                        height={500}
                        alt='profile photo'
                        className='w-12 h-12 rounded-full m-auto'
                    />
                    <p>Name asadul islam</p>
                </div>
            </div>
        </div>
    )
}
