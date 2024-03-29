"use client"
import getDateInfo from '@/Helpers/Date'
import { handleComplainStatus } from '@/fetchApi/UpdateMethod/handleAllUpdateMethod'
import Link from 'next/link'
import React from 'react'
import { CiRead } from 'react-icons/ci'
import { MdReadMore } from 'react-icons/md'
import { TiTick } from 'react-icons/ti'
import { toast } from 'react-toastify'

export default function ComplainTable(props) {
    const { _id, studentName, studentEmail, subject, isCheck, createdAt } = props.complains

    const handleStatus = async (id) => {
        const route = `/complain/${id}/checking`
        const result = await handleComplainStatus(route);
        if (result) {
            toast.success(result.message)
        }
    }


    return (
        <tr>
            <td>
                <input type="checkbox" />
            </td>
            <td>{studentName}</td>
            <td>{studentEmail}</td>
            <td>{subject.length > 25 ? subject.slice(0, 25) + ". . ." : subject}</td>
            <td>{getDateInfo(createdAt).day + "/" + getDateInfo(createdAt).month + "/" + getDateInfo(createdAt).year}</td>
            <td >
                <Link onClick={() => handleStatus(_id)} href={`/dashboard/complains/${_id}`}>
                    <span className='editBtn bg-blue-600 hover:bg-blue-700 text-white'>
                        <CiRead />
                    </span>
                </Link>
            </td>
            <td >
                <span className={`iconBtn text-white ${isCheck === "pending" ? "bg-yellow-500" : "bg-green-600"}`}>
                    {
                        isCheck === "pending" ? <MdReadMore /> : <TiTick />
                    }
                </span>
            </td>
        </tr>
    )
}
