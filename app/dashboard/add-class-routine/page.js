"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import AddNewButton from '@/components/Utils/AddNewButton'
import { handleAllGetMethod } from '@/fetchApi/GetMethod/handleAllGetMethod'
import { handleUpdate } from '@/fetchApi/UpdateMethod/handleAllUpdateMethod'
import { handlePostMethod } from '@/fetchApi/handlePostMethod/handlePostMethod'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default function AddClassRoutine() {
  const [info, setInfo] = useState({ teacherId: "", classCode: "", subject: "", dayOfWeek: "", startTime: "", endTime: "" })
  const [isLoading, setIsLoding] = useState(false)
  const [teacher, setTeacher] = useState([])
  const { editValue } = useContext(GlobalState);


  useEffect(() => {
    const getAllTeacher = async () => {
      const teacherList = await handleAllGetMethod("/teachers/auth/all");
      setTeacher(teacherList)
    }

    getAllTeacher()

    //   set edit value in info State
    if (Object.keys(editValue).length !== 0) {
      setInfo(editValue); 
    }
  }, []);

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value })
  }


  //  submit and edit handler with conditions
  const handleClassRoutineSubmit = async (e) => {
    e.preventDefault();
    setIsLoding(true)
    try {
      const postRoute = "/routine/add"
      const editRoute = `/routine/edit/${editValue._id}`
      let result;
      if (Object.keys(editValue).length !== 0) {
        result = await handleUpdate(editRoute, info);
      } else {
        result = await handlePostMethod(postRoute, info);
      };

      if (result) {
        toast.success(result.message)
      }

    } catch (error) {
      console.log(error)
    } finally {
      setIsLoding(false)
    }
  }


  return (
    <div className='adminPage'>
      <div className='flex items-center justify-center gap-3'>
        <h2 className='text-center text-2xl font-medium'>
          {
            Object.keys(editValue).length !== 0 ? "Edit Class Routine" : "Add Class Routine"
          }
        </h2>
        <AddNewButton />
      </div>

      <form onSubmit={handleClassRoutineSubmit} className='py-10 px-4 bg-gray-50'>
        <div className='w-full flex gap-2'>

          <select disabled={Object.keys(editValue).length !== 0} required value={info.teacherId} onChange={handleChange} name="teacherId" className='input'>
            {
              teacher.map(tc => (
                <option key={tc._id} value={tc._id}>{
                  Object.keys(editValue).length !== 0 ? info.teacherName : tc.username
                }</option>
              ))
            }
          </select>
          <input required value={info.classCode} onChange={handleChange} className='input' type="text" name='classCode' placeholder='Class' />
        </div>

        <div className='w-full flex gap-2'>
          <input required value={info.subject} onChange={handleChange} className='input' type="text" name='subject' placeholder='subject Name' />

          <select required value={info.dayOfWeek} onChange={handleChange} name="dayOfWeek" className='input'>
            <option value="">day Of Week</option>
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
          </select>
        </div>

        <div className='w-full flex gap-2'>
          <input required value={info.startTime} onChange={handleChange} className='input' type="text" name='startTime' placeholder='start Time' />
          <input required value={info.endTime} onChange={handleChange} className='input' type="text" name='endTime' placeholder='end Time' />
        </div>


        <div className='w-full md:w-[60%] m-auto'>
          <button className='formBtn'>
            {
              isLoading ? "Posting . . ." : Object.keys(editValue).length !== 0 ? "Update" : "Add"
            }
          </button>
        </div>

      </form>

    </div>
  )
}
