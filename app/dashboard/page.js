"use client"
import { GlobalState } from '@/ContextApi/ContextApi';
import { UploadFIle } from '@/Helpers/UploadFile';
import Image from 'next/image';
import dummyImg from "@/public/images/sd.png"
import React, { useContext, useState } from 'react'

export default function DashboardHome() {
  const [imageUrl, setImageUrl] = useState('')
  const { imgLoading } = useContext(GlobalState)

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const result = await UploadFIle(file)
    setImageUrl(result)
  }

  console.log(imageUrl, imgLoading)
  return (
    <div className='w-[60%] m-auto'>
      <form action="">
        <input onChange={handleFileChange} type="file" />
        <br />
        <button className='formBtn'>Upload file</button>
      </form>

      


    </div>
  )
}
