"use client"
import { GlobalState } from '@/ContextApi/ContextApi';
import { handleUpdate } from '@/fetchApi/UpdateMethod/handleAllUpdateMethod';
import { handlePostMethod } from '@/fetchApi/handlePostMethod/handlePostMethod';
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export default function AddExamRoutine() {
  const { editValue } = useContext(GlobalState)
  const [isLoading, setIsLoding] = useState(false)
  const [info, setInfo] = useState({
    examName: "",
    classCode: "",
    subject: "",
    examDate: "",
    examTime: "",

  });
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value })
  }

  const condition = Object.keys(editValue).length !== 0

  const handleSubmitExamRoutine = async (e) => {
    e.preventDefault()
    setIsLoding(true)
    try {
      const postRoute = "/examroutine/add"
      const editRoute = `/examroutine/edit/${editValue._id}`
      let result;
      if (condition) {
        result = await handleUpdate(editRoute, info);
      } else {
        result = await handlePostMethod(postRoute, info);
      }
      if (result) {
        toast.success(result.message)
      }

    } catch (error) {
      console.log(error)
    } finally {
      setIsLoding(false)
    };

  }

  // set info value for edit
  useEffect(() => {
    if (condition) {
      setInfo({
        ...editValue,
        examDate : editValue.examDate
      })
    }
  }, [editValue])


  return (
    <div className='adminPage'>
      <h2 className='text-2xl text-center my-4 font-medium'>
        {
          condition ? "Edit Exam Routine" : "Add Exam Routine"
        }
      </h2>

      <form onSubmit={handleSubmitExamRoutine} className='form'>
        <div className='form_group'>
          <input value={info.examName} onChange={handleChange} type="text" className='input' placeholder='Exam Name' name='examName' required />
          <input value={info.classCode} onChange={handleChange} type="number" className='input' placeholder='Class' name='classCode' required />
        </div>

        <div className='form_group'>
          <input value={info.subject} onChange={handleChange} type="text" className='input' placeholder='Subject' name='subject' required />
        </div>
        <div className='form_group'>
          <input value={info.examDate} onChange={handleChange} type="date" className='input' placeholder='examDate' name='examDate' required />

          <input value={info.examTime} onChange={handleChange} type="time" className='input' placeholder='Exam Time' name='examTime' required />
        </div>

        <div className="form_btn_wrap">
          <button className='formBtn'>
            {
              isLoading ? "Posting. . ." : condition? "Update +" : "Add +"
            }
          </button>
        </div>
      </form>
    </div>
  )
}
