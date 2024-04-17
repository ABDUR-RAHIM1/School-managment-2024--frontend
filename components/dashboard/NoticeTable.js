import React from 'react'
import DataTable from 'react-data-table-component'
import { MdDelete, MdEdit } from 'react-icons/md';

export default function NoticeTable(props) {
    const { info, handleUpdateNotice, handleCheckBox, checkIds, handleDeleteNotice } = props;
    const route = "/notice/delete-many"
    const columns = [
        {
            name: <div>
                {
                    checkIds.length > 0 ?
                        <span onClick={() => handleDeleteNotice(route)} className='deleteBtn'> <MdDelete /> </span>
                        : "select"
                }
            </div>,
            selector: info => <input onChange={(e) => handleCheckBox(e, info._id)} type="checkbox" />
        },
        {
            name: "Subject",
            cell: info => info.subject.length > 15 ? info.subject.slice(0, 15) + " . . ." : info.subject
        },
        {
            name: "Details",
            cell: info => info.details.length > 20 ? info.details.slice(0, 20) + " . . ." : info.details
        },
        {
            name: "Date",
            selector: info => new Date(info.createdAt).toLocaleDateString("en-US")
        },
        {
            name: "Edit",
            selector: info => <span onClick={() => handleUpdateNotice(info)} className='editBtn my-3'> <MdEdit /> </span>
        },
    ]
    return (
        <DataTable
            columns={columns}
            data={info}
            pagination
        />
    )
}
