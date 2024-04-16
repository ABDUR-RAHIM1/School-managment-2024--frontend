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


      <div className='flex items-center justify-between gap-4'>
        <select onChange={(e) => setSearch(e.target.value)} name="classCode" className='input' >
          <option value="">Select Class</option>
          <option value="06">Six</option>
          <option value="07">Seven</option>
          <option value="08">Eight</option>
          <option value="09">Nine</option>
          <option value="10">Ten</option>
        </select>

        <input onChange={(e) => setSearch(e.target.value)} type="search" className='input' placeholder='Search By Student Name' />
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
