"use client"
import { sidebarItems } from '@/Data/SidebarItems'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { toast } from 'react-toastify'

export default function Sidebar() {
    const router = useRouter()
    const path = usePathname()
    const [activeItem, setActiveItem] = useState(null)

    const handleItemClick = (index) => {
        if (activeItem === index) {
            return;
        }
        setActiveItem(index);
    }

    const handleSubItemClick = () => {
        event.stopPropagation()  
    }

    const handleLogOut = () => {
        localStorage.removeItem("isAdmin")
        toast.success("Logged out")
        setTimeout(() => {
            router.push("/admin-auth")
        }, 1000);
    }

    return (
        <ul className='px-5 py-10'>
            {sidebarItems.map((item, index) => (
                <li className={`sidebarItem ${activeItem === index ? "text-purple-500" : ""}`} key={index} onClick={() => handleItemClick(index)}>
                    <p className='flex items-center justify-between'>
                        <span className='flex items-center gap-2'>
                            <span className='text-2xl'>{item.icon}</span>  {item.item}</span>   <span><IoIosArrowForward /></span>
                    </p>
                    {/*  sub menu */}
                    <ul className={`ml-5 ${activeItem === index ? "block" : "hidden"}`}>
                        {item.subItems && item.subItems.map((subItem, subIndex) => (
                            <li onClick={handleSubItemClick} className={`sidebarSubItem ${path === subItem.link ? "bg-purple-200 text-purple-700 border-r-2 border-purple-700" : ""}`} key={subIndex}>
                                <Link  href={subItem.link}>
                                    {subItem.item}
                                </Link>
                            </li>
                        ))}
                    </ul>

                </li>
            ))}
            <li onClick={handleLogOut} className='sidebarItem'>
                <p className='flex items-center justify-between text-red-500'>
                    <span className='flex items-center gap-2'>
                        <span className='text-2xl'> <IoMdLogOut /> </span> log out</span>
                </p>
            </li>
        </ul>
    )
}
