"use client"
import { handleAllGetMethod } from '@/fetchApi/GetMethod/handleAllGetMethod';
import {   useLayoutEffect, useState } from 'react';
import { Fade, Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

export default function MainSlider() {

  const [data, setData] = useState([])

  useLayoutEffect(() => {
    const getAllData = async () => {
      const route = "/slider/all"
      const result = await handleAllGetMethod(route)
      setData(result)
    }
    getAllData()
  }, [])
 

  return (
    <div className="slide-container w-full overflow-hidden">
      <Fade>
        {data.map((item) => (
          <div  key={item._id}>
            <img className='w-full h-[350px]' src={item.photo} />
          
          </div>
        ))}
      </Fade>
    </div>
  )
}
