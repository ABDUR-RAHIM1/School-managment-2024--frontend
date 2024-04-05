"use client"
import React from 'react'
import DataTable from 'react-data-table-component'

export default function TeahcerClassAdmin(props) {
    const {info} = props
    const columns = [
        
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
            selector: info => info.dayOfWeek, 
        },
        {
            name: "startTime",
            selector: info => info.startTime
        },
        {
            name: "endTime",
            selector: info => info.endTime
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
