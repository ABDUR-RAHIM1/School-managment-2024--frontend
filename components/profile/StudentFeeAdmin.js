"use client"
import React from 'react'
import DataTable from 'react-data-table-component';
import { CiWarning } from 'react-icons/ci';
import { MdOutlineFileDownloadDone } from 'react-icons/md';

export default function StudentFeeAdmin(props) {
    const { info } = props;
    const columns = [
        {
            name: "fee For",
            selector: info => info.feeFor
        },
        {
            name: "fee Amount",
            selector: info => info.feeAmount
        },
        {
            name: "Status",
            selector: info => info.feePaid,
            cell: info => <div>
                {
                    info.feePaid ? <span className='iconBtn bg-blue-600 text-white'>
                        <MdOutlineFileDownloadDone />
                    </span> : <span className='iconBtn bg-yellow-600 text-white'>
                        <CiWarning />
                    </span>
                }
            </div>
        },
        {
            name: "Date",
            selector: info => new Date(info.createdAt).toLocaleDateString("en-US")
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
