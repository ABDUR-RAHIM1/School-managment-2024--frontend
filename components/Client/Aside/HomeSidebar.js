import React from 'react'
import addImg from "@/public/images/add.png"
import dummyImg from "@/public/images/sd.png"
import Image from 'next/image'
import { handleAllGetMethod } from '@/fetchApi/GetMethod/handleAllGetMethod'
import Title from '@/components/Utils/Title';
// home sidebar
export default async function Sidebar() {
  const teacherProfile = await handleAllGetMethod("/teachers/profile/all");
  const committe = await handleAllGetMethod("/comitee/all");

  const principle = await teacherProfile.find(p => p.position === "principle");
  const president = await committe.find(p => p.position === "President");
 

  return (
    <div>

      <div className='sidebarCard h-[340px]'>
        <Image
          src={addImg}
          width={500}
          height={500}
          alt='add image'
          className='w-full h-full'
        />
      </div>

      <div className='sidebarCard'>
        <Title text="প্রধান শিক্ষক" />
        <Image
          src={principle.photo}
          width={500}
          height={500}
          alt='add image'
          className='w-full h-[340px] mt-2'
        />
        <span className='sidebarFooter'>
          {principle.name}
        </span>
      </div>

      <div className='sidebarCard'>
        <Title text="স্কুল সভাপতি" />
        <Image
          src={president.photo || dummyImg}
          width={500}
          height={500}
          alt='add image'
          className='w-full h-[340px] mt-2'
        />
        <span className='sidebarFooter'>
          {president.name}
        </span>
      </div>

    </div>
  )
}
