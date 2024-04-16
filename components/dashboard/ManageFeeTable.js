"use client"
import Link from 'next/link';
import React, { useContext, useState } from 'react'
import DataTable from 'react-data-table-component'
import { MdDelete, MdDone, MdEdit, MdError } from 'react-icons/md';
import FeeModal from '../Utils/FeeModal';
import { GlobalState } from '@/ContextApi/ContextApi';

export default function ManageFeeTable(props) {
    const { setEditValue, multipleDeleteFunc } = useContext(GlobalState)
    const [editMood, setEditMood] = useState(false)
    const { info, handleCheckBox, checkIds } = props;

    const route = "/fee/delete-many"

    const handleEditClick = (editInfo) => {
        setEditMood(true);
        setEditValue(editInfo)
    };


    const closeModal = () => {
        setEditMood(false)
    }


    const columns = [
        {
            name: <div>
                {
                    checkIds.length > 0 ?
                        <span onClick={() => multipleDeleteFunc(route)} className='deleteBtn'>
                            <MdDelete />
                        </span>
                        : "Select"
                }
            </div>,
            selector: info => <input onChange={(e) => handleCheckBox(e, info._id)} type="checkbox" id='feeDeleteCheck' />
        },
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
            selector: info => info.feeAmount
        },
        {
            name: "Date",
            selector: info => new Date(info.createdAt).toLocaleDateString("en-US")
        },
        {
            name: "Edit",
            cell: info => <span
                onClick={() => handleEditClick(info)}

                className='editBtn'>
                <MdEdit />

            </span>
        }
    ]

    return (
        <>
            <DataTable
                columns={columns}
                data={info}
                pagination
            />

            {
                editMood && <FeeModal closeModel={closeModal} />
            }
        </>
    )
}
