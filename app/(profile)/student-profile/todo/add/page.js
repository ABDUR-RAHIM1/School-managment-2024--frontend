"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import Heading from '@/components/Utils/Heading'
import Inputs from '@/components/Utils/Inputs'
import Spinner from '@/components/Utils/Spinner'
import React, { useContext, useEffect, useState } from 'react'
import { MdAdd } from 'react-icons/md'

//  student profile 
export default function AddTodoPage() {
    const { studentToken, isLoading, postDataWithToken, editValue, updateMethodWithToken, editLoading } = useContext(GlobalState)

    const [formData, setFormData] = useState({ title: "", desc: "" })

    const condition = Object.keys(editValue).length !== 0

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((preState) => ({
            ...preState,
            [name]: value
        }))
    }

    const handleSubmitTodo = (e) => {
        e.preventDefault()


        const postRoute = "/todos/add"
        const putRoute = `/todos/edit/${editValue._id}`
        condition ?
            updateMethodWithToken(putRoute, studentToken, formData)
            :
            postDataWithToken(postRoute, studentToken, formData)

    }


    useEffect(() => {

        if (condition) {
            setFormData(editValue)
        }
    }, [editValue])



    return (
        <div className='adminPage'>
            <Heading text={condition ? "Update Todo" : "Add Todo"} />

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
                            isLoading || editLoading ? <Spinner /> : condition ? "Update Now" : " Add Now"
                        }
                        <MdAdd className=' text-2xl' />
                    </button>
                </div>

            </form>
        </div>
    )
}
