'use client'
import { GlobalState } from '@/ContextApi/ContextApi'
import Loader from '@/components/Utils/Loader'
import PageHeader from '@/components/Utils/PageHeader'
import StudentAttendanceManagmentTable from '@/components/dashboard/StudentAttendanceManagmentTable'
import React, { useContext, useLayoutEffect } from 'react'

export default function ManageStudentAttendance() {
  const { getAllDataFunc, isLoading, data, reload } = useContext(GlobalState)


  useLayoutEffect(() => {
    const route = `/attendence/all`
    getAllDataFunc(route)
  }, [reload])


  if (isLoading) {
    return <Loader />
  }

  return (
    <div className='adminPage'>
      <PageHeader text="Student Attendance Managment" />

      <div>
        Showing {data.length} Results
      </div>


      <div>
        <StudentAttendanceManagmentTable
          info={data}
        />
      </div>



    </div>
  )
}
