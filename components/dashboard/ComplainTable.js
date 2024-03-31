"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import getDateInfo from '@/Helpers/Date'
import { handleComplainStatus } from '@/fetchApi/UpdateMethod/handleAllUpdateMethod'
import Link from 'next/link'
import React, { useContext } from 'react'
import { CiRead } from 'react-icons/ci'
import { MdReadMore } from 'react-icons/md'
import { TiTick } from 'react-icons/ti'
import DataTable from 'react-data-table-component';

//  child of complains  page
export default function ComplainTable(props) {
    const { reload, setReload } = useContext(GlobalState)
    const handleStatus = async (id) => {
        const route = `/complain/${id}/checking`
        const result = await handleComplainStatus(route);
        if (result) {
            setReload(!reload)
        }
    }
    const columns = [

        {
            name: 'Author',
            selector: info => info.studentName,
        },
        {
            name: 'Email',
            selector: info => info.studentEmail,
        },
        {
            name: 'Subject',
            selector: info => info.subject,
        },
        {
            name: 'date',
            selector: info => info.date,
        },
        {
            name: 'Details',
            selector: info => info.details,
            cell: info => <Link onClick={() => handleStatus(info._id)} href={`/dashboard/complains/${info._id}`}>
                <span className='editBtn bg-blue-600 hover:bg-blue-700 text-white'>
                    <CiRead />
                </span>
            </Link>
        },

        {
            name: "Status",
            cell: info => <span className={`iconBtn text-white ${info.isCheck === "pending" ? "bg-yellow-500" : "bg-green-600"}`}>
                {
                    info.isCheck === "pending" ? <MdReadMore /> : <TiTick />
                }
            </span>
        }

    ];

    return (
        <DataTable
            columns={columns}
            data={props.complains}
            pagination
        />
    )
}


{/* <>
<tr>

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
</> */}