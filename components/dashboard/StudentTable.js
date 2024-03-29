"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import getDateInfo from '@/Helpers/Date'
import { handleAllDeleteMethod } from '@/fetchApi/DeleteMethod/handleAllDeleteMethod'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import dummyImg from "@/public/images/sd.png"
import { TiTick } from "react-icons/ti";
import { TbHandClick } from 'react-icons/tb'
import { handleStatusController } from '@/fetchApi/UpdateMethod/handleAllUpdateMethod'

export default function StudentTable(props) {
  const { reload, setReload } = useContext(GlobalState)
  const { _id, username, email, role, status, createdAt, profile } = props.student


  const handleStudent = async (e, id) => {
    const selectedStatus = e.target.value;

    const info = { status: selectedStatus }
    try {
      const route = `/student/auth/${id}/approve`;
      const result = await handleStatusController(route, info);
      if (result.ok) {
        toast.success(result.message)
        setReload(!reload)
      } else {
        toast.error(result.message)
      }
    } catch (error) {
      console.log(error);
    }
  };




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
        <input onClick={(e) => props.handleCheck(e, _id)} type="checkbox" />
      </td>
      <td>
        <div className='flex items-center gap-1'>
          <Image
            alt='student'
            src={profile.photo ? profile.photo : dummyImg}
            width={50}
            height={50}
            className='rounded-full border '
          />
          {username}
        </div>
      </td>
      <td>{email}</td>
      <td>{role}</td>
      <td>{getDateInfo(createdAt).day + "/" + getDateInfo(createdAt).month + "/" + getDateInfo(createdAt).year}</td>

      <td>
        <select value={status.statusInfo} onChange={(e) => handleStudent(e, _id)} name="status" className={` ${
           status === "active" ? "bg-blue-500" : status === "banned" ? "bg-black" : "bg-red-600"
        } cursor-pointer text-white py-2 px-3 focus:outline-none rounded-md`}>
          <option value="active">Active</option>
          <option value="pending">Pending</option>
          <option value="banned">Banned</option>
        </select>

      </td>
      <td>
        <button onClick={() => handleDeleteStudent(_id)} className='py-2 px-3 bg-red-500 rounded-md text-cyan-50 hover:bg-red-600'>
          Reject
        </button>
      </td>
    </tr>
  )
}
