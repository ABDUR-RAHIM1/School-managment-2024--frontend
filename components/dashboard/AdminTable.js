 
import React from 'react'
import DataTable from 'react-data-table-component';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';

export default function AdminTable(props) {
    const { _id, username, email, role, createdAt, } = props.adminList;

    const columns = [
        {
            name: (
                <span className={props.checkIds.length > 0 ? 'text-3xl px-1 py-1 rounded-sm cursor-pointer bg-red-500  text-white' : ''}>
                    {props.checkIds.length > 0 ? <MdDelete onClick={props.handleDeleteManyAdmins} /> : 'Select'}
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


{/* <>
    <tr key={_id}>
        <th>
            <input type="checkbox" />
        </th>
        <td className='capitalize'> <span className='py-2 px-3 bg-blue-300 rounded-full'>{username.slice(0, 1)}</span> {username}</td>
        <td>{email}</td>
        <td className='capitalize'>{role}</td>
        <td>{getDateInfo(createdAt).day + "/" + getDateInfo(createdAt).month + "/" + getDateInfo(createdAt).year}</td>
        <td> <button onClick={() => props.handleEditAdmin(props.admins)} className='editBtn'><CiEdit /></button> </td>
        <td> <button onClick={() => props.handleDeleteAdmin(_id)} className='deleteBtn'>
            <MdDelete />
        </button> </td>
    </tr>
</> */}