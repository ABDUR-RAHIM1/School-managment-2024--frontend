import { GlobalState } from '@/ContextApi/ContextApi';
import React, { useContext, useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md'

export default function AttendanceEditModal(props) {
    const { editRoute } = props;

    const { editValue, editDataFunc, editLoading, setShowModal } = useContext(GlobalState)
    const [formData, setFormData] = useState({ status: "" })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (Object.keys(editValue).length !== 0) {
            setFormData(editValue)
        }
    }, [])

    const handleUpdate = () => { 
        const route = `${editRoute + editValue._id}` 
        editDataFunc(route, formData)
    }

    const closeModal = () => {
        setShowModal(false)
    }



    return (


        <div className="modalHeader">
            <div className="relative  rounded-md bg-slate-50 p-4 w-full max-w-md max-h-full">

                <div onClick={closeModal}>
                    <span className='iconBtn text-red-600 shadow-md'>
                        <MdClose />
                    </span>
                </div>

                <div className="p-4 md:p-5">
                    <h2 className='text-center text-2xl my-4'>Edit Attendance</h2>


                    <select onChange={handleChange} value={formData.status} name="status" className='input'>
                        <option className='text-red-700' value="">Status</option>
                        <option value="Absent">Absent</option>
                        <option value="Present">Present</option>
                        <option value="Late">Late</option>
                    </select>
                    <button onClick={handleUpdate} type='submit' className='formBtn'>
                        {
                            editLoading ? "Posting . ." : "Update"
                        }
                    </button>
                </div>
            </div>
        </div>

    )
}
