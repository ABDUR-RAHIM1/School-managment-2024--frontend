"use client"
import Link from 'next/link';
import React from 'react'
import DataTable from 'react-data-table-component';
import dummyImg from "@/public/images/sd.png"
import { MdDelete } from 'react-icons/md';

export default function StudentProfileTable(props) {
    const { info } = props
    const columns = [
        {
            name: <div>
                {
                    props.isCheckId.length > 0 ?
                        <span className='deleteBtn'> <MdDelete /> </span>
                        : "Select"
                }
            </div>,
            cell: info => <input onChange={(e) => props.handleCheck(e, info._id)} type="checkbox" />
        },
        {
            name: 'Image',
            cell: info =>
                <Link href={`/dashboard/student-list/${info._id}`}>
                    <img src={info.photo || dummyImg} alt="Student" style={{ width: 40, height: 40, border: "1px solid gray", borderRadius: "50%" }} />
                </Link>,

        },
        {
            name: 'Name',
            selector: info => info.name,
        },
        {
            name: 'Email',
            selector: info => info.email,
        },
        {
            name: 'Class',
            selector: info => info.classCode,
        },
        {
            name: 'Group',
            selector: info => info.group,
        },
        {
            name: 'Roll',
            selector: info => info.roll,
        },
        {
            name: 'Session',
            selector: info => info.session,
        },
    ];


    return (
        <DataTable
            columns={columns}
            data={info}
            pagination
        />
    )
}
