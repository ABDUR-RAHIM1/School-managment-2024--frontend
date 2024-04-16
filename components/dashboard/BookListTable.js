"use client"
import React from 'react'
import DataTable from 'react-data-table-component'
import { MdDelete, MdEdit } from 'react-icons/md'

export default function BookListTable(props) {
    const CustomExpandedComponent = ({ data }) => (
        <div className='ml-5 py-4 flex flex-col gap-3'>
            <p><strong>Class:</strong> {data.classCode}</p>
            <p><strong>Group:</strong> {data.group}</p>
            <p><strong>Subject List:</strong> {data.subjectList.join(', ')}</p>
            <p><strong> Optional Subject:</strong> {data.optional}</p>
        </div>
    );
    const { info, handleEditBookList, handleCheckbox, checkIds, handleDeleteBooklist } = props
    const route = "/booklist/delete-many"
    const columns = [
        {
            name: <div>
                {
                    checkIds.length > 0 ?
                        <span onClick={() => handleDeleteBooklist(route)} className='deleteBtn'><MdDelete /></span>
                        : "Select"
                }
            </div>,
            selector: info => <input onChange={(e) => handleCheckbox(e, info._id)} type="checkbox" />
        },
        {
            name: "Class",
            selector: info => info.classCode
        },
        {
            name: "Group",
            selector: info => info.group
        },
        {
            name: "Subject List",
            selector: info => info.subjectList
        },
        {
            name: "Optional",
            selector: info => info.optional
        },
        {
            name: "Edit",
            selector: info => <span onClick={() => handleEditBookList(info)} className='editBtn my-3'><MdEdit /></span>
        },
    ]
    return (
        <DataTable
            columns={columns}
            data={info}
            pagination
            expandableRows
            expandableRowsComponent={CustomExpandedComponent}
        />
    )
}
