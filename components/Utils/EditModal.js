"use client"
import { GlobalState } from '@/ContextApi/ContextApi';
import React, { useContext, useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5";
import Spinner from './Spinner';

export default function EditModal(props) {
    const [info, setInfo] = useState({ username: "", email: "", password: "", photo: "" })
    const { closeModal } = props;

    const { editValue, editDataFunc, editLoading, UploadFIle, imgUrl, imgLoading } = useContext(GlobalState)

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "photo") {
            const file = e.target.files[0]
            UploadFIle(file)
        }
        setInfo({ ...info, [name]: value })
    }

    useEffect(() => {
        if (editValue !== null) {
            setInfo(editValue)
        }
        if (imgUrl) {
            setInfo((prevInfo) => ({ ...prevInfo, photo: imgUrl }));
        }
    }, [editValue, imgUrl]);


    //  update admin handler
    const handleEditAdmin = (e) => {
        e.preventDefault();
        const route = `/student/auth/edit/${editValue._id}`
        editDataFunc(route, info);

    }



    return (
        <>

            <div className="modalHeader">
                <div className="relative p-4 w-full max-w-md max-h-full">

                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">

                            </h3>
                            <button onClick={closeModal} type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg"  >
                                <span className='text-3xl'><IoClose /></span>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        <div className="p-4 md:p-5">
                            <form onSubmit={handleEditAdmin} className="space-y-4" action="#">
                                <div>
                                    <label htmlFor="username" className="modalLabel"> username</label>
                                    <input onChange={handleChange} value={info.username} type="text" name="username" id='username' className="input" placeholder="username" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="modalLabel"> email</label>
                                    <input onChange={handleChange} value={info.email} type="email" name="email" id="email" className="input" placeholder="Email" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="modalLabel"> new password</label>
                                    <input onChange={handleChange} value={info.password} type="password" name="password" id="password" placeholder="••••••••" className="input" />
                                </div>
                                <div>
                                    <label htmlFor="photo" className="modalLabel"> Change Photo</label>
                                    <input
                                        onChange={handleChange}
                                        type="file"
                                        name="photo"
                                        id="photo"
                                        className={`input ${imgLoading ? "border-red-500" : "border-blue-500"}`}
                                    />
                                </div>

                                <button disabled={editLoading} type="submit" className="modalBtn">
                                    {
                                        editLoading ? <Spinner /> : "Update Now"
                                    }
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
