"use client"
import Link from 'next/link';
import React from 'react'
import DataTable from 'react-data-table-component';
import dummyImg from "@/public/images/sd.png"
import { MdDelete } from 'react-icons/md';
import Image from 'next/image';

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
                    <Image src={info.photo || dummyImg} width={1000} height={1000} alt="Student" className='w-12 h-12 rounded-full my-2' />
                </Link>,

        },
        {
            name: 'Name',
            selector: info => info.name,
            cell: info => <Link className='underline text-blue-600' href={`/dashboard/student-profile/${info.studentId}`}>
                {info.name}
            </Link>
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
        {
            name: 'Scholarship',
            selector: info => "Yes",
        }
    ];


    return (
        <DataTable
            columns={columns}
            data={info}
            pagination
        />
    )
}
