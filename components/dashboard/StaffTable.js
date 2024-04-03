import React from 'react'
import DataTable from 'react-data-table-component';
import dummyImage from "@/public/images/sd.png"
import { MdDelete } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
export default function StaffTable(props) {
    const { staff } = props;

    const columns = [
        {
            name: <div>
                {
                    props.checkIds.length > 0 ?
                        <span onClick={props.handleDeleteStaff} className='deleteBtn'><MdDelete /></span> : "select"
                }
            </div>,
            cell: info => <input
                onChange={(e) => props.handleCheckBox(e, info._id)}
                type="checkbox" />
        },
        {
            name: "Photo",
            selector: (info) => info.photo,
            cell: (info) => (
                <img
                    src={info.photo || dummyImage}   
                    className="w-10 h-10 rounded-full border border-gray-50"
                    alt=""
                />
            ),
        },
        {
            name: "Name",
            selector: info => info.username
        },
        {
            name: "role",
            selector: info => info.role
        },
        {
            name: "position",
            selector: info => info.position
        },
        {
            name: "Edit",
            selector: info => info.position,
            cell: info => <span onClick={() => props.handleEditStaff(info)} className='editBtn bg-blue-600 text-white'><CiEdit /></span>
        },
    ]
    return (
        <DataTable
            columns={columns}
            data={staff}
            pagination
        />
    )
}
