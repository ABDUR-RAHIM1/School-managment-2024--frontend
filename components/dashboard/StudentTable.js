"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import getDateInfo from '@/Helpers/Date'
import { handleAllDeleteMethod } from '@/fetchApi/DeleteMethod/handleAllDeleteMethod'
import { activateResource } from '@/fetchApi/UpdateMethod/handleAllUpdateMethod'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import dummyImg from "@/public/images/sd.png"

export default function StudentTable(props) {
  const { reload, setReload } = useContext(GlobalState)
  const { _id, username, email, role, status, createdAt , profile } = props.student

  const handleActivedStatus = async (id) => {
    setIsLoading(true)
    try {
      const route = `/student/auth/${id}/approve`
      const result = await activateResource(route);
      if (result) {
        toast.success(result.message)
        setReload(!reload)
      } else {
        toast.error(result.message)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }


  const handleDeleteStudent = async (id) => {
    try {
      const route = `/student/auth/delete/${id}`
      const result = await handleAllDeleteMethod(route);
      if (result) {
        toast.success(result.message)

        setReload(!reload)
      } else {
        toast.error(result.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>
        <div className='flex items-center gap-1'>
          <Image
            src={ profile.photo ? profile.photo : dummyImg}
            width={50}
            height={50}
            className='rounded-full border '
          />
          {username}
        </div>
      </td>
      <td>{email}</td>
      <td>{role}</td>
      <td className={status === "pending" ? "text-red-500" : "text-blue-500"}>{status}</td>
      <td>{getDateInfo(createdAt).day + "/" + getDateInfo(createdAt).month + "/" + getDateInfo(createdAt).year}</td>
      <td>
        <button onClick={() => handleActivedStatus(_id)} disabled={status === "active"} className={`${status === "active" ? "bg-green-600 " : "bg-blue-600  hover:bg-blue-500 "} capitalize py-2 px-3 rounded-md text-cyan-50`}>
          {
            status === "active" ? "activated" : "activate"
          }
        </button>
      </td>
      <td>
        <button onClick={() => handleDeleteStudent(_id)} className='py-2 px-3 bg-red-500 rounded-md text-cyan-50 hover:bg-red-600'>
          Reject
        </button>
      </td>
    </tr>
  )
}
