"use client"
import { GlobalState } from '@/ContextApi/ContextApi';
import DeleteMethod from '@/Helpers/actions/DeleteMethod';
import ViewModel from '@/components/Utils/Clients/VIewModel';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'
import DataTable from 'react-data-table-component';
import { MdDelete, MdEdit } from 'react-icons/md';

export default function Complain(props) {
    const { setDetailsData, setEditValue } = useContext(GlobalState)

    const [showModal, setShowModal] = useState(false)

    const { complain } = props;
    const router = useRouter()


    const handleDetails = (info) => {
        setDetailsData(info)
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const deleteComplain = (id) => {
        const route = `/complain/delete/${id}`
        DeleteMethod(route);
        router.refresh()
    }

    const handleEditComplain = (info) => {
        setEditValue(info)
        router.push("/student-profile/complain/add")
        router.refresh()
    }

    const columns = [
        {
            name: "Sl",
            selector: (row, index) => index + 1
        },
        {
            name: "Subject",
            selector: row => (
                <span onClick={() => handleDetails(row)} className='link'>

                    {row.subject}

                </span>
            )
        },
        {
            name: "Details",
            selector: row =>
                row.details
        },
        {
            name: "Date",
            selector: row => new Date(row.createdAt).toLocaleDateString()
        },
        {
            name: "Status",
            selector: row => <button className={` ${row.isCheck === "checked" ? "border-green-600 text-green-600" : "border-red-600 text-red-600 "} py-2 px-4 border rounded-sm`}>
                {row.isCheck}
            </button>
        },
        {
            name: "Edit",
            selector: row => <span onClick={() => handleEditComplain(row)} className='editBtn'>
                <MdEdit />
            </span>
        },
        {
            name: "Delete",
            selector: row => <span onClick={() => deleteComplain(row._id)} className='deleteBtn my-2'>
                <MdDelete />
            </span>
        },
    ]
    return (
        <>
            <DataTable
                data={complain}
                columns={columns}
                pagination
            />
            {
                showModal && <ViewModel
                    componentName="complain"
                    closeModal={closeModal} />
            }
        </>

    )
}
