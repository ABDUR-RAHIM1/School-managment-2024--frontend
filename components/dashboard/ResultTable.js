"use client"
import React from 'react'
import DataTable from 'react-data-table-component';
import { MdDelete, MdEdit } from 'react-icons/md';

export default function ResultTable(props) {
    const { info, handleEditResult, handleCheckBox, checkIds, handleDeleteResults } = props;
    const route = "/results/delete-many"



    const ExpandableComponent = ({ data }) => {
        // Calculate total marks for the current student
        let totalMarks = 0;
        data.marks.forEach(mark => {
            // const number = parseInt(mark)
            totalMarks += parseInt(mark)
        });

        return (
            <div className='flex flex-col gap-4 py-4 ml-4'>
                <p><strong>Exam</strong>: {data.examName + " " + data.year}</p>
                <p><strong>Subjects</strong>: {data.subjects}</p>
                <p><strong> Marks</strong>: {data.marks}</p>
                <p><strong>Total Marks</strong>: {totalMarks}</p>
            </div>
        );
    }

    const columns = [
        {
            name: <div>
                {
                    checkIds.length > 0 ?
                        <span onClick={() => handleDeleteResults(route)} className='deleteBtn'><MdDelete /></span>
                        : "Select"
                }
            </div>,
            selector: info => <input onChange={(e) => handleCheckBox(e, info._id)} type="checkbox" />
        },
        {
            name: "Student Name",
            selector: info => info.studentName
        },
        {
            name: "Class",
            selector: info => info.classCode
        },
        {
            name: "Class Roll",
            selector: info => info.roll
        },
        {
            name: "Group",
            selector: info => info.group
        },
        {
            name: "Exam Name",
            selector: info => info.examName
        },
        {
            name: "Subjects",
            selector: info => info.subjects
        },
        {
            name: "Marks",
            selector: info => info.marks
        },
        {
            name: "Edit",
            selector: info => <span onClick={() => handleEditResult(info)} className='editBtn my-3'>
                <MdEdit />
            </span>
        },
    ]
    return (

        <DataTable
            columns={columns}
            data={info}
            pagination
            expandableRows
            expandableRowsComponent={ExpandableComponent}
        />
    )
}
