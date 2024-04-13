
import React from 'react'
import DataTable from 'react-data-table-component';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';

export default function AdminTable(props) { 
    const route = '/admin/auth/delete-many'
    const columns = [
        {
            name: (
                <span onClick={() => props.handleDeleteManyAdmins(route)} className={props.checkIds.length > 0 ? 'deleteBtn' : ''}>
                    {props.checkIds.length > 0 ? <MdDelete /> : 'Select'}
                </span>
            ),
            cell: info => <input onChange={(e) => props.handleCheck(e, info._id)} type="checkbox" />
        },

        {
            name: 'Name',
            selector: info => info.username,
        },
        {
            name: 'Email',
            selector: info => info.email,
        },
        {
            name: 'role',
            selector: info => info.role,
        },
        {
            name: 'Joined',
            selector: info => info.createdAt,
            cell: info => new Date(info.createdAt).toLocaleDateString('en-US'),
        },

        {
            name: "Edit",
            cell: info => <button onClick={() => props.handleEditAdmin(info)} className='editBtn bg-blue-600 text-white'><CiEdit /></button>
        },
        {
            name: "Delete",
            cell: info => <button onClick={() => props.handleDeleteAdmin(info._id)} className='deleteBtn'>
                <MdDelete />
            </button>
        }

    ];

    return (
        <DataTable
            columns={columns}
            data={props.adminList}
            pagination
        />
    )
}
 