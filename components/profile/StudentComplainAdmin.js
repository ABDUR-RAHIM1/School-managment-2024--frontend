"use client"
import Image from 'next/image';
import React from 'react'
import dummyImg from "@/public/images/no-image.jpg"
import DataTable from 'react-data-table-component';
import Link from 'next/link';

export default function StudentComplainAdmin(props) {
    const { info } = props;

    const columns = [
        {
            name: "#no",
            cell: (info, index) => <p>{index + 1}</p>
        },
        {
            name: "photo",
            cell: info => <Image
                src={info.photo || dummyImg}
                width={1000}
                height={1000}
                className='w-16 h-16 rounded-md my-3'
                alt='comaplain image'
            />
        },
        {
            name: "Subject",
            selector: info => <Link className='underline' href={`/dashboard/complains/${info._id}`}>
                {info.subject.length > 15 ? info.subject.slice(0, 15) : info.subject}
            </Link>
        },
        {
            name: "Details",
            selector: info => <p>
                {info.details.length > 20 ? info.details.slice(0, 20) : info.details}
            </p>
        },
        {
          name :"Date",
          cell : info => new Date(info.createdAt).toLocaleDateString("en-US")
        },
        {
            name: "Status",
            cell: info => <button className={`${info.isCheck === "checked" ? " bg-blue-600" : "bg-red-600"} py-2 px-3 rounded-md font-medium capitalize text-white`}>
                {info.isCheck}
            </button>
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
