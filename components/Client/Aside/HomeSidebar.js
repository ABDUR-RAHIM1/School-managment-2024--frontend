import React from 'react'
import addImg from "@/public/images/add.png"
import dummyImg from "@/public/images/sd.png"
import Image from 'next/image'
import { handleAllGetMethod } from '@/fetchApi/GetMethod/handleAllGetMethod'
import Title from '@/components/Utils/Title';
import { quickLinks } from '@/Data/QuickLinks'
import { MdArrowRight } from 'react-icons/md'
import nationalHelpLine from "@/public/images/national-Helpline.jpg"
// import Songeet from "@/public/media/national_song.mp3"


// home sidebar
export default async function Sidebar() {
  const teacherProfile = await handleAllGetMethod("/teachers/profile/all");
  const committe = await handleAllGetMethod("/comitee/all");

  const principle = await teacherProfile.find(p => p.position === "principle");
  const president = await committe.find(p => p.position === "President");


  return (
    <div>

      <div className='sidebarCard h-[300px]'>
        <Image
          src={addImg}
          width={500}
          height={500}
          alt='add image'
          className='w-full h-full'
        />
      </div>

      {/*  principle card */}

      <div className='sidebarCard'>
        <Title text="প্রধান শিক্ষক" />
        <Image
          src={principle.photo}
          width={500}
          height={500}
          alt='add image'
          className='w-full h-[300px] mt-2'
        />
        <span className='sidebarFooter'>
          {principle.name}
        </span>
      </div>

      {/* president card */}
      <div className='sidebarCard'>
        <Title text="স্কুল সভাপতি" />
        <Image
          src={president.photo || dummyImg}
          width={500}
          height={500}
          alt='add image'
          className='w-full h-[300px] mt-2'
        />
        <span className='sidebarFooter'>
          {president.name}
        </span>
      </div>

      {/*  important links */}
      <div className='sidebarCard'>
        <Title text="গুরুর্তপূর্ন লিঙ্ক সমূহ" />
        <div className='my-3 max-h-[200px] overflow-auto'>
          {
            quickLinks.map((item, index) => (
              <a key={index}
                href={item.link}
                className='my-2 underline text-blue-600 text-sm block '
              >
                <div className='flex items-center gap-1 w-full'>
                  <span className='text-sm'>
                    <MdArrowRight />
                  </span>
                  {item.title}
                </div>
              </a>
            ))
          }
        </div>
      </div>


      {/* national songeet card */}
      <div className='sidebarCard'>
        <Title text="জাতীয় সংগীত" />

        <div className='my-5'>
          <audio src="" controls></audio>
        </div>
      </div>


      {/* national helpline card */}
      <div className='sidebarCard'>
        <Title text="জরুরী সেবা" />
        <Image
          src={nationalHelpLine}
          width={500}
          height={500}
          alt='add image'
          className='w-full h-[450px] mt-4'
        />
      </div>

      {/* video  card */}
      <div className='sidebarCard'>
        <Title text="ভিডিও" />
        <div className='my-2'>
          <video className='w-full h-[150px]' src="" controls></video>
        </div>
      </div>



    </div>
  )
}
