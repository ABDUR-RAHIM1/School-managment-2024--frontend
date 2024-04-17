"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import Loader from '@/components/Utils/Loader';
import PageHeader from '@/components/Utils/PageHeader'
import ResultTable from '@/components/dashboard/ResultTable';
import { useRouter } from 'next/navigation';
import React, { useContext, useLayoutEffect } from 'react'

export default function ManageResults() {
  const { getAllDataFunc, data, isLoading, reload, setEditValue } = useContext(GlobalState);

  const router = useRouter()

  useLayoutEffect(() => {
    const route = "/results/all";
    getAllDataFunc(route)
  }, [reload])


  const handleEditResult = (editInfo) => {
    setEditValue(editInfo)
    router.push("/dashboard/add-results")
  }



  if (isLoading) {
    return <Loader />
  }
  return (
    <div className='adminPage'>
      <PageHeader text="Result Management" />

      <div className='my-4'>
        Showing {data.length} Results Columns
      </div>


      <div>
        <ResultTable
          info={data}
          handleEditResult={handleEditResult}
        />
      </div>

    </div>
  )
}
