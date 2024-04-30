"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import Heading from '@/components/Utils/Heading'
import AddFeeTable from '@/components/dashboard/AddFeeTable'
import React, { useContext, useLayoutEffect } from 'react'

export default function AddFees() {
  const { getAllDataFunc, data, reload, search, setSearch } = useContext(GlobalState)



  useLayoutEffect(() => {
    const route = `/profile/all?search=${search}`
    getAllDataFunc(route)


  }, [reload, search])




  return (
    <div className='adminPage'>
      <Heading text="Add Student Fee's" />

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


      {/*  add fee form start */}
      <div className='my-10'>

        <AddFeeTable
          info={data}
        />
      </div>
      {/*  add fee form end */}





    </div>
  )
}
