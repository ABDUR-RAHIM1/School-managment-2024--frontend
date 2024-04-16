"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import AddNewButton from '@/components/Utils/AddNewButton'
import Heading from '@/components/Utils/Heading'
import React, { useContext, useEffect, useState } from 'react'
import { MdAdd } from 'react-icons/md'

export default function AddBookList() {

  const initialFormData = {
    classCode: "",
    group: "",
    subjectList: [],
    optional: ""
  }

  const [formData, setFormData] = useState(initialFormData)
  const { postAllDataFunc, isLoading, editValue, editDataFunc } = useContext(GlobalState)
  const condition = Object.keys(editValue).length !== 0


  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
  }


  const handleAddUpdateBookList = (e) => {
    e.preventDefault();
    const postRoute = "/booklist/add"
    const updateRoute = `/booklist/edit/${editValue._id}`
    condition ?
      editDataFunc(updateRoute, formData)
      :
      postAllDataFunc(postRoute, formData)
  }

  useEffect(() => {
    if (condition) {
      setFormData(editValue)
    }
  }, [])

  return (
    <div className='adminPage'>
      <Heading text={condition ? "Edit Book List" : "Add Book List"} />
       <AddNewButton/>
      <div className='form'>
        <form onSubmit={handleAddUpdateBookList}>
          <div className="form_group">

            <select required onChange={handleChange} name="classCode" value={formData.classCode} className='input'>
              <option value="">Select Class</option>
              <option value="6">Class 6</option>
              <option value="7">Class 7</option>
              <option value="8">Class 8</option>
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
            </select>


            <select required onChange={handleChange} name="group" value={formData.group} className='input'>
              <option value="">Select Group</option>
              <option value="arts">Arts</option>
              <option value="science">Science</option>
              <option value="commerce">Commerce</option>
            </select>

          </div>

          <div className="form_group">
            <input required onChange={handleChange} value={formData.subjectList} name='subjectList' type="text" placeholder='subject list' className='input' />
            <input required onChange={handleChange} value={formData.optional} name='optional' type="text" placeholder='Optinal Subject' className='input' />
          </div>

          <div className="form_btn_wrap">
            <button className='formBtn'> {isLoading ? "Posting . . ." : condition ? "Update" : "Add"} <span className='text-xl'><MdAdd /></span> </button>
          </div>

        </form>
      </div>

    </div>
  )
}
