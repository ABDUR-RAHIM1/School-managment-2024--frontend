"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import Heading from '@/components/Utils/Heading'
import Image from 'next/image'
import React, { useContext, useLayoutEffect } from 'react'
import DataTable from 'react-data-table-component'

export default function ManageAbout() {

    const { getAllDataFunc, data, } = useContext(GlobalState)

    useLayoutEffect(() => {
        const route = "/about/all"
        getAllDataFunc(route)
    }, [])


    const columns = [
        {
            name: "sl",
            selector: (info, i) => i
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
            />

        },
    ]

    return (
        <div className='adminPage my-5'>
            <Heading text={`About Page Content`} />

            <DataTable
                columns={columns}
                data={data}

            />

        </div>
    )
}
