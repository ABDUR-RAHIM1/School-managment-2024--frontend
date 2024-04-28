import { handleAllGetMethod } from '@/fetchApi/GetMethod/handleAllGetMethod'
import React from 'react'
import { FcSpeaker } from 'react-icons/fc'

export default async function Headline() {
    const headline = await handleAllGetMethod("/headline/all")

    return (
        <div className='r relative py-2  border-b border-gray-200 bg-blue-100'>
            <div className='absolute top-0 left-0  h-full bg-red-600 text-white flex items-center justify-center px-5 z-50'>
                <h5 className='text-2xl font-medium'>Notice</h5>
            </div>

            <div>
                <marquee >
                    <ul className='flex items-center justify-center gap-10'>
                        {
                            headline.map(hd => (
                                <li key={hd._id} className='flex items-center list-disc'>
                                    <div className='font-medium mr-2 flex items-center gap-2 '>
                                        <span className='text-2xl'><FcSpeaker /></span>
                                        <p className='bg-blue-600 text-white py-1 px-2 rounded-md'> {hd.title}</p>
                                    </div>
                                    <p className=' text-2xl capitalize'>{hd.text} .</p>
                                </li>
                            ))
                        }
                    </ul>
                </marquee>
            </div>
        </div>
    )
}
