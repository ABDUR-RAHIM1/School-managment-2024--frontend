"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import ViewModel from '@/components/Utils/Clients/VIewModel';
import PageHeader from '@/components/Utils/PageHeader';
import React, { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { FaGoodreads, FaSadCry } from 'react-icons/fa';
import { MdDelete, MdEdit } from 'react-icons/md';
import { toast } from 'react-toastify'

export default async function ViewComplain() {

    const { getMethodWithToken, reload, tokenData, setDetailsData } = useContext(GlobalState);

    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const tokenString = window.localStorage.getItem("STUDENT_IS_LOGGED_IN")

        if (!tokenString) {
            toast.error("unauntorize user!")
            return
        }

        const route = "/complain/all"
        const token = JSON.parse(tokenString)
        getMethodWithToken(route, token)

    }, [reload])

    const handleDetails = (info) => {
        setShowModal(true)
        setDetailsData(info)
    }

    const closeModal = () => {
        setShowModal(false)
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
                    {
                        tokenData.length > 0 ? row.subject.length > 20 ? row.subject.slice(0, 20) : row.subject : console.log("Subject not found")
                    }
                </span>
            )
        },
        {
            name: "Details",
            selector: row => (
                <span>
                    {tokenData.length > 0 ? row.details.length > 20 ? row.details.slice(0, 20) : row.details : console.log("details not found")}
                </span>
            )
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
            selector: row => <span className='editBtn'>
                <MdEdit />
            </span>
        },
        {
            name: "Delete",
            selector: row => <span className='deleteBtn'>
                <MdDelete />
            </span>
        },
    ]

    return (
        <div className='adminPage'>
            <PageHeader text={"Your Complain Lists"} />

            {
                tokenData.length > 1 ?
                    <DataTable
                        data={tokenData}
                        columns={columns}
                        pagination
                    />
                    : "Loading . . . "
            }

            {
                showModal && <ViewModel
                    componentName="complain"
                    closeModal={closeModal} />
            }
        </div>
    )
}

