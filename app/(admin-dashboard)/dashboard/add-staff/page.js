"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import { UploadFIle } from '@/Helpers/UploadFile'
import Lable from '@/components/Utils/Lable'
import Spinner from '@/components/Utils/Spinner'
import { handleUpdate } from '@/fetchApi/UpdateMethod/handleAllUpdateMethod'
import { handlePostMethod } from '@/fetchApi/handlePostMethod/handlePostMethod'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default function AddStaff() {
  const [info, setInfo] = useState({ username: "", role: "", position: "", photo: "" })
  const [isLoading, setIsLoading] = useState(false);
  const { editValue, imgLoading, setImgLoading } = useContext(GlobalState)

  useEffect(() => {
    if (editValue) {
      setInfo(editValue)
    }
  }, [])

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value })
  }
  const handleFIleChange = async (e) => {
    setImgLoading(true)
    try {
      const file = e.target.files[0];
      const result = await UploadFIle(file);
      if (result) {
        setInfo({ ...info, photo: result })
      }
    } catch (error) {
      console.log(error)
    } finally {
      setImgLoading(false)
    }
  }
  console.log(info)
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
      if (Object.keys(editValue).length !== 0) {
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
        {Object.keys(editValue).length !== 0 ? "Edit Staff" : "Add Staff"}

      </h2>
      <form onSubmit={handleAddAndEditStaff}>
        {/* {
          info.photo.length <= 0 ? "upload" : "ok"
        } */}
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
          <input onChange={handleFIleChange} type="file" className='input' name='photo' />
          {imgLoading && <Spinner />}
        </div>
        <div className='m-auto'>
          <button disabled={imgLoading} className='formBtn uppercase '>
            {
              isLoading ? "waiting . . . " : Object.keys(editValue).length !== 0 ? "Update +" : "Add +"
            }
          </button>
        </div>
      </form>
    </div>
  )
}
