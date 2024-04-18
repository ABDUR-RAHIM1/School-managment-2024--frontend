"use client"
import React from 'react'
import DataTable from 'react-data-table-component'
import { MdDone, MdEdit, MdError, MdWarning } from 'react-icons/md'

export default function StudentAttendanceManagmentTable(props) {
    const { info } = props

    const columns = [
        {
            name: "Select",
            selector: info => <input type="checkbox" />
        },
        {
            name: "Name",
            selector: info => info.studentName
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
            selector: info => info.dateByday
        },
        {
            name: "Status",
            selector: info => <div className={`flex items-center justify-center gap-2 py-2 px-3 text-white rounded-sm ${info.status === "Present" ? "bg-blue-600" : info.status === "Abdent" ? "bg-black" : "bg-yellow-600"
                }`}>
                {info.status} <small className='text-xl'>
                    {info.status === "Present" ? <MdDone /> : info.status === "Absent" ? <MdError /> : <MdWarning />}
                </small>
            </div>
        },
        {
            name: "Edit",
            selector: info => <span className='editBtn my-3'><MdEdit /></span>
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
