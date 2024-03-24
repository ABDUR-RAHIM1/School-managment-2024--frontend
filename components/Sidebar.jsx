"use client"
import { sidebarItems } from '@/Data/SidebarItems'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";

export default function Sidebar() {
    const path = usePathname()
    const [activeItem, setActiveItem] = useState(null)

    const handleItemClick = (index) => {
        setActiveItem(activeItem === index ? null : index)
        console.log(index)
    }

    return (
        <ul className='px-5 py-10'>
            {sidebarItems.map((item, index) => (
                <li className={`sidebarItem ${activeItem === index ? "text-purple-500":""}`} key={index} onClick={() => handleItemClick(index)}>
                    <p className='flex items-center justify-between'>
                        <span className='flex items-center gap-2'>
                            <span className='text-2xl'>{item.icon}</span>  {item.item}</span>   <span><IoIosArrowForward /></span>
                    </p>
                    {/*  sub menu */}
                    <ul className={`ml-5 ${activeItem === index ? "block" : "hidden"}`}>
                        {item.subItems && item.subItems.map((subItem, subIndex) => (
                            <li className={`sidebarSubItem ${path===subItem.link ?"bg-purple-200 text-purple-700 border-r-2 border-purple-700" : ""}`} key={subIndex}>
                                <Link href={subItem.link}>{subItem.item}</Link>
                            </li>
                        ))}
                    </ul>

                </li>
            ))}
        </ul>
    )
}



{/* <ul className='px-5 py-10'>
{
    items.map((item, i) => (
        <li className={`sidebarItem ${path === item.link ? " bg-purple-100 text-purple-500" : ""}`} key={i}>
            <span className='text-2xl'>{item.icon}</span>
            <Link href={item.link}>{item.item}</Link>

        </li>
    ))
}

</ul> */}