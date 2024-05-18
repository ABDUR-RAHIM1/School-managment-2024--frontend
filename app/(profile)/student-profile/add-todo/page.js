"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import Heading from '@/components/Utils/Heading'
import Inputs from '@/components/Utils/Inputs'
import Spinner from '@/components/Utils/Spinner'
import React, { useContext, useState } from 'react'
import { MdAdd } from 'react-icons/md'
import { toast } from 'react-toastify'

//  student profile 
export default function AddTodoPage() {
    const { isLoading, postDataWithToken } = useContext(GlobalState)
    const [formData, setFormData] = useState({ title: "", desc: "" })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((preState) => ({
            ...preState,
            [name]: value
        }))
    }

    const handleSubmitTodo = (e) => {
        e.preventDefault()

        const tokenString = window.localStorage.getItem("STUDENT_IS_LOGGED_IN");
        if (!tokenString) {
            toast.error("unAuthenciation user!")
        }
        const route = "/todos/add"
        const token = JSON.parse(tokenString)
        postDataWithToken(route, token, formData)
        
    }
 

    return (
        <div className='adminPage'>
            <Heading text={"Add Todo"} />

            <form onSubmit={handleSubmitTodo} className='form'>
                <Inputs
                    type="text"
                    name="title"
                    value={formData.title}
                    placeholder="Todo Subject"
                    onChange={handleChange}
                />
                <textarea
                    name="desc"
                    id='desc'
                    rows={10}
                    value={formData.desc}
                    placeholder="Todo Description"
                    onChange={handleChange}
                    required
                    className='input'
                />

                <div className="form_btn_wrap">
                    <button className='formBtn'>
                        {
                            isLoading ? <Spinner /> : " Add Todo"
                        }
                        <MdAdd className=' text-2xl' />
                    </button>
                </div>

            </form>
        </div>
    )
}
