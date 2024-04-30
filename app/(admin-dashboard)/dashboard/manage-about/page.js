"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import PageHeader from '@/components/Utils/PageHeader'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useContext, useLayoutEffect } from 'react'
import DataTable from 'react-data-table-component'
import { MdDelete, MdEdit } from 'react-icons/md'

export default function ManageAbout() {

    const { getAllDataFunc, data, reload, setEditValue, HandleCheckIds, checkIds , multipleDeleteFunc } = useContext(GlobalState)
    const deleteRoute = "/about/delete-many"
    const router = useRouter()

    useLayoutEffect(() => {
        const route = "/about/all"
        getAllDataFunc(route)
    }, [reload])


    const handleEditAboutPage = (editInfo) => {
        setEditValue(editInfo)
        router.push("/dashboard/add-content/add-about")
    }


    const handkeCheckBox = (e, ids) => {
        const isCheck = e.target.checked
        HandleCheckIds(isCheck, ids)
    }


    const columns = [
        {
            name: <div>
                {
                    checkIds.length > 0 ? <span onClick={() => multipleDeleteFunc(deleteRoute)} className='deleteBtn'>
                        <MdDelete />
                    </span> : "select"
                }
            </div>,
            selector: info => <input onChange={(e) => handkeCheckBox(e, info._id)} type="checkbox" name='checkbox' />
        },
        {
            name: "Title",
            selector: info => info.title
        },
        {
            name: "Content",
            selector: info => info.content
        },
        {
            name: "Photo",
            selector: info => <Image
                src={info.photo}
                width={100}
                height={100}
                alt='about page'
                className='my-3'
            />

        },
        {
            name: "Edit",
            selector: info => <span onClick={() => handleEditAboutPage(info)} className='editBtn'>
                <MdEdit />
            </span>
        }

    ]

    return (
        <div className='adminPage my-5'>
            <PageHeader text={`About Page Content`} />

            <DataTable
                columns={columns}
                data={data}

            />

        </div>
    )
}
