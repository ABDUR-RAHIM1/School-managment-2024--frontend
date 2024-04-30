"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import PageHeader from '@/components/Utils/PageHeader';
import Image from 'next/image';
import React, { useContext, useLayoutEffect } from 'react'
import { MdDelete } from 'react-icons/md';

export default function ManageSliderMain() {
  const { getAllDataFunc, data, reload, singleDeleteFunc } = useContext(GlobalState);

  useLayoutEffect(() => {
    const route = "/slider/all"
    getAllDataFunc(route)
  }, [reload])




  return (
    <div className='adminPage'>
      <PageHeader text="Slider Gallary" />


      <div className='flex items-center justify-between flex-wrap'>
        {
          data && data.map(sl => (
            <Slider key={sl._id}
              slider={sl}
              handleDeleteSlider={singleDeleteFunc}
            />
          ))
        }
      </div>
    </div>
  )
}



const Slider = (props) => {
  const { _id, photo } = props.slider;

  const { handleDeleteSlider } = props

  const handleClick = (id) => {
    const deleteRoute = `/slider/delete/${id}`
    handleDeleteSlider(deleteRoute)
  }


  return (
    <div className=' relative w-full md:w-[31%] h-[300px] my-3 border'>
      <Image
        src={photo}
        width={1000}
        height={1000}
        alt='slider gallary'
        className='w-full h-full rounded-md'
      />

      <div className='a absolute bottom-0 right-0'>
        <span onClick={() => handleClick(_id)} className='deleteBtn'>
          <MdDelete />
        </span>
      </div>
    </div>
  )
}