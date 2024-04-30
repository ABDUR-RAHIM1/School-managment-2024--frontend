"use client"
import { GlobalState } from '@/ContextApi/ContextApi';
import Loader from '@/components/Utils/Loader';
import PageHeader from '@/components/Utils/PageHeader';
import Image from 'next/image';
import React, { useContext, useLayoutEffect } from 'react'
import { MdDelete } from 'react-icons/md';

export default function ManageTour() {
  const { getAllDataFunc, data, reload, singleDeleteFunc } = useContext(GlobalState);

  useLayoutEffect(() => {
    const route = "/tourslider/all"
    getAllDataFunc(route)
  }, [reload])

 

  return (
    <div className='adminPage'>
      <PageHeader text={"Tour Gallary"} />


      <div className='flex items-center justify-between flex-wrap'>
        {
          data && data.map(gl => (
            <Slider key={gl._id}
              slider={gl}
              handleDeleteSilder={singleDeleteFunc}
            />
          ))
        }
      </div>

    </div>
  )
}


const Slider = (props) => {
  const { _id, placeName, photo } = props.slider;
  const { handleDeleteSilder } = props;

  const handleClick = (id) => {
    const deleteRoute = `/tourslider/delete/${id}`
    handleDeleteSilder(deleteRoute)
  }

  return (
    <div className='w-full md:w-[31%] h-[300px] border  my-3 relative'>
      <div className='py-1 px-2 bg-purple-600 bg-opacity-80 text-white absolute top-0 left-0'>
        <p className='text-sm'>{placeName}</p>
      </div>
      <Image
        src={photo}
        width={1000}
        height={1000}
        alt='tour slider photo'
        className='w-full h-full'

      />
      <div className='absolute bottom-0 right-0'>
        <span onClick={() => handleClick(_id)} className='deleteBtn'>
          <MdDelete />
        </span>
      </div>
    </div>
  )
}