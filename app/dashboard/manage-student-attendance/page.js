'use client'
import { GlobalState } from '@/ContextApi/ContextApi'
import Loader from '@/components/Utils/Loader'
import PageHeader from '@/components/Utils/PageHeader'
import StudentAttendanceManagmentTable from '@/components/dashboard/StudentAttendanceManagmentTable'
import React, { useContext, useLayoutEffect, useState } from 'react'

export default function ManageStudentAttendance() {
  const { getAllDataFunc, isLoading, data, search, setSearch, reload, HandleCheckIds, checkIds, multipleDeleteFunc } = useContext(GlobalState)

  const [dateFilter, setDateFilter] = useState("")
  const [newData, setNewData] = useState([])

  useLayoutEffect(() => {
    const route = `/attendence/all?search=${search}`
    getAllDataFunc(route)

    const newDate = dateFilter !== "" && new Date(dateFilter).toISOString()
    const filterData = data.filter(item => item.dateByday === newDate)
 
    if (filterData.length > 0) {
      setNewData(filterData)
    } else {
      setNewData(data)
    }

  }, [reload, search, dateFilter])
 

  const handleCheckBox = (e, ids) => {
    const isCheck = e.target.checked;
    HandleCheckIds(isCheck, ids)
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
        <input onChange={(e) => setDateFilter(e.target.value)} type="date" name='searchByDate' className='input' />
      </div>



      <div>
        Showing {newData.length} Results
      </div>


      <div>
        <StudentAttendanceManagmentTable
          info={newData}
          handleCheckBox={handleCheckBox}
          checkIds={checkIds}
          handleDeleteAttendance={multipleDeleteFunc}
        />
      </div>



    </div>
  )
}
