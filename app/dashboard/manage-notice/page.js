"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import Loader from '@/components/Utils/Loader'
import PageHeader from '@/components/Utils/PageHeader'
import NoticeTable from '@/components/dashboard/NoticeTable'
import { useRouter } from 'next/navigation'
import React, { useContext, useLayoutEffect } from 'react'

export default function ManageNotice() {
  const { getAllDataFunc, isLoading, data, reload, setEditValue } = useContext(GlobalState)

  const router = useRouter()

  useLayoutEffect(() => {
    const route = "/notice/all"
    getAllDataFunc(route)
  }, [reload])


  const handleUpdateNotice = (data) => {
    setEditValue(data)
    router.push("/dashboard/upload-notice")
  }

  if (isLoading) {
    return <Loader />
  }
  return (
    <div className='adminPage'>
      <PageHeader text="Manage Notice" />




      <div className='my-5 flex items-center justify-between bg-gray-50'>
        <p> Showing {data.length} notice</p>
        <div className='w-full md:w-[60%]'>
          <small>Subject</small>
          <input type="search" placeholder='Search' className='input' />
        </div>
      </div>


      <div>
        <NoticeTable
          info={data}
          handleUpdateNotice={handleUpdateNotice}
        />
      </div>

    </div>
  )
}
