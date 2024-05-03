import Title from '@/components/Utils/Title'
import { handleAllGetMethod } from '@/fetchApi/GetMethod/handleAllGetMethod'
import React from 'react'
import StudentTable from './StudentTable'

export default async function StudentList() {
    const student = await handleAllGetMethod("/profile/all")
    return (
        <div className='py-3'>
            <Title text={"Student List"} />

            <div className='my-5'>

                <div className='my-3'>
                    <p>Total Student : {student.length < 10 ? "0" + student.length : student.length}</p>
                </div>

                <StudentTable
                    info={student}
                />
            </div>
        </div>
    )
}
