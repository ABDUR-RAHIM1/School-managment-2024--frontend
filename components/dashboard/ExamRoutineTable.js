"use client"
import { GlobalState } from '@/ContextApi/ContextApi';
import React, { useContext } from 'react'
import DataTable from 'react-data-table-component'
import { MdDelete, MdEdit } from 'react-icons/md';

export default function ExamRoutineTable(props) {
    const { checkIds } = useContext(GlobalState)
    const { info, handleEditRoutine, handleCheck, handleDeleteRoutine } = props;
    const route = "/examroutine/delete-many"
    const columns = [
        {
            name: <div>
                {
                    checkIds.length > 0 ? <span onClick={() => handleDeleteRoutine(route)} className='deleteBtn'> <MdDelete /> </span> : "Select"
                }
            </div>,
            selector: info => <input onChange={(e) => handleCheck(e, info._id)} type="checkbox" />
        },
        {
            name: "Exam Name",
            selector: info => info.examName
        },
        {
            name: "Class",
            selector: info => info.classCode,
            cell: info => info.classCode < 10 ? "0" + info.classCode : info.classCode
        },
        {
            name: "Subject",
            selector: info => info.subject
        },
        {
            name: "Exam Date",
            selector: info => info.examDate,
            cell: info => new Date(info.examDate).toLocaleDateString("en-US")
        },
        {
            name: "Exam Time",
            selector: info => info.examTime,
        },
        {
            name: "Edit",
            selector: info => <span onClick={() => handleEditRoutine(info)} className='editBtn my-3'> <MdEdit /> </span>
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
