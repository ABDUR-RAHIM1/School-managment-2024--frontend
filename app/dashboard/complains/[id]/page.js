'use client'
import getDateInfo from '@/Helpers/Date';
import { detailsHandler } from '@/fetchApi/detailsHandler/detailsHandler';
import Image from 'next/image';
import img from "@/public/images/sd.png"

export default async function ComplaineDetails({ params }) {
    const { id } = params;
    const route = "/complain/all"
    const data = await detailsHandler(id, route);

    const { studentName, studentEmail, subject, details, isCheck, createdAt } = data
    return (
        <div className='text-gray-600'>
            <div className='w-[70%] my-5 m-auto border'>
                <Image
                    src={img}
                    className='w-full'
                    alt='complaine Details '
                />
            </div>
            <div className='lowecase my-3'>
                <h6>Name : {studentName}</h6>
                <h6>Email : {studentEmail}</h6>
            </div>
            <p>Date : {getDateInfo(createdAt).day + "/" + getDateInfo(createdAt).month + "/" + getDateInfo(createdAt).year}</p>
            <p> status : {isCheck} </p>

            <div className='my-3 capitalize'>
                <h3 className='text-2xl font-medium'>Subject : {subject} </h3>
                <p className='mt-5'> Details : {details}</p>
            </div>

        </div>
    )
}
