"use client"
import Image from 'next/image'
import React from 'react'
import DataTable from 'react-data-table-component'

export default function TeacherPostsAdmin(props) {
    const { info } = props
    const columns = [
        {
            name: "Photos",
            selector: info => info.photo,
            cell: info => <Image src={info.photo} width={100} height={100} className='w-16 h-16 rounded-md my-3' alt='post photos' />
        },
        {
            name: "Title",
            selector: info => info.title,
            cell: info => info.title.slice(0, 15) + (info.title.length > 15 ? "..." : "")
        },
        {
            name: "Content",
            selector: info => info.content,
            cell: info => info.content.slice(0, 20) + (info.content.length > 20 ? "..." : "")
        },
        {
            name: "Date",
            selector: info => info.createdAt,
            cell: info => new Date(info.createdAt).toLocaleDateString("en-US")
        }
    ];

    return (
        <DataTable
            columns={columns}
            data={info}
            pagination
        />
    );
}
