"use client"
import Link from 'next/link';
import React from 'react'
import DataTable from 'react-data-table-component';
import { MdDelete } from 'react-icons/md';
import dummyImg from "@/public/images/sd.png"

export default function TeacherProfileTable(props) {
    const { info, handleTeacherDelete } = props
    const route = "/teachers/profile/delete"
    const columns = [
        {
            name: <div>
                {
                    props.isCheckId.length > 0 ?
                        <span onClick={() => handleTeacherDelete(route)} className='deleteBtn'> <MdDelete /> </span>
                        : "Select"
                }
            </div>,
            cell: info => <input onChange={(e) => props.handleCheck(e, info._id)} type="checkbox" />
        },
        {
            name: 'Image',
            cell: info =>
                <Link href={`/dashboard/teacher-list/${info._id}`}>
                    <img src={info.photo || dummyImg} alt="teacher" style={{ width: 40, height: 40, border: "1px solid gray", borderRadius: "50%" }} />
                </Link>,

        },
        {
            name: 'Name',
            selector: info => info.name,
            cell: info => <Link title='See Profile' href={`/dashboard/profile/${info.teacherId}`} className=' capitalize underline text-blue-600'>{info.name} </Link>
        },
        {
            name: 'Email',
            selector: info => info.email,
        },
        {
            name: 'Gender',
            selector: info => info.gender,
        },
        {
            name: 'Qualification',
            selector: info => info.qualification,
        },
        {
            name: 'dateOfBirth',
            selector: info => new Date(info.dateOfBirth).toLocaleDateString("en-US"),
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
