import { handleGetProfile } from '@/fetchApi/getProifle/handleGetProfile';
import React from 'react'
import dummyImg from "@/public/images/sd.png"
import Image from 'next/image';
import StudentProfileAdmin from '@/components/profile/StudentProfileAdmin';
import StudentComplainAdmin from '@/components/profile/StudentComplainAdmin';
import StudentResultsAdmin from '@/components/profile/StudentResultsAdmin';
import StudentFeeAdmin from '@/components/profile/StudentFeeAdmin';

//  for admin find by id
export default async function StudentProfile({ params }) {
    const { id } = params
    const route = `/student/auth/${id}/profile`
    const profile = await handleGetProfile(route, id);
  
    let totalAmount = 0
    profile.fee.forEach(element => {
        totalAmount = totalAmount + Number(element.feeAmount)
    });

    return (
        <div className='adminPage'>

            <div className="profileCard">
                <div className='w-[100px] m-auto h-[100px] rounded-full overflow-hidden'>
                    <Image
                        src={profile.photo || dummyImg}
                        width={1000}
                        height={1000}
                        className='w-full h-full'
                        alt='teachers profile'
                    />

                </div>
                <div className=' my-2 text-center capitalize border-b border-gray-200'>
                    <h5 className='text-xl my-1 '>{profile.username}</h5>
                    <p className=' text-sm'>{profile.role}</p>
                    <button className={` ${profile.status === "active" ? " border-blue-500 text-blue-700" : " border-red-500 text-red-700"} iconBtn border capitalize text-sm my-3`}>
                        {profile.status}
                    </button>
                </div>

                <div className='px-2 my-4'>

                    <p> Profile - {profile.profile.length}</p>
                    <p> Todos - {profile.todos.length}</p>
                    <p> Complains - {profile.complains.length}</p>
                    <p> Results - {profile.results.length}</p>
                    <p> Total Fee's (paid) - {totalAmount}</p>

                </div>

                <div className='px-2 leading-7'>
                    <h2 className='font-medium capitalize'>Bio</h2>
                    <p className='text-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis facilis illo delectus ad id omnis incidunt veniam. Dolores totam quo nemo, similique velit.
                    </p>
                </div>

            </div>


            <div className="profileDetails">
                <div>
                    <h1>Profile</h1>
                    <StudentProfileAdmin
                        info={profile.profile}
                    />
                </div>
                <div className='my-4'>
                    <h1>Results</h1>
                    <StudentResultsAdmin
                        info={profile.results}
                    />
                </div>
                <div className='my-4'>
                    <h1>Fee's</h1>
                    <StudentFeeAdmin
                        info={profile.fee}
                    />
                </div>
                <div className='my-4'>
                    <h1>Complains</h1>
                    <StudentComplainAdmin
                        info={profile.complains}
                    />
                </div>
            </div>

        </div>
    )
}
