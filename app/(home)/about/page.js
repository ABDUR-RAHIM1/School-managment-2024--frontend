import { handleAllGetMethod } from '@/fetchApi/GetMethod/handleAllGetMethod'
import Image from 'next/image'
import React from 'react'
import { FaLocationArrow, FaSearchLocation } from 'react-icons/fa'
import { MdShareLocation } from 'react-icons/md'

export default async function AboutPage() {
  const about = await handleAllGetMethod("/about/all")

  return (
    <div className='page'>
      <div>
        {
          about && about.slice(-1).map(about => (
            <div key={about._id} >

              <Image
                src={about.photo}
                width={1000}
                height={1000}
                alt='about page '
                className='w-full h-[500px] rounded-md'
              />
              <h2 className='text-2xl italic font-medium my-5 text-center '>
                {about.title}
              </h2>
              <p className='text-sm whitespace-pre-line'>
                {about.content}
              </p>
            </div>
          ))
        }


        {/*  about contact with map */}
        <div className='my-5 flex items-center justify-between flex-wrap'>

          <div className=' w-full md:w-[38%]'>
            <h3 className='text-3xl italic my-3 flex items-start gap-2 text-blue-600'>
              <span><FaLocationArrow /></span>
              ঠিকানা
            </h3>
            <ul className='ml-0 md:ml-10'>
              <li>গ্রাম : দেওডোবা।  </li>
              <li>উপজেলা : আদিতমারী।  </li>
              <li>ডাকঘর : নামুড়ীরহাট।   </li>
              <li>জেলা : লালমনিরহাট , রংপুর।  </li>
            </ul>
          </div>
          <div className='w-full md:w-[60%] h-[500px] rounded-md border border-blue-500 p-2'>
            <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224.93730510437805!2d89.43547312760002!3d25.571770513379708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fd2b141f3ccb63%3A0x6b07a565877e323d!2sDeodoba%20Govt.%20Primary%20School!5e0!3m2!1sen!2sbd!4v1714446768386!5m2!1sen!2sbd" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        {/*  about contact with map */}



      </div>
    </div>
  )
}
