"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineNotification } from 'react-icons/ai'
import { FaBlog, FaBookOpen } from 'react-icons/fa'
import { GrGallery } from 'react-icons/gr'
import { HiAcademicCap } from 'react-icons/hi'
import { MdArrowDropDown, MdClose, MdHome, MdInfo, MdList, MdLogin, MdMenu, MdOutlineAddIcCall } from 'react-icons/md'

export default function Menu() {
    const [openMenu, setOpenMenu] = useState(true)

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }


    return (
        <div className='navbarWrapper'>
            <div className="logo">
                <span className='text-3xl text-blue-700'>
                    <FaBookOpen />
                </span>
            </div>
            <nav>
                <ul className={`menu transform origin-right duration-700 ${openMenu ? "scale-x-1" : "scale-x-0"}`}>
                    <li>
                        <Link href={"/"} className='navLink'>
                            <span><MdHome /></span>  হোম
                        </Link>
                    </li>
                    <li>
                        <Link href={"/blogs"} className='navLink'>
                            <span><FaBlog /></span>  ব্লগ সমূহ
                        </Link>
                    </li>

                    <li>
                        <div className='navLink'>
                            <span><MdInfo /></span>
                            ইনস্টিটিউট তথা
                            <span><MdArrowDropDown /></span>
                        </div>
                        <ul>
                            <li>
                                <Link href={"/about"} className='navLink'>
                                    আমাদের সম্পর্কে
                                </Link>
                            </li>
                            <li>
                                <Link href={"/committe-list"} className='navLink'>
                                    কমিটি
                                </Link>
                            </li>
                            <li>
                                <Link href={"/donar-list"} className='navLink'>
                                    ডোনার
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <div className='navLink'>
                            <span><MdList /></span>
                            তালিকা
                            <span><MdArrowDropDown /></span>
                        </div>
                        <ul>
                            <li>
                                <Link href={"/teacher-list"} className='navLink'>
                                    শিক্ষক
                                </Link>
                            </li>
                            <li>
                                <Link href={"/student-list"} className='navLink'>
                                    ছাত্রছাত্রী
                                </Link>
                            </li>

                            <li>
                                <Link href={"/staff-list"} className='navLink'>
                                    কর্মী
                                </Link>
                            </li>
                        </ul>
                    </li>


                    <li>
                        <div className='navLink'>
                            <span><HiAcademicCap /></span>
                            একাডেমিক তথা
                            <span><MdArrowDropDown /></span>
                        </div>
                        <ul>
                            <li>
                                <Link href={"/book-list"} className='navLink'>
                                    বইয়ের তালিকা
                                </Link>
                            </li>
                            <li>
                                <Link href={"/class-routine"} className='navLink'>
                                    ক্লাস রুটিন
                                </Link>
                            </li>
                            <li>
                                <Link href={"/exam-routine"} className='navLink'>
                                    পরীক্ষার রুটিন
                                </Link>
                            </li>
                        </ul>
                    </li>


                    <li>
                        <Link href={"/notice-board"} className='navLink'>
                            <span><AiOutlineNotification /></span>  নোটিশ বোর্ড
                        </Link>
                    </li>
                    <li>
                        <Link href={"/gallary-items"} className='navLink'>
                            <span><GrGallery /></span> গ্যালারি
                        </Link>
                    </li>
                    <li>
                        <Link href={"/contact-us"} className='navLink'>
                            <span><MdOutlineAddIcCall /></span> যোগাযোগ
                        </Link>
                    </li>

                    <li>
                        <div className='navLink'>
                            <span><MdLogin /></span>
                            লগইন
                            <span><MdArrowDropDown /></span>
                        </div>
                        <ul>
                            <li>
                                <Link
                                    href={{
                                        pathname: '/auth',
                                        query: { author: 'teacher' },
                                    }}
                                    className='navLink'>
                                    শিক্ষক
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={{
                                        pathname: '/auth',
                                        query: { author: 'student' },
                                    }}
                                    className='navLink'>
                                    শিক্ষার্থী
                                </Link>
                            </li>
                        </ul>
                    </li>

                </ul>


            </nav>
            {/* menu icon */}
            {
                openMenu ?
                    (
                        <div onClick={handleOpenMenu} className='text-4xl nav_menu_icon text-red-700 cursor-pointer'>
                            <MdClose />
                        </div>
                    )
                    : (
                        <div onClick={handleOpenMenu} className='text-4xl nav_menu_icon text-blue-700 cursor-pointer'>
                            <MdMenu />
                        </div>
                    )
            }
        </div>
    )
}
