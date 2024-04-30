"use client"
import { navbarItems } from '@/Data/NavbarItems'
import Link from 'next/link';
import React, { useState } from 'react'
import { MdArrowDropDown, MdMenu, MdOutlineSchool, MdSchool } from 'react-icons/md';

export default function Navbar() {
    const [activeIndex, setActiveIndex] = useState(null); // State to track  
    const [showMenu, setShowMenu] = useState(false)

    const handleItemClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleOpenMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className='sticky top-0 z-50 bg-white'>
            <div className='flex items-start justify-between py-4 px-5 border-b border-slate-200 relative'>
                <div className='text-6xl text-blue-700 md:hidden'>
                    <MdOutlineSchool />
                </div>
                <nav className='flex justify-between  w-full'>
                    {/* ${showMenu ? "w-0" : "w-[70%]"} */}
                    <ul className={`navUl ${showMenu ? "hidden" :"flex"} duration-500 navUl  items-start gap-5  font-medium  pb-4`}>
                        {navbarItems.map((item, index) => (
                            <div key={index} className='flex items-start gap-1'>
                                <span className='text-2xl '>
                                    {item.icon}
                                </span>
                                <li className='cursor-pointer'>
                                    <div className='flex items-center'>
                                <a href={item.link} onClick={() => handleItemClick(index)}>
                                    {item.item}
                                </a>
                                        {
                                            item.subItem && <span className='text-2xl'><MdArrowDropDown /></span>
                                        }
                                    </div>


                                    {item.subItem && activeIndex === index && (
                                        <ul className='my-2  '>
                                            {item.subItem.map((subItem, subIndex) => (
                                                <li className='my-2' key={subIndex}>
                                                    <a href={subItem.link}>{subItem.item}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            </div>
                        ))}
                    </ul>


                </nav>

                <div onClick={handleOpenMenu} className='text-4xl nav_menu_icon text-red-700 cursor-pointer'>
                    <MdMenu />
                </div>
            </div>
        </div>
    )
}
