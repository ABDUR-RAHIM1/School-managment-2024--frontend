import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import dummyImg from "@/public/images/sd.png"

export default function StudentAttendancetable(props) {
    const { info, handlePostAttendance } = props;

    const initialFormData = {
        studentId: "",
        dateByday: new Date().toISOString().slice(0, 10),
        status: ""
    }
    const [formData, setFormData] = useState(initialFormData)

    // console.log(formData)
    const handleAttendanceStatus = async (e, stInfo) => {
        const { value } = e.target;

        if (value) {
            const formValue = {
                ...formData,
                studentId: stInfo.studentId,
                status: e.target.value
            }
            const route = "/attendence/create"
            await handlePostAttendance(route, formValue);

        } else {
            setFormData({})
        }
    }


    const columns = [
        {
            name: "Photo",
            selector: info => <div className='w-[60px] h-[60px] my-4'>
                <Image
                    src={info.photo || dummyImg}
                    width={1000}
                    height={1000}
                    alt='student photo'
                    className='w-full h-full rounded-full'
                />
            </div>
        },
        {
            name: "Name",
            selector: info => <Link className='link' href={`/dashboard/student-profile/${info.studentId}`} >
                {info.name}
            </Link>
        },
        {
            name: "Class",
            selector: info => info.classCode
        },
        {
            name: "Roll",
            selector: info => info.roll
        },
        {
            name: "Group",
            selector: info => info.group
        },
        {
            name: "Status",
            selector: info => <div className='w-[150px]'>

                <select onChange={(e) => handleAttendanceStatus(e, info)} name="status" className='py-2 px-3 rounded-md border border-gray-300'>
                    <option className='text-red-700' value="">Status</option>
                    <option value="Absent">Absent</option>
                    <option value="Present">Present</option>
                    <option value="Late">Late</option>
                </select>
            </div>
        },
    ]
    return (
        <>
            <input value={formData.dateByday} required onChange={(e) => setFormData({ ...formData, dateByday: e.target.value })} type="date" name='date' className='input' />

            <DataTable
                columns={columns}
                data={info}
                pagination
            />
        </>
    )
}
