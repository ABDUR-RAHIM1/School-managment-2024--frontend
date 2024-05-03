import Title from '@/components/Utils/Title'
import { handleAllGetMethod } from '@/fetchApi/GetMethod/handleAllGetMethod'
import Image from 'next/image';
import React from 'react'

export default async function GallaryItems() {
    const gallary = await handleAllGetMethod("/gallary/all");



    return (
        <div className='py-3'>
            <Title text={"Gallary's"} />

            <div className='flex items-center justify-between flex-wrap my-5' >
                {
                    gallary && gallary.slice().reverse().map((gl, i) => (
                        <Gallary key={gl._id} gallary={gl} index={i} />
                    ))
                }
            </div>
        </div>
    )
}


const Gallary = (props) => {
    const { photo, author, title, createdAt } = props.gallary;

    
    const height = props.index % 2 === 0 ? "h-[450px]" : "h-[650px]";


    return (
        <div className='w-full my-5 md:w-[48%]'>
            <div className='relative'>
                <Image
                    src={photo}
                    width={1000}
                    height={1000}
                    alt='gallary photo'
                    className={` ${height} rounded-md w-full`}
                />
                <small className=' py-2 px-3 bg-blue-200 absolute top-0 left-0'>Author : {author}</small>
            </div>
            <div className='flex items-center justify-between w-full p-2 bg-blue-400 text-white'>
                <p  >{title}</p>
                <p  >{new Date(createdAt).toLocaleDateString("en-US")}</p>
            </div>
        </div>
    )
}