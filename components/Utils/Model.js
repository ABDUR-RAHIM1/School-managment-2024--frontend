"use client"
import { handleEditAdminMethod } from '@/fetchApi/admin/api';
import React, { useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5";
import { toast } from 'react-toastify';
export default function Model(props) {
    const [info, setInfo] = useState({ username: "", email: "", password: "", role: "" })
    const { data, closeModal } = props;
    const [isLoading, setIsLoading] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value })
    }

    useEffect(() => {
        if (data !== null) {
            setInfo(data)
        }
    }, [])


    //  update admin handler
    const handleEditAdmin = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        try {
            const route = `/admin/auth/edit/${data._id}`
            const result = await handleEditAdminMethod(route, info);
            if (result) {
                toast.success(result.message)
            }else{
                toast.error(result.message)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
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
                                    <label htmlFor="email" className="modalLabel"> username</label>
                                    <input onChange={handleChange} value={info.username} type="text" name="username" className="modalInput" placeholder="username" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="modalLabel"> email</label>
                                    <input onChange={handleChange} value={info.email} type="email" name="email" id="email" className="modalInput" placeholder="Email" />
                                </div>
                                <div>
                                    <label htmlFor="role" className="modalLabel"> new password</label>
                                    <input onChange={handleChange} value={info.password} type="password" name="password" id="password" placeholder="••••••••" className="modalInput" />
                                </div>

                                <div>
                                    <label htmlFor="role" className="modalLabel"> role</label>
                                    <select value={info.role} onChange={handleChange} className='modalInput' name="role" id="">
                                        <option value="admin">Admin</option>
                                        <option value="moderator">Moderator</option>
                                    </select>
                                </div>

                                <button disabled={isLoading} type="submit" className="modalBtn">
                                      {
                                        isLoading ? "waiting . . .": "Update Now"
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
