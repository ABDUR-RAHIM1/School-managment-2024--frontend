"use client"
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import Avatar from "@/public/images/sd.png"
import { MdAccountBox, MdArrowDropDown, MdDarkMode, MdLightMode, MdLogout, MdMenu, MdSettings } from 'react-icons/md'
import { GlobalState } from '@/ContextApi/ContextApi'
import Link from 'next/link'

//  child of  teacher and student 
export default function ProfileNavbar(props) {
    const { authInfo } = useContext(GlobalState)
    const { handleShowSidebar } = props;
    const [show, setShow] = useState(false)
    const [darkMood, setDarkMood] = useState(false)


    const handleDarkMood = () => {
        setDarkMood(!darkMood)
        document.body.classList.toggle("dark");
    }


    const handleShowMenu = () => {
        setShow(!show)
    }

    //  log out 
    const handlLogOut = () => {
        // window.localStorage.removeItem("STUDENT_IS_LOGGED_IN")
        // router.push("/auth")
    }

    return (
        <div className='sticky top-0 flex items-center justify-between px-5 py-2 bg-gray-100 dark:bg-slate-950 text-black dark:text-white border-b duration-200'>
            <div className="logo  text-2xl font-medium flex items-center justify-between w-[200px]">
                My-Profile
                <span onClick={handleShowSidebar} className='text-3xl cursor-pointer'>
                    <MdMenu />
                </span>
            </div>
            <div>
                <a className=' underline font-medium italic' href="/">Visit Website</a>
            </div>
            <div className='flex items-center justify-center gap-2'>

                <div>
                    {/* <button className='py-2 px-3 bg-green-500 text-white rounded-md flex items-center gap-1'>
                        <span className='text-2xl'><FaFacebookMessenger /></span>  Message
                    </button> */}

                    <div onClick={handleDarkMood} className='text-3xl text-black dark:text-white cursor-pointer'>
                        {

                            darkMood ? <MdDarkMode />
                                :
                                <MdLightMode />
                        }

                    </div>

                </div>
                <div className='flex items-center gap-2 relative'>
                    <Image
                        src={authInfo.photo || Avatar}
                        width={500}
                        height={500}
                        alt='profile photo'
                        className='w-12 h-12 rounded-full m-auto'
                    />
                    <div onClick={handleShowMenu} className='flex items-center   cursor-pointer capitalize'>
                        <p>{authInfo.username}</p>
                        <span className={` text-3xl ${show ? " rotate-180" : " rotate-0"}`}>
                            <MdArrowDropDown />
                        </span>
                    </div>
                    <div className={` ${show ? " scale-y-1" : " scale-y-0"} origin-top duration-200 flex flex-col gap-3 w-[150px] absolute top-[55px] left-0 bg-slate-100 text-black p-2 z-[999]`}>

                        <Link className='flex items-center gap-1' href={"/profile"}>
                            <MdAccountBox className='text-2xl' />
                            <p>Account</p>
                        </Link>
                        <Link className='flex items-center gap-1' href={"/profile-settings"}>
                            <MdSettings className='text-2xl' />
                            <p>Settings</p>
                        </Link>
                        <button onClick={handlLogOut} className='flex items-center gap-1 text-red-600' >
                            <MdLogout className='text-2xl' />
                            <p>Log-out</p>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}
