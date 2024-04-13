"use client"
import Link from 'next/link';
import React from 'react'
import DataTable from 'react-data-table-component'
import { MdDelete, MdEdit } from 'react-icons/md';

export default function ClassRoutineTable(props) {
    const { info, handleCheckId, checkIds, handleDeleteMultipleRoutine, handleUpdateClassRoutine } = props;
    const route = "/routine/delete-many"
    const columns = [
        {
            name: <div>
                {
                    checkIds.length > 0 ? <span onClick={() => handleDeleteMultipleRoutine(route)} className='deleteBtn'><MdDelete /></span> : "select"
                }
            </div>,
            cell: info => <input onChange={(e) => handleCheckId(e, info._id)} type="checkbox" />
        },
        {
            name: "Teacher",
            selector: info => info.teacherName,
            cell: info => <Link className='underline text-blue-600' href={`/dashboard/profile/${info.teacherId}`}>
                {info.teacherName}
            </Link>
        },
        {
            name: "Class",
            selector: info => info.classCode
        },
        {
            name: "Subject",
            selector: info => info.subject
        },
        {
            name: "Day",
            selector: info => info.dayOfWeek
        },
        {
            name: "Start Time",
            selector: info => info.startTime
        },
        {
            name: "End Time",
            selector: info => info.endTime
        },
        {
            name: "Edit",
            selector: info => <span onClick={() => handleUpdateClassRoutine(info)} className='editBtn'> <MdEdit /> </span>
        },
    ]
    return (
        <DataTable
            columns={columns}
            data={info}
            pagination
        />
    )
}
