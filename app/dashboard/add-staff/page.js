"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import { handleUpdate } from '@/fetchApi/UpdateMethod/handleAllUpdateMethod'
import { handlePostMethod } from '@/fetchApi/handlePostMethod/handlePostMethod'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default function AddStaff() {
  const [info, setInfo] = useState({ username: "", role: "", position: "", photo: "" })
  const [isLoading, setIsLoading] = useState(false);
  const { editValue } = useContext(GlobalState)

  useEffect(() => {
    if (editValue) {
      setInfo(editValue)
    }
  }, [])

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value })
  }

  const handleAddAndEditStaff = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    try {
      if (info.username.length < 5) {
        return toast.error("username is too short : (5)")
      }
      const postRoute = "/staffs/add "
      const editRoute = `/staffs/edit/${editValue._id}`
      let result;
      if (editValue) {
        result = await handleUpdate(editRoute, info)
      } else {
        result = await handlePostMethod(postRoute, info)
      }

      if (result) {
        toast.success(result.message)
      }


    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }

  }


  return (
    <div className='addStaffPage'>
      <h2 className='text-center my-3 text-2xl italic font-medium'>
        {editValue ? "edit Staff" : "Add Staff"}
      </h2>
      <form onSubmit={handleAddAndEditStaff}>
        <div>
          <input onChange={handleChange} type="text" value={info.username} className='input' name='username' placeholder='username' required />
        </div>
        <div>
          <input onChange={handleChange} type="text" value={info.role} className='input' name='role' placeholder='Role' required />
        </div>
        <div>
          <input onChange={handleChange} type="text" value={info.position} className='input' name='position' placeholder='position' required />
        </div>
        <div>
          <input onChange={handleChange} type="file" className='input' name='photo' />
        </div>
        <div className='m-auto'>
          <button className='formBtn uppercase '>
            {
              isLoading ? "waiting . . . " : editValue ? "Update +" : "Add +"
            }
          </button>
        </div>
      </form>
    </div>
  )
}
