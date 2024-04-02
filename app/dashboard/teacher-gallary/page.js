"use client"
import Loader from '@/components/Utils/Loader';
import ReloadButton from '@/components/Utils/ReloadButton'
import Gallary from '@/components/dashboard/Gallary';
import { handleAllGetMethod } from '@/fetchApi/GetMethod/handleAllGetMethod';
import React, { useLayoutEffect, useState } from 'react'

export default function TeacherGallary() {
  const [isLoading, setIsLoading] = useState(false);
  const [gallary, setGallary] = useState([]);

  useLayoutEffect(() => {
    setIsLoading(true)
    const getAllGallary = async () => {
      try {
        const route = "/gallary/all";
        const result = await handleAllGetMethod(route);
        console.log(result)
        if (result) {
          setGallary(result)
        }
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    };
    getAllGallary()
  }, []);


  if (isLoading) {
    return <Loader />
  }
  return (
    <div className='teacherGallary'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-medium items-start'>Teachers Gallary</h2>
        <ReloadButton />
      </div>

      <p className='my-4'>Showing {gallary.length} photos</p>



      <div>
        {
          gallary && gallary.map(gl => (
            <Gallary
              key={gl._id}
              gallary={gl}
            />
          ))
        }
      </div>

    </div>
  )
}
