"use client"
import { GlobalState } from '@/ContextApi/ContextApi';
import React, { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { MdAdd, MdRunCircle } from 'react-icons/md';
import { toast } from 'react-toastify';

export default function AddFeeTable(props) {
    const { isLoading, postAllDataFunc } = useContext(GlobalState)
    const { info } = props;

 
    const [feeInfo, setFeeInfo] = useState({
        studentId: "", feeAmount: "", feePaid: true, feeFor: ""
    })

 

    const handleAddFee = () => {
        const allPropertiesFilled = Object.values(feeInfo).every(value => value !== "");

        if (allPropertiesFilled) {
            const route = "/fee/add";
            postAllDataFunc(route, feeInfo);
        } else {
            toast.error("Input Value is missing !")
        }


    }


    const columns = [
        {
            name: "Name",
            selector: info => info.name
        },
        {
            name: "Class",
            selector: info => info.classCode
        },
        {
            name: "Roll",
            selector: info => info.roll
        },
        {
            name: "Group",
            selector: info => info.group
        },
        {
            name: "Amount",
            selector: info =>
                <div className='w-[100px]'>
                    <input required value={feeInfo.feeAmount} onChange={(e) => setFeeInfo({ ...feeInfo, feeAmount: e.target.value, studentId: info.studentId })} name='feeAmount' className='input' type="number" placeholder='00' />
                </div>
        },
        {
            name: "Add",
            selector: info => <span onClick={handleAddFee} className='editBtn flex items-center'>  <small className='text-sm'>Add</small>
                {
                    isLoading ? <MdRunCircle /> : <MdAdd />
                }
            </span>
        }

    ]
    return (
        <>
            <input required value={feeInfo.feeFor} onChange={(e) => setFeeInfo({ ...feeInfo, feeFor: e.target.value })} className='input' name="feeFor" placeholder='Fee For ?' />
            <DataTable
                columns={columns}
                data={info}
                pagination
            />
        </>
    )
}
