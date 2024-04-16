"use client"
import Image from 'next/image'
import React from 'react'
import DataTable from 'react-data-table-component'
import { MdEdit } from 'react-icons/md'
import dummyImg from "@/public/images/sd.png"

export default function CommitteTable(props) {

    const { info } = props
    const columns = [
        {
            name: "Select",
            selector: info => <input type="checkbox" />
        },
        {
            name: "Photo",
            selector: info => info.photo,
            cell: info => <div className='w-[60px] h-[60px]  my-3'>
                <Image
                    src={info.photo || dummyImg}
                    width={500}
                    height={500}
                    className='w-full h-full rounded-full'
                    alt='committee photo'

                />
            </div>
        },
        {
            name: "Name",
            selector: info => info.name
        },
        {
            name: "Email",
            selector: info => info.email
        },
        {
            name: "Title",
            selector: info => info.title
        },
        {
            name: "Position",
            selector: info => info.position
        },
        {
            name: "Edit",
            selector: info => <span className='editBtn'><MdEdit /></span>
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
