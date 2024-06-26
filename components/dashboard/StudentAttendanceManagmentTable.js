"use client"
import Link from 'next/link'
import React from 'react'
import DataTable from 'react-data-table-component'
import { MdDelete, MdDone, MdEdit, MdError, MdWarning } from 'react-icons/md'

export default function StudentAttendanceManagmentTable(props) {
    const { info, handleCheckBox, checkIds, handleDeleteAttendance, handleEditAttendance } = props

    const route = "/attendence/delete-many"
    const columns = [
        {
            name: <div>
                {
                    checkIds.length > 0 ?
                        <span onClick={() => handleDeleteAttendance(route)} className='deleteBtn'><MdDelete /></span>
                        : "Select"
                }
            </div>,
            selector: info => <input onChange={(e) => handleCheckBox(e, info._id)} type="checkbox" />
        },
        {
            name: "Name",
            selector: info => <Link href={`/dashboard/student-profile/${info.studentId}`} className='link'>
                {info.studentName}
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
            name: "Day",
            selector: info => new Date(info.dateByday).toLocaleDateString("en-US")
        },
        {
            name: "Status",
            selector: info => <div className={` flex items-center min-w-[85px] justify-center gap-2 py-2 px-3  rounded-sm border ${info.status === "Present" ? "text-blue-600 border-blue-600" : info.status === "Absent" ? "text-black border-black" : "text-yellow-600 border-yellow-600"
                }`}>
                {info.status} <small className='text-xl'>
                    {info.status === "Present" ? <MdDone /> : info.status === "Absent" ? <MdError /> : <MdWarning />}
                </small>
            </div>,
        },
        {
            name: "Edit",
            selector: info => <span onClick={() => handleEditAttendance(info)} className='editBtn my-3' > <MdEdit /></span >
        },
    ]

    return (

        <>
            <DataTable
                columns={columns}
                data={info}
                pagination
            />
        </>
    )
}
