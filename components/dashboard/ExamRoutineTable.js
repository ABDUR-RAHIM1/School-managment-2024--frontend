"use client"
import React from 'react'
import DataTable from 'react-data-table-component'
import { MdEdit } from 'react-icons/md';

export default function ExamRoutineTable(props) {
    const { info ,handleEditRoutine} = props;

    const columns = [
        {
          name :"Select",
          selector : info => <input type="checkbox" />
        },
        {
            name: "Exam Name",
            selector: info => info.examName
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
            selector: info => <span onClick={()=>handleEditRoutine(info)} className='editBtn my-3'> <MdEdit /> </span>
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
