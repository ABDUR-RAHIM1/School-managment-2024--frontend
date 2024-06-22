import Heading from '@/components/Utils/Heading';
import Link from 'next/link';
import React from 'react'

export default function ProfileInfo(props) {
    const { profile, todos, complains, results, fee, attendance } = props.profileData;
    return (
        <div className='py-10 my-5 adminPage w-full md:w-[48%]'>
            <Heading text={"Profile Info"} />
            <div className='my-5 px-10 flex flex-col gap-3 text-[17px] lowercase '>
                <p>Profile : {profile.length}</p>
                <p>Todos : {todos.length}</p>
                <p>Complain : {complains.length}</p>
                <p>Results : {results.length}</p>
                <p>Total Fee : {fee.length}</p>
                <p>Attendance : {attendance.length}</p>
                <Link href={"/student-profile"} className="link">
                See Details
            </Link>
            </div>
          
        </div>
    )
}
