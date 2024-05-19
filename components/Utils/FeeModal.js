import { GlobalState } from '@/ContextApi/ContextApi';
import React, { useContext, useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md'
import Spinner from './Spinner';

export default function FeeModal(props) {
    const { closeModel } = props;
    const { editValue, editDataFunc, editLoading } = useContext(GlobalState)
    const [info, setInfo] = useState({ feeFor: "", feeAmount: "" })

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }


    useEffect(() => {
        if (Object.keys(editValue).length !== 0) {
            setInfo(editValue)
        }
    }, [])

    const handleUpdateFee = (event) => {
        event.preventDefault();
        const route = `/fee/edit/${editValue._id}`
        editDataFunc(route, info)
    }


    return (


        <div className="modalHeader">
            <div className="relative  rounded-md bg-slate-50 p-4 w-full max-w-md max-h-full">

                <div>
                    <span onClick={() => closeModel()} className='iconBtn text-red-600 shadow-md'>
                        <MdClose />
                    </span>
                </div>

                <div className="p-4 md:p-5">
                    <h2 className='text-center text-2xl my-4'>Edit Fee's</h2>
                    <input defaultValue={info.feeFor} onChange={handleChange} name='feeFor' type="text" className='input' placeholder='Fee For ?' />
                    <input defaultValue={info.feeAmount} onChange={handleChange} name='feeAmount' type="number" className='input' placeholder='Fee Amount' />
                    <button onClick={handleUpdateFee} type='submit' className='formBtn'>
                        {
                            editLoading ? <Spinner /> : "Update"
                        }
                    </button>
                </div>
            </div>
        </div>

    )
}
