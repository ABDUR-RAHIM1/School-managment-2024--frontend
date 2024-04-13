import React from 'react'
import DataTable from 'react-data-table-component'
import { MdEdit } from 'react-icons/md';

export default function NoticeTable(props) {
    const { info, handleUpdateNotice } = props;
    console.log(info)
    const columns = [
        {
            name: "select",
            selector: info => <input type="checkbox" />
        },
        {
            name: "Subject",
            selector: info => info.subject.length > 15 ? info.details.slice(0, 15) : info.details
        },
        {
            name: "Details",
            selector: info => info.details.length > 20 ? info.details.slice(0, 20) : info.details
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
