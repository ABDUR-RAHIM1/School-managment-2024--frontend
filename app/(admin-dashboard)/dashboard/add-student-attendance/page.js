"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import Heading from '@/components/Utils/Heading'
import StudentAttendancetable from '@/components/dashboard/StudentAttendancetable'
import React, { useContext, useLayoutEffect, useState } from 'react'

export default function AddStudentAttendance() {
  const { getAllDataFunc, data, search, setSearch, postAllDataFunc } = useContext(GlobalState)



  useLayoutEffect(() => {
    const route = `/profile/all?search=${search}`
    getAllDataFunc(route)
  }, [search])


  return (
    <div className='adminPage'>
      <Heading text="Student Attendance" />


      <div className="search_wrap">
        <select onChange={(e) => setSearch(e.target.value)} name="byClassCode" id="byClassCode" className='input'>
          <option value="">Select Class</option>
          <option value="6">Class 6</option>
          <option value="7">Class 7</option>
          <option value="8">Class 8</option>
          <option value="9">Class 9</option>
          <option value="10">Class 10</option>
        </select>
        <select onChange={(e) => setSearch(e.target.value)} name="byClassGroup" id="byClassGroup" className='input'>
          <option value="">Select Group</option>
          <option value="science">Science</option>
          <option value="arts">Arts</option>
          <option value="commerce">Commerce</option>
        </select>
      </div>

      <div>
        Showing {data.length} Student In Class {search}
      </div>


      <div className="form">
        <StudentAttendancetable
          info={data}
          handlePostAttendance={postAllDataFunc}
        />
      </div>
    </div>
  )
}
