"use client"
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import Avatar from "@/public/images/sd.png"
import { FaFacebookMessenger } from 'react-icons/fa'
import { MdArrowDropDown, MdMenu } from 'react-icons/md'
import { GlobalState } from '@/ContextApi/ContextApi'
import Link from 'next/link'

//  child of  teacher and student 
export default function ProfileNavbar(props) {
    const { handleShowSidebar } = props;
    const [show, setShow] = useState(false)
    const { profileData } = useContext(GlobalState)

    const { photo, username } = profileData;

    const handleShowMenu = () => {
        setShow(!show)
    }

    return (
        <div className='sticky top-0 flex items-center justify-between px-5 py-2 bg-gray-100 '>
            <div className="logo flex items-center justify-between w-[200px]">
                school name
                <span onClick={handleShowSidebar} className='text-3xl'>
                    <MdMenu />
                </span>
            </div>
            <div>
                <a className=' underline font-medium italic' href="/">Visit Website</a>
            </div>
            <div className='flex items-center justify-center gap-2'>

                <div>
                    <button className='py-2 px-3 bg-green-500 text-white rounded-md flex items-center gap-1'>
                        <span className='text-2xl'><FaFacebookMessenger /></span>  Message
                    </button>
                </div>
                <div className='flex items-center gap-2 relative'>
                    <Image
                        src={photo || Avatar}
                        width={500}
                        height={500}
                        alt='profile photo'
                        className='w-12 h-12 rounded-full m-auto'
                    />
                    <div onClick={handleShowMenu} className='flex items-center   cursor-pointer capitalize'>
                        <p>{username}</p>
                        <span className={` text-3xl ${show ? " rotate-180" : " rotate-0"}`}>
                            <MdArrowDropDown />
                        </span>
                    </div>
                    <div className={` ${show ? " scale-y-1" : " scale-y-0"} origin-top duration-200 flex flex-col gap-3 w-[150px] absolute top-[55px] left-0 bg-slate-100 p-2 z-[999]`}>

                        <Link href={"/profile-edit"}>Account</Link>
                        <Link href={"/student-profile"}>Settings</Link>
                        <Link href={"/student-profile"}>Log-out</Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
