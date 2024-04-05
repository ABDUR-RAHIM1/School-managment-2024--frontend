"use client"
import React from 'react'
import DataTable from 'react-data-table-component';

export default function StudentResultsAdmin(props) {
    const { info } = props;
    const columns = [
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
            name: "Published",
            selector: info => new Date(info.createdAt).toLocaleDateString("en-US")
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
