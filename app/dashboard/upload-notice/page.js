"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import Heading from '@/components/Utils/Heading'
import React, { useContext, useEffect, useState } from 'react'

export default function UploadNotice() {
  const { postAllDataFunc, isLoading, editValue, editDataFunc } = useContext(GlobalState)
  const [info, setInfo] = useState({ subject: "", details: "" })

  const condition = Object.keys(editValue).length !== 0;

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value })
  }


  const handleUploadEditNotice = (e) => {
    e.preventDefault()
    const uploadRoute = "/notice/add"
    const editRoute = `/notice/edit/${editValue._id}`
    condition ?
      editDataFunc(editRoute, info)
      :
      postAllDataFunc(uploadRoute, info)
  }

  useEffect(() => {
    if (condition) {
      setInfo(editValue)
    }
  }, [])
console.log(info)
  return (
    <div className='adminPage'>
      <Heading text={condition ? "Edit Notice" : "Upload Notice"} />
      <form className='form' onSubmit={handleUploadEditNotice}>
        <input onChange={handleChange} type="text" value={info.subject} name='subject' className='input' required placeholder='Subject' />
        <textarea onChange={handleChange} value={info.details} name="details" className='input' required cols="30" rows="10" placeholder='Write Notice Details here . . .' />
        <div className='form_btn_wrap'>
          <button className='formBtn'>
            {
              isLoading ? "Posting . . ." : condition ? "Update +" : "Upload +"
            }
          </button>
        </div>
      </form>
    </div>
  )
}
