"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import Loader from '@/components/Utils/Loader';
import PageHeader from '@/components/Utils/PageHeader'
import CommitteTable from '@/components/dashboard/CommitteTable';
import React, { useContext, useLayoutEffect, } from 'react'

export default function ManageCommitee() {
  const { getAllDataFunc, data, isLoading, reload } = useContext(GlobalState);

  useLayoutEffect(() => {
    const route = "/comitee/all";
    getAllDataFunc(route)
  }, [reload])


  if (isLoading) {
    return <Loader />
  }

  return (
    <div className='adminPage'>
      <PageHeader text="Committe List" />

      <div className='my-4'>
        Showing {data.length} Members (committe)
      </div>


      <div>
        <CommitteTable
          info={data}
        />
      </div>
    </div>
  )
}
