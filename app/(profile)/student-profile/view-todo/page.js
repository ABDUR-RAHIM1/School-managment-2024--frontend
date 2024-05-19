"use client";
import { GlobalState } from '@/ContextApi/ContextApi';
import ViewModel from '@/components/Utils/Clients/VIewModel';
import Heading from '@/components/Utils/Heading'
import React, { useContext, useEffect, useState } from 'react'
import { FaDotCircle } from 'react-icons/fa';
import { MdDelete, MdEdit } from 'react-icons/md';
import { toast } from 'react-toastify';

//  student profile
export default function ViewTodo() {

    const { getMethodWithToken, tokenData, deleteMethodWithToken, reload, setDetailsData } = useContext(GlobalState)

    const [show, setShow] = useState(false)
    const [token, setToken] = useState(null)
    const [showModel, setShowModel] = useState(false)



    useEffect(() => {

        const tokenString = window.localStorage.getItem("STUDENT_IS_LOGGED_IN")

        if (!tokenString) {
            toast.error("unAuthencated User")
        }

        const token = JSON.parse(tokenString)
        setToken(token)
        const route = "/todos/users"
        getMethodWithToken(route, token)

    }, [reload])

    const handleToggle = () => {
        setShow(!show)
    }


    const handleDelete = (id) => {
        const route = `/todos/delete/${id}`
        deleteMethodWithToken(route, token)
    }

    const handleCloseModel = () => {
        setShowModel(false)
    }

    const handleDetails = (detailsData) => {
        setDetailsData(detailsData)
        setShowModel(true)
    }

    return (
        <div className='adminPage'>
            <Heading text={"Todos"} />
            <div className="listCardWrapper">
                {
                    tokenData && tokenData.map(data => (
                        <Todos
                            key={data._id}
                            todos={data}
                            handleToggle={handleToggle}
                            show={show}
                            handleDelete={handleDelete}
                            showModel={showModel}
                            handleCloseModel={handleCloseModel}
                            handleDetails={handleDetails}
                        />
                    ))
                }
            </div>
        </div>
    )
}



//  helper component
const Todos = (props) => {
    const { _id, title, desc, createdAt } = props.todos

    const { handleDelete, handleToggle, show, showModel, handleCloseModel, handleDetails } = props;


    return (
        <div className='listCard relative'>
            <div className=' bg-gray-200 py-1 px-2 text-sm flex items-center justify-between'>
                <p>Added : {new Date(createdAt).toLocaleDateString()} </p>
                <FaDotCircle onClick={handleToggle} className='text-2xl cursor-pointer hover:text-red-500 duration-200' />
            </div>
            <div className='text'>
                <p onClick={() => handleDetails(props.todos)} className=' cursor-pointer hover:underline font-medium capitalize my-2'>
                    {title.length > 20 ? (title && title.slice(0, 20) + " . . .") : title}
                </p>
                <p>
                    {desc.length > 30 ? (desc && desc.slice(0, 30) + " . . .") : desc}
                </p>

                <div className={`${show ? "scale-y-1" : "scale-y-0"} origin-bottom duration-300 flex items-center justify-between mt-4 absolute bottom-0 left-0 w-full px-2 py-2`}>
                    <span className='editBtn'>
                        <MdEdit />
                    </span>
                    <span onClick={() => handleDelete(_id)} className='deleteBtn'>
                        <MdDelete />
                    </span>
                </div>

            </div>

            {
                showModel && <ViewModel closeModel={handleCloseModel} />
            }
        </div>
    )
}