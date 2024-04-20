'use client'
import { GlobalState } from '@/ContextApi/ContextApi'
import AttendanceEditModal from '@/components/Utils/AttendanceEditModal'
import Loader from '@/components/Utils/Loader'
import PageHeader from '@/components/Utils/PageHeader'
import StudentAttendanceManagmentTable from '@/components/dashboard/StudentAttendanceManagmentTable'
import TeacherAttendanceManagmentTable from '@/components/dashboard/TeacherAttendanceManagmentTable'
import React, { useContext, useLayoutEffect, useState } from 'react'

export default function ManageTeacherAttendance() {
  const { getAllDataFunc, isLoading, data, search, setSearch, reload, HandleCheckIds, checkIds, multipleDeleteFunc, setEditValue, showModal, setShowModal } = useContext(GlobalState)



  useLayoutEffect(() => {
    const route = `/attendence/teacher/all?search=${search}`
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
      <PageHeader text="Teacher Attendance Managment" />

      <div className="search_wrap">
        <input onChange={(e) => setSearch(e.target.value)} name="byName" id="byName" className='input' placeholder='Search By Name' />

        <input type="date" name='searchByDate' className='input' />
      </div>



      <div className='my-4'>
        Showing {data.length} Results
      </div>


      <div>
        <TeacherAttendanceManagmentTable
          info={data}
          handleCheckBox={handleCheckBox}
          checkIds={checkIds}
          handleDeleteAttendance={multipleDeleteFunc}
          handleEditAttendance={handleEditAttendance}
        />

      </div>

      {
        showModal && <AttendanceEditModal
          editRoute="/attendence/teacher/edit/"
        />
      }

    </div>
  )
}
