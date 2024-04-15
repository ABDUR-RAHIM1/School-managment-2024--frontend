"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import Loader from '@/components/Utils/Loader'
import PageHeader from '@/components/Utils/PageHeader'
import NoticeTable from '@/components/dashboard/NoticeTable'
import { useRouter } from 'next/navigation'
import React, { useContext, useLayoutEffect } from 'react'

export default function ManageNotice() {
  const { getAllDataFunc, isLoading, data, reload, search, setSearch, setEditValue, HandleCheckIds, checkIds, multipleDeleteFunc } = useContext(GlobalState)

  const router = useRouter()

  useLayoutEffect(() => {
    const route = `/notice/all?search=${search}`
    getAllDataFunc(route)
  }, [reload, search])


  const handleUpdateNotice = (data) => {
    setEditValue(data)
    router.push("/dashboard/upload-notice")
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
      <PageHeader text="Manage Notice" />




      <div className='my-5 flex items-center justify-between bg-gray-50'>
        <p> Showing {data.length} notice</p>
        <div className='w-full md:w-[60%]'>
          <small>Subject</small>
          <input onChange={(e) => setSearch(e.target.value)} type="search" placeholder='Search' className='input' />
        </div>
      </div>


      <div>
        <NoticeTable
          info={data}
          handleUpdateNotice={handleUpdateNotice}
          handleCheckBox={handleCheckBox}
          checkIds={checkIds}
          handleDeleteNotice={multipleDeleteFunc}
        />
      </div>

    </div>
  )
}
