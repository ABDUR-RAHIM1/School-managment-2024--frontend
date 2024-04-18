"use client"
import React from 'react'
import DataTable from 'react-data-table-component'
import { MdDelete, MdDone, MdEdit, MdError, MdWarning } from 'react-icons/md'

export default function StudentAttendanceManagmentTable(props) {
    const { info, handleCheckBox, checkIds, handleDeleteAttendance } = props
   
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
            selector: info => new Date(info.dateByday).toLocaleDateString("en-US")
        },
        {
            name: "Status",
            selector: info => <div className={`flex items-center justify-center gap-2 py-2 px-3 text-white rounded-sm ${info.status === "Present" ? "bg-blue-600" : info.status === "Absent" ? "bg-black" : "bg-yellow-600"
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
