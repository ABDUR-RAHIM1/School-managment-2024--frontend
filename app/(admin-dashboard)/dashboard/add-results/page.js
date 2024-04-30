"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import Heading from '@/components/Utils/Heading'
import React, { useContext, useLayoutEffect, useState } from 'react'
import { MdAdd } from 'react-icons/md'

export default function AddResults() {
  const { search, setSearch, getAllDataFunc, postAllDataFunc, data, isLoading, editValue, editDataFunc } = useContext(GlobalState);

  const condition = Object.keys(editValue).length !== 0

  const initialFormData = {
    year: "",
    studentId: "",
    examName: "",
    subjects: [],
    marks: []
  }

  const [formData, setFormData] = useState(initialFormData)

  useLayoutEffect(() => {
    const route = `/profile/all?search=${search}`
    getAllDataFunc(route)

    //  set edit value in state
    if (condition) {
      setFormData(editValue)
    }
  }, [search])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  const handleResultForm = (e) => {
    e.preventDefault()
    const postRoute = "/results/add"
    const editRoute = `/results/edit/${editValue._id}`
    condition ?
      editDataFunc(editRoute, formData)
      :
      postAllDataFunc(postRoute, formData)
  }

  return (
    <div className='adminPage'>
      <Heading text={condition ? "Edit Result" : "Upload Result"} />

      <div className="form">
        <form onSubmit={handleResultForm}>

          <div className="search_wrap">
            <select disabled={condition} onChange={(e) => setSearch(e.target.value)} name="byClassCode" id="byClassCode" className='input'>
              <option value="">Select Class</option>
              <option value="6">Class 6</option>
              <option value="7">Class 7</option>
              <option value="8">Class 8</option>
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
            </select>

            <input type='text' value={formData.year} onChange={handleChange} name="year" id="year" placeholder='Year' className='input' />


          </div>


          <div className="form_group">


            <select disabled={condition} onChange={handleChange} value={formData.studentId} required name="studentId" id="studentId" className='input'>
              {
                data.map(st => (

                  <option key={st._id} value={st.studentId}>{
                    condition ? editValue.studentName : st.name
                  }</option>

                ))
              }
            </select>

            <input onChange={handleChange} type="text" value={formData.examName} name='examName' required placeholder='Exam Name' className='input' />
          </div>

          <div className="form_group">
            <input onChange={handleChange} type="text" value={formData.subjects} name='subjects' required placeholder='Subject List' className='input' />
            <input onChange={handleChange} type="text" value={formData.marks} name='marks' required placeholder='Marks List' className='input' />
          </div>

          <div className="form_btn_wrap mt-8">
            <button className='formBtn'> {
              isLoading ? "Uploading . . ." : condition ? "Update" : "Upload"
            } <span className='text-xl'><MdAdd /></span> </button>
          </div>

        </form>
      </div>

    </div>
  )
}
