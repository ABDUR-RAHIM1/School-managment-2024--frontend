'use client'
import { GlobalState } from '@/ContextApi/ContextApi'
import AttendanceEditModal from '@/components/Utils/AttendanceEditModal'
import Loader from '@/components/Utils/Loader'
import PageHeader from '@/components/Utils/PageHeader'
import StudentAttendanceManagmentTable from '@/components/dashboard/StudentAttendanceManagmentTable'
import React, { useContext, useLayoutEffect, useState } from 'react'

export default function ManageStudentAttendance() {
  const { getAllDataFunc, isLoading, data, search, setSearch, reload, HandleCheckIds, checkIds, multipleDeleteFunc, setEditValue, showModal, setShowModal } = useContext(GlobalState)



  useLayoutEffect(() => {
    const route = `/attendence/all?search=${search}`
    getAllDataFunc(route)


  }, [reload, search])


  const handleCheckBox = (e, ids) => {
    const isCheck = e.target.checked;
    HandleCheckIds(isCheck, ids)
  }

  const handleEditAttendance = (editInfo) => {
    setEditValue(editInfo)
    setShowModal(true)
  }



  if (isLoading) {
    return <Loader />
  }

  return (
    <div className='adminPage'>
      <PageHeader text="Student Attendance Managment" />

      <div className="search_wrap">
        <select onChange={(e) => setSearch(e.target.value)} name="byClassCode" id="byClassCode" className='input'>
          <option value="">Select Class</option>
          <option value="6">Class 6</option>
          <option value="7">Class 7</option>
          <option value="8">Class 8</option>
          <option value="9">Class 9</option>
          <option value="10">Class 10</option>
        </select>
        <input type="date" name='searchByDate' className='input' />
      </div>



      <div className='my-4'>
        Showing {data.length} Results
      </div>


      <div>
        <StudentAttendanceManagmentTable
          info={data}
          handleCheckBox={handleCheckBox}
          checkIds={checkIds}
          handleDeleteAttendance={multipleDeleteFunc}
          handleEditAttendance={handleEditAttendance}
        />
      </div>

      {
        showModal && <AttendanceEditModal 
         editRoute="/attendence/edit/"
        />
      }

    </div>
  )
}
