"use client"
import Image from 'next/image'

import avatar from "@/public/images/sd.png"
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { GlobalState } from '@/ContextApi/ContextApi'
import { usePathname } from 'next/navigation'
import studentSidebarItems from '@/Data/StudentSidebar'
import teacherSidebarItems from '@/Data/TeacherSidebar'

export default function ProfileSidebar() {

    const { getStudentAllDataWithToken, studentProfileData } = useContext(GlobalState)

    const [sidebarItems, setSidebarItems] = useState([])

    const { photo, username } = studentProfileData

    const path = usePathname();


    useEffect(() => {
        getStudentAllDataWithToken()

        if (path.startsWith("/student")) {
            setSidebarItems(studentSidebarItems)
        } else {
            setSidebarItems(teacherSidebarItems)
        }
    }, [])

    return (
        <div className='px-5'>
            <div className='flex items-center gap-3 my-10'>
                <Image
                    src={photo || avatar}
                    width={500}
                    height={500}
                    alt='profile photo'
                    className='w-12 h-12 rounded-full '
                />
                <p>{username}</p>
            </div>
            <hr />

            <div className='my-10'>
                {
                    sidebarItems && sidebarItems.map((item, i) => (
                        <div key={i} className=' flex items-center gap-2 w-full py-2 px-3 my-2  text-white'>
                            <span className='text-3xl'>
                                {item?.icon}
                            </span>
                            <Link className='text-[18px] uppercase font-medium' href={item.path}>
                                {item.item}
                            </Link>
                        </div>
                    ))
                }
            </div>


            <div style={{ height: "1000vh" }}></div>
        </div>
    )
}
