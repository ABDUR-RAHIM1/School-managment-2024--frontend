"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import Loader from '@/components/Utils/Loader'
import PageHeader from '@/components/Utils/PageHeader'
import ManageFeeTable from '@/components/dashboard/ManageFeeTable'
import React, { useContext, useLayoutEffect } from 'react'

export default function ManageFees() {
  const { getAllDataFunc, isLoading, data, reload, search, setSearch, HandleCheckIds, checkIds } = useContext(GlobalState)



  useLayoutEffect(() => {
    const route = `/fee/all?search=${search}`;
    getAllDataFunc(route)
  }, [reload, search])



  const handleCheckBox = (e, ids) => {
    const isCheck = e.target.checked;
    HandleCheckIds(isCheck, ids)
  }



  if (isLoading) {
    return <Loader />
  }
  return (
    <div className='adminPage'>
      <PageHeader text="Manage Student Fee's" />


      <div className='search_wrap'>

        <input onChange={(e) => setSearch(e.target.value)} type="search" className='input' placeholder='Search By Student Name' />
        <select onChange={(e) => setSearch(e.target.value)} name="classCode" className='input' >
          <option value="">Select Class</option>
          <option value="06">Class 6</option>
          <option value="07">Class 7</option>
          <option value="08">Class 8</option>
          <option value="09">Class 9</option>
          <option value="10">Class 10</option>
        </select>

      </div>

      <div className='my-3'>
        Showing {data.length} Fee's (Paid)
      </div>

      <div>
        <ManageFeeTable
          info={data}
          handleCheckBox={handleCheckBox}
          checkIds={checkIds}
        />
      </div>

    </div>
  )
}
