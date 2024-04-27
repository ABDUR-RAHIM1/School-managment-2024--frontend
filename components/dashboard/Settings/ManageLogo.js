"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import PageHeader from '@/components/Utils/PageHeader'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useContext, useLayoutEffect } from 'react'
import DataTable from 'react-data-table-component'
import { MdDelete, MdEdit } from 'react-icons/md'

export default function ManageLogo() {
    const { getAllDataFunc, data, reload, HandleCheckIds, checkIds, multipleDeleteFunc, setEditValue } = useContext(GlobalState)

    const deleteRoute = "/logo/delete-many"

    const router = useRouter()

    useLayoutEffect(() => {
        const route = "/logo/all"
        getAllDataFunc(route)
    }, [reload]);

    const HandleCheckBox = (e, ids) => {

        const isCheck = e.target.checked;
        HandleCheckIds(isCheck, ids)
    }

    const handleEditLogo = (editInfo) => {
        setEditValue(editInfo)
        router.push("/dashboard/manage-content/add-content")
    }


    const columns = [
        {
            name: <div>
                {
                    checkIds.length > 0 ? <span onClick={() => multipleDeleteFunc(deleteRoute)} className='deleteBtn'>
                        <MdDelete />
                    </span> : "Select"
                }
            </div>,
            selector: info => <input onChange={(e) => HandleCheckBox(e, info._id)} type="checkbox" />
        },
        {
            name: "Sl",
            selector: (info, i) => i + 1
        },
        {
            name: "Logo",
            selector: info => <div className='w-16 h-16 my-3'>
                <Image
                    src={info.photo}
                    width={1000}
                    height={1000}
                    alt='logo'
                    className='w-full h-full rounded-md '
                />
            </div>
        },
        {
            name: "Width",
            selector: info => info.width + "px"
        },
        {
            name: "Height",
            selector: info => info.height + "px"
        },
        {
            name: "Rounded",
            selector: info => info.radius + "%"
        },
        {
            name: "Edit",
            selector: info => <span onClick={() => handleEditLogo(info)} className='editBtn'>
                <MdEdit />
            </span>
        },
    ]

    return (
        <div className='adminPage my-5'>
            <PageHeader text="Manage Logo" />
            <DataTable
                columns={columns}
                data={data}
                pagination
            />
        </div>
    )
}
