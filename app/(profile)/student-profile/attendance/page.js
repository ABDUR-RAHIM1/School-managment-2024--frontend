"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import Heading from '@/components/Utils/Heading'
import Select from '@/components/Utils/Select'
import React, { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { MdSearch } from 'react-icons/md'

//  student profile
export default function Attendance() {
    const { tokenData, getMethodWithToken } = useContext(GlobalState)

    const [search, setSearch] = useState("")

    useEffect(() => {
        const token = window.localStorage.getItem("STUDENT_IS_LOGGED_IN");
        if (token) {
            const parseToken = JSON.parse(token)
            const route = "/attendence/login-student"
            getMethodWithToken(route, parseToken)
        }


    }, [])



    const handleSearch = (e) => {
        setSearch(e.target.value)
    }


    const columns = [
        {
            name: "Name",
            selector: row => row.studentName
        },
        {
            name: "Class",
            selector: row => row.classCode
        },
        {
            name: "Group",
            selector: row => row.group
        },
        {
            name: "Roll",
            selector: row => row.roll
        },
        {
            name: "Day",
            selector: row => row.dateByday,
            cell: row => new Date(row.dateByday).toLocaleDateString(),
            sortable: true,
        },
        {
            name: "Attendance",
            selector: row => row.status,
            cell: row => <p className={`${row.status ==="Present" ? "text-green-700" : row.status === "Late" ? "text-orange-500" : "text-red-600" }`}>{
                row.status
            }</p>
        },
    ]
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    return (
        <div className='adminPage'>
            <Heading text={"Attendance"} />

            <div className="border flex items-center justify-between gap-3">
                <div  >
                    <MdSearch className='text-5xl text-purple-600' />
                </div>
                <Select
                    name="Attendance"
                    options={months}
                    value={search}
                    onChange={handleSearch}
                />
            </div>

            <DataTable
                data={tokenData}
                columns={columns}
                pagination
            />
        </div>
    )
}
