"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import { handleAllDeleteMethod } from '@/fetchApi/DeleteMethod/handleAllDeleteMethod'
import Image from 'next/image'
import React, { useContext } from 'react'
import { toast } from 'react-toastify'
import dummyImg from "@/public/images/sd.png"
import { handleStatusController } from '@/fetchApi/UpdateMethod/handleAllUpdateMethod'
import Link from 'next/link'
import DataTable from 'react-data-table-component';
import { MdDelete } from 'react-icons/md'

//  child of manage-student component
export default function StudentTable(props) {
  const { reload, setReload } = useContext(GlobalState)
  const route = "/student/auth/delete-many"
  
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

  const columns = [
    {
      name: <div>
        {props.isCheckId.length > 0 ?
          <span onClick={() => props.handleDeleteManyStudent(route)} className='deleteBtn'> <MdDelete /> </span>
          : "Select"}
      </div>,
      cell: info => <input onChange={(e) => props.handleCheck(e, info._id)} type="checkbox" />
    },
    {
      name: 'Image',
      cell: info =>
        <img src={info.photo || dummyImg} alt="Student" style={{ width: 40, height: 40, border: "1px solid gray", borderRadius: "50%" }} />
      ,

    },
    {
      name: 'Username',
      selector: info => info.username,
    },
    {
      name: 'Email',
      selector: info => info.email,
    },
    {
      name: 'role',
      selector: info => info.role,
    },
    {
      name: 'Joined',
      selector: info => info.createdAt,
      cell: info => new Date(info.createdAt).toLocaleDateString('en-US'),
    },
    {
      name: 'Status',
      cell: info => <select value={info.status} onChange={(e) => handleStudent(e, info._id)} name="status" className={` ${info.status === "active" ? "bg-blue-500" : info.status === "banned" ? "bg-black" : "bg-red-600"
        } cursor-pointer text-white py-2 px-3 focus:outline-none rounded-md`}>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
        <option value="banned">Banned</option>
      </select>
    },
    {
      name: "Reject",
      cell: info => <button onClick={() => handleDeleteStudent(info._id)} className='py-2 px-3 bg-red-500 rounded-md text-cyan-50 hover:bg-red-600'>
        Reject
      </button>
    }

  ];



  return (
    <DataTable
      columns={columns}
      data={props.student}
      pagination
    />
  )
}

