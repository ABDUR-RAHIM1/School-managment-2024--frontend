"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import Loader from '@/components/Utils/Loader'
import PageHeader from '@/components/Utils/PageHeader'
import ClassRoutineTable from '@/components/dashboard/ClassRoutineTable'
import { useRouter } from 'next/navigation'
import React, { useContext, useLayoutEffect, } from 'react'

export default function ManageClassRoutine() {
  const { reload, setEditValue, search, setSearch, isLoading, getAllDataFunc, data, HandleCheckIds, checkIds, multipleDeleteFunc } = useContext(GlobalState)
  const router = useRouter()

  useLayoutEffect(() => {
    const route = `/routine/all?search=${search}`
    getAllDataFunc(route)
  }, [reload, search])

  //  handle search inputs
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  //  handle Multiple delete  onChange handler 
  const handleCheckId = (e, ids) => {
    const isCheck = e.target.checked;
    HandleCheckIds(isCheck, ids)
  }



  //  handle update funciton
  const handleUpdateClassRoutine = (routine) => {
    setEditValue(routine)
    router.push("/dashboard/add-class-routine")
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className='adminPage'>
      <PageHeader text="Class Routine" />

      <div className='search_wrap'>

        <div className='flex items-center flex-1 gap-2'>
          <input onChange={handleSearch} type="search" placeholder='search By Name' className='input' />

          <select  onChange={handleSearch} id="classSelect" className='input'>
            <option value="">Search By Class</option>
            <option value="6">Class 6</option>
            <option value="7">Class 7</option>
            <option value="8">Class 8</option>
            <option value="9">Class 9</option>
            <option value="10">Class 10</option>
          </select>


        </div>
      </div>

      <p className='my-4'>Showing {data.length} classes</p>
      {/*  class routine table */}
      <div>
        <ClassRoutineTable
          info={data}
          handleCheckId={handleCheckId}
          checkIds={checkIds}
          handleDeleteMultipleRoutine={multipleDeleteFunc}
          handleUpdateClassRoutine={handleUpdateClassRoutine}
        />
      </div>

    </div>
  )
}
