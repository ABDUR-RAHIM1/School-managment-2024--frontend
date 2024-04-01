import Image from 'next/image';
import React from 'react'
import DataTable from 'react-data-table-component';
import img from "@/public/images/sd.png"
import { MdDelete } from 'react-icons/md';
import { BiSolidMessageDetail } from 'react-icons/bi';

export default function ReviewsTable(props) {
    const { review, handleCheckBox, checkIds, handleReviewDeleteMany, handleDetails } = props;
    const columns = [
        {
            name: <div>
                {checkIds.length > 0 ?
                    <span onClick={handleReviewDeleteMany} className='deleteBtn'> <MdDelete />  </span>
                    : "Select"}
            </div>,
            selector: info => <input onChange={(e) => handleCheckBox(e, info._id)} type="checkbox" />
        },
        {
            name: "Photo",
            selector: info => <Image src={img} width={50} height={50} alt='review' className='border border-gray-300 rounded-full' />
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
            name: "Date",
            selector: info => new Date(info.createdAt).toLocaleDateString("en-US")
        },
        {
            name: "Details",
            selector: info => <span onClick={() => handleDetails(info)} className='iconBtn bg-blue-600 text-white'> <BiSolidMessageDetail /></span>
        },
    ]
    return (
        <>
            <DataTable
                columns={columns}
                data={review}
                pagination
            />
        </>
    )
}
