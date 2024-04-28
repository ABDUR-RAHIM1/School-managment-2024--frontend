
import { handleAllGetMethod } from '@/fetchApi/GetMethod/handleAllGetMethod'
import React from 'react'
import { GiTeacher } from 'react-icons/gi'

export default async function PeopleCounter() {

    const teachers = await handleAllGetMethod("/teachers/profile/all")
    const students = await handleAllGetMethod("/profile/all")
    const staffs = await handleAllGetMethod("/staffs/all")




    return (
        <div className='  my-4 flex items-center justify-between flex-wrap'>
            <div className='dashCard bg-purple-50 text-blue-950'>
                <div>
                    <p>Teachers</p> 
                    <p className='count'>{teachers.length < 10 ? "0" + teachers.length : teachers.length}</p>
                </div>
                <span className='text-3xl'>
                    <GiTeacher />
                </span>
            </div>
            <div className='dashCard bg-white text-blue-950'>
                <div>
                    <p>Students</p>
                    <p className='count'>{students.length < 10 ? "0" + students.length : students.length}</p>
                </div>
                <span className='text-3xl'>
                    <GiTeacher />
                </span>
            </div>
            <div className='dashCard bg-orange-50 text-blue-950'>
                <div>
                    <p>Staffs</p> 
                    <p className='count'>{staffs.length < 10 ? "0" + staffs.length : staffs.length}</p>
                </div>
                <span className='text-3xl'>
                    <GiTeacher />
                </span>
            </div>
        </div>
    )
}
