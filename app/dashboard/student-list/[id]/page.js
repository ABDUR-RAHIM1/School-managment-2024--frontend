import { detailsHandler } from '@/fetchApi/detailsHandler/detailsHandler'
import Image from 'next/image';
import React from 'react'
import img from "@/public/images/sd.png";
import getDateInfo from '@/Helpers/Date';

//  child of student list compoent
export default async function StudentDetails({ params }) {
    const { id } = params
    const route = "/profile/all"
    const studentData = await detailsHandler(id, route);

    return (
        <div>
            <div className='w-full md:w-[60%] my-4 m-auto border'>
                <Image
                    src={studentData.photo ? studentData.photo : img}
                    width={200}
                    height={200}
                    className='w-full h-[400px] rounded-md'
                    alt='student details'
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
                        {Object.keys(studentData).map((key) => (
                            key !== 'photo' && key !== '_id' && key !== '__v' && (
                                <tr key={key}>
                                    <th>{key}</th>
                                    <td>
                                        {key === "dob" ? new Date(studentData[key]).toLocaleDateString('en-US') : studentData[key]}
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
