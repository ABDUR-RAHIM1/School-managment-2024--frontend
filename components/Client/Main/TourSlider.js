"use client"
import React, { useState } from 'react'
import { useLayoutEffect } from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { handleAllGetMethod } from '@/fetchApi/GetMethod/handleAllGetMethod';


export default function TourSlider() {

    const [data, setData] = useState([])

    useLayoutEffect(() => {
        const getAllData = async () => {
            const route = "/tourSlider/all"
            const result = await handleAllGetMethod(route)
            setData(result)
        }
        getAllData()
    }, [])


    return (
        <div className="slide-container w-full overflow-hidden">
            <Zoom scale={0.4}>
                {data.map((item) => (
                    <div className='relative' key={item._id}>
                        <img className='w-full h-[300px]' src={item.photo} />
                        <span className='  bg-green-600 text-white py-2 px-5 text-center absolute capitalize top-0 left-0'>
                            {item.placeName}
                        </span>
                    </div>
                ))}
            </Zoom>

        </div>
    )
}
