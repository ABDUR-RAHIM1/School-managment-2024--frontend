"use client";
import { GlobalState } from '@/ContextApi/ContextApi';
import Heading from '@/components/Utils/Heading'
import React, { useContext, useEffect, useState } from 'react'
import { FaDotCircle } from 'react-icons/fa';
import { MdDelete, MdEdit } from 'react-icons/md';
import { toast } from 'react-toastify';

//  student profile
export default function ViewTodo() {

    const { getMethodWithToken, tokenData } = useContext(GlobalState)

    useEffect(() => {

        const tokenString = window.localStorage.getItem("STUDENT_IS_LOGGED_IN")

        if (!tokenString) {
            toast.error("unAuthencated User")
        }

        const token = JSON.parse(tokenString)
        const route = "/todos/users"
        getMethodWithToken(route, token)

    }, [])


    return (
        <div className='adminPage'>
            <Heading text={"Todos"} />
            <div className="listCardWrapper">
                {
                    tokenData && tokenData.map(data => (
                        <Todos
                            key={data._id}
                            todos={data}
                        />
                    ))
                }
            </div>
        </div>
    )
}


const Todos = (props) => {
    const { title, desc, createdAt } = props.todos

    const [show, setShow] = useState(false)

    const handleToggle = () => {
        setShow(!show)
    }


    const handleDelete = () => {
        alert("delete is working under proccess")
    }


    return (
        <div className='listCard relative'>
            <div className=' bg-gray-200 py-1 px-2 text-sm flex items-center justify-between'>
                <p>Added : {new Date(createdAt).toLocaleDateString()} </p>
                <FaDotCircle onClick={handleToggle} className='text-2xl cursor-pointer hover:text-red-500 duration-200' />
            </div>
            <div className='text'>
                <p>{title}</p>
                <p>{desc}</p>

                <div className={`${show ? "scale-y-1" : "scale-y-0"} origin-bottom duration-300 flex items-center justify-between mt-4 absolute bottom-0 left-0 w-full px-2 py-2`}>
                    <span className='editBtn'>
                        <MdEdit />
                    </span>
                    <span onClick={handleDelete} className='deleteBtn'>
                        <MdDelete />
                    </span>
                </div>

            </div>
        </div>
    )
}