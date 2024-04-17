"use client"
import Image from 'next/image'
import React from 'react'
import DataTable from 'react-data-table-component'
import { MdDelete, MdEdit } from 'react-icons/md'
import dummyImg from "@/public/images/sd.png"

export default function CommitteTable(props) {
    const route = "/comitee/delete-many"
    const { info, handleEditComiitee, handleCheckBox, checkIds, handleDeleteComiite } = props

    const ExpandedComponent = ({ data }) => (
        <div className='flex flex-col gap-4 ml-4 py-5'>
            <p> <strong> Name :</strong> {data.name} </p>
            <p><strong>Email :</strong> {data.email} </p>
            <p><strong>Phoone Number :</strong> {data.phone} </p>
            <p><strong>Title :</strong> {data.title} </p>
            <p><strong>Position :</strong> {data.position} </p>
        </div>
    );

    const columns = [
        {
            name: <div>
                {
                    checkIds.length > 0 ? <span onClick={() => handleDeleteComiite(route)} className='deleteBtn'><MdDelete /></span> : "Select"
                }
            </div>,
            selector: info => <input onChange={(e) => handleCheckBox(e, info._id)} type="checkbox" />
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
            name: "Phone",
            selector: info => info.phone
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
            selector: info => <span onClick={() => handleEditComiitee(info)} className='editBtn'><MdEdit /></span>
        },
    ]
    return (
        <DataTable
            columns={columns}
            data={info}
            pagination
            expandableRows
            expandableRowsComponent={ExpandedComponent}
        />
    )
}
