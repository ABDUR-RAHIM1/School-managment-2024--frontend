import Image from 'next/image';
import React from 'react'
import dummyImg from "@/public/images/no-image.jpg"
import DataTable from 'react-data-table-component';
import Link from 'next/link';

export default function PostsTable(props) {
    const { info } = props;

    const columns = [
        {
            name: "Auhtor",
            selector: info => info.creator,
            cell: info => <Link className='underline' href={`/dashboard/profile/${info.teacherId}`}>
                {info.creator}
            </Link>
        },
        {
            name: "Photo",
            selector: info => info.photo,
            cell: info => <Image src={info.photo || dummyImg} className='w-16 h-16 rounded-md my-3' width={100} height={100} alt='blog images' />
        },
        {
            name: "Title",
            selector: info => info.title,
            cell: info => (
                <Link href={`/dashboard/teacher-posts/${info._id}`} className='underline' >
                    {info.title.length > 15 ? info.title.slice(0, 15) : info.title}
                </Link>
            )
        },
        {
            name: "Content",
            selector: info => info.content,
            cell: info => info.content.length > 20 ? info.content.slice(0, 15) : info.content
        },
        {
            name: "Date",
            selector: info => info.createdAt,
            cell: info => new Date(info.createdAt).toLocaleDateString("en-US")
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
