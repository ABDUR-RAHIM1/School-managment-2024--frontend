"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import Heading from '@/components/Utils/Heading'
import TeacherAttendancetable from '@/components/dashboard/TeacherAttendance'
import React, { useContext, useLayoutEffect } from 'react'

export default function AddTeacherAttendance() {
  const { getAllDataFunc, data, search, setSearch, postAllDataFunc } = useContext(GlobalState)



  useLayoutEffect(() => {
    const route = `/teachers/profile/all?search=${search}`
    getAllDataFunc(route)
  }, [search])


  return (
    <div className='adminPage'>
      <Heading text="Teacher Attendance System" />


      <div className="search_wrap">
        <input onChange={(e) => setSearch(e.target.value)} name="byName" id="byName" className='input' placeholder='Search By Name' />

        <input disabled type="text" value={"Teacher lists"} className='input' name='teacherDefaultValue' />

      </div>

      <div>
        Showing {data.length} Student In Class {search}
      </div>


      <div className="form">
        <TeacherAttendancetable
          info={data}
          handlePostAttendance={postAllDataFunc}
        />
      </div>
    </div>
  )
}
