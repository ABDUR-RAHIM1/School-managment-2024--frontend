import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import DataTable from 'react-data-table-component'; 

export default function GallaryTable(props) {
    const { gallary, handleGallaryController } = props;
 
    const columns = [
        {
            name: "#no",
            cell: (info, index) => index + 1
        },
        {
            name: "author",
            selector: info => info.author,
            cell: info => <Link title='See Profile' className='underline capitalize text-blue-600' href={`/dashboard/profile/${info.teacherId}`} >{info.author}</Link>
        },
        {
            name: "title",
            selector: info => info.title
        },
        {
            name: "gallary",
            selector: info => info.photo,
            cell: info => <Image src={info.photo} width={50} height={50} className='w-16 h-16 rounded-sm my-5' alt='images gallary' />
        },
        {
            name: "Status",
            cell: info => <select value={info.status} onChange={(e) => handleGallaryController(e, info._id)} name="status" className={` ${info.status === "accept" ? "bg-blue-500" : info.status === "reject" ? "bg-black" : "bg-red-600"
                } cursor-pointer text-white py-2 px-3 focus:outline-none rounded-md`}>
                <option value="accept">Accept</option>
                <option value="reject">Reject</option>
                <option value="pending">Pending</option>
            </select>
        }
    ]
    return (
        <div>
            <DataTable
                columns={columns}
                data={gallary}
                pagination
            />
        </div>
    )
}
