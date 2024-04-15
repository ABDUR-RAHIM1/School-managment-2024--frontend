"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { MdDone, MdEdit, MdError } from 'react-icons/md';

export default function ManageFeeTable(props) {
    const [editMood, setEditMood] = useState(false)
    const { info } = props;


    const handleEditClick = (id) => {
        setEditMood(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };


    const columns = [
        {
            name: "Name",
            selector: info => <Link className='underline text-blue-500 capitalize ' href={`/dashboard/student-profile/${info.studentId}`}>
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
            name: "Fee For",
            selector: info => info.feeFor
        },
        {
            name: "Amount",
            selector: info => <input className='w-[80px] py-1 px-2' type="text" value={info.feeAmount} />
        },
        {
            name: "feePaid",
            selector: info => <span className={`iconBtn text-white my-3 ${info.feePaid ? "bg-green-600" : "bg-red-600"}`}>
                {info.feePaid ?
                    <MdDone />
                    :
                    <MdError />}
            </span>
        },
        {
            name: "Edit",
            cell: info => <span
                onClick={() => handleEditClick(info.studentId)}

                className='editBtn'>
                {
                    editMood ? <MdDone /> : <MdEdit />
                }
            </span>
        }
    ]
    return (
        <DataTable
            columns={columns}
            data={info}
            pagination
        />
    )
}
