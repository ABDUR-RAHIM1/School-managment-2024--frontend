"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import Loader from '@/components/Utils/Loader';
import PageHeader from '@/components/Utils/PageHeader'
import ResultTable from '@/components/dashboard/ResultTable';
import { useRouter } from 'next/navigation';
import React, { useContext, useLayoutEffect } from 'react'

export default function ManageResults() {
  const { getAllDataFunc, data, search, setSearch, isLoading, reload, setEditValue, HandleCheckIds, checkIds, multipleDeleteFunc } = useContext(GlobalState);

  const router = useRouter()

  useLayoutEffect(() => {
    const route = `/results/all?search=${search}`;
    getAllDataFunc(route)
  }, [reload, search])


  const handleEditResult = (editInfo) => {
    setEditValue(editInfo)
    router.push("/dashboard/add-results")
  }

  const handleCheckBox = (e, ids) => {
    const isChecked = e.target.checked;
    HandleCheckIds(isChecked, ids)
  }



  if (isLoading) {
    return <Loader />
  }


  return (
    <div className='adminPage'>
      <PageHeader text="Result Management" />


      <div className="search_wrap">
        <select onChange={(e) => setSearch(e.target.value)} name="byClassCode" id="byClassCode" className='input'>
          <option value="">Search By Class</option>
          <option value="6">Class 6</option>
          <option value="7">Class 7</option>
          <option value="8">Class 8</option>
          <option value="9">Class 9</option>
          <option value="10">Class 10</option>
        </select>
        <input onChange={(e) => setSearch(e.target.value)} type="search" placeholder='Search By Name' id='searchByName' className='input' />
      </div>



      <div className='my-4'>
        Showing {data.length} Results Columns
      </div>


      <div>
        <ResultTable
          info={data}
          handleEditResult={handleEditResult}
          handleCheckBox={handleCheckBox}
          checkIds={checkIds}
          handleDeleteResults={multipleDeleteFunc}
        />
      </div>

    </div>
  )
}
