 
import { detailsHandler } from '@/fetchApi/detailsHandler/detailsHandler'
import Image from 'next/image';
import React from 'react'
import img from "@/public/images/sd.png";

//  child of teacher list component
export default async function TeacherDetails({ params }) {
    const { id } = params
    const route = "/teachers/profile/all"
    const taecherData = await detailsHandler(id, route);
 
    return (
        <div>
            <div className='w-full md:w-[60%] my-4 m-auto border'>
                <Image
                    src={taecherData.photo || img}
                    width={200}
                    height={200}
                    className='w-full h-[400px] rounded-md'
                    alt='teacher details details'
                />
 
            </div>

            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>key</th>
                            <th>value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {taecherData && Object.keys(taecherData).map((key) => (
                            key !== 'photo' && key !== '_id' && key !== '__v' && (
                                <tr key={key}>
                                    <th>{key}</th>
                                    <td>
                                        {key === "dob" ? new Date(taecherData[key]).toLocaleDateString('en-US') : taecherData[key]}
                                    </td>
                                </tr>
                            )
                        ))}


                    </tbody>
                </table>
            </div>

        </div>
    )
}
