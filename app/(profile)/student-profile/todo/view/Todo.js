"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import DeleteMethod from '@/Helpers/actions/DeleteMethod'
import ViewModel from '@/components/Utils/Clients/VIewModel'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'
import { FaDotCircle } from 'react-icons/fa'
import { MdDelete, MdEdit } from 'react-icons/md'

export default function SIngleTodo(props) {
  const { setDetailsData, setEditValue } = useContext(GlobalState);

  const { _id, title, desc, createdAt } = props.todo
  const router = useRouter()

  const [show, setShow] = useState(false)
  const [showModel, setShowModel] = useState(false)

  const handleToggle = () => {
    setShow(!show)
  }


  const handleDetails = (info) => {
    setDetailsData(info);
    setShowModel(true)
  };

  const handleCloseModel = () => {
    setShowModel(false)
  }

  const handleDelete = async (id) => {
    const route = `/todos/delete/${id}`
    DeleteMethod(route)
    router.refresh()
  }

  const handleEditTodo = (info) => {
    setEditValue(info)
    router.push("/student-profile/todo/add")
  }

  return (
    <div className='listCard relative'>
      <div className=' bg-gray-200 dark:bg-slate-900 py-1 px-2 text-sm flex items-center justify-between'>
        <p>Added : {new Date(createdAt).toLocaleDateString()} </p>
        <FaDotCircle onClick={handleToggle} className='text-2xl cursor-pointer hover:text-red-500 duration-200' />
      </div>
      <div className='text'>
        <h4 onClick={() => handleDetails(props.todo)} className=' cursor-pointer hover:underline font-medium capitalize my-2'>
          {title.length > 20 ? (title && title.slice(0, 20) + " . . .") : title}
        </h4>
        <p>
          {desc.length > 30 ? (desc && desc.slice(0, 30) + " . . .") : desc}
        </p>

        <div className={`${show ? "scale-y-1" : "scale-y-0"} origin-bottom duration-300 flex items-center justify-between mt-4 absolute bottom-0 left-0 w-full px-2 py-2`}>
          <span onClick={() => handleEditTodo(props.todo)} className='editBtn'>
            <MdEdit />
          </span>
          <span onClick={() => handleDelete(_id)} className='deleteBtn'>
            <MdDelete />
          </span>
        </div>

      </div>

      {
        showModel && <ViewModel
          component="todo"
          closeModal={handleCloseModel}
        />
      }
    </div>
  )
}

