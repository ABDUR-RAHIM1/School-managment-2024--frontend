import Title from '@/components/Utils/Title'
import Link from 'next/link'
import React from 'react'
import { MdBook, MdClass, MdRocket } from 'react-icons/md'

export default function AcademicInfo() {


    const data = [
        {
            title: "বইয়ের তালিকা",
            link: "/book-list",
            icon: <MdBook />
        },
        {
            title: "ক্লাস রুটিন ",
            link: "/class-routine",
            icon: <MdClass />
        },
        {
            title: "পরীক্ষার রুটিন",
            link: "/exam-routine",
            icon: <MdRocket />
        },

    ]

    return (
        <div className='card'>
            <Title text={"একাডেমিক তথ্য"} />

            <div className='flex justify-between flex-wrap'>
                {
                    data.map((item, i) => (
                        <Link href={item.link} key={i} className=' w-full my-2 md:w-[32%] py-5 flex items-center justify-center flex-col rounded-md border hover:shadow-md bg-slate-200'>
                            <h3 className='text-2xl font-bold my-2'>{item.title}</h3>
                            <span className='text-5xl'>{item.icon}</span>
                        </Link>
                    ))
                }
            </div>

        </div>
    )
}
