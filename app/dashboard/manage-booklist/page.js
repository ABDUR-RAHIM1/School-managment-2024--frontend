"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import Loader from '@/components/Utils/Loader'
import PageHeader from '@/components/Utils/PageHeader'
import BookListTable from '@/components/dashboard/BookListTable'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect } from 'react'

export default function ManageBookLists() {

  const { reload, getAllDataFunc, isLoading, data, setEditValue, setSearch, search, HandleCheckIds, checkIds, multipleDeleteFunc } = useContext(GlobalState)


  const router = useRouter()

  useEffect(() => {
    const route = `/booklist/all?search=${search}`
    getAllDataFunc(route)
  }, [reload, search])



  const handleEditBookList = (editData) => {
    router.push("/dashboard/add-booklist")
    setEditValue(editData)
  }


  const handleCheckbox = (e, ids) => {
    const isCheck = e.target.checked
    HandleCheckIds(isCheck, ids)
  }


  if (isLoading) {
    return <Loader />
  }

console.log(checkIds)

  return (
    <div className='adminPage'>
      <PageHeader text="Manage Book Lists" />


      <div className='flex items-center justify-between gap-4 my-5'>
        <select onChange={(e) => setSearch(e.target.value)} name="byClassCode" id="byClassCode" className='input'>
          <option value="">Select Class</option>
          <option value="6">Class 6</option>
          <option value="7">Class 7</option>
          <option value="8">Class 8</option>
          <option value="9">Class 9</option>
          <option value="10">Class 10</option>
        </select>

        <select onChange={(e) => setSearch(e.target.value)} name="byGroup" id="byGroup" className='input'>
          <option value="">Select Group</option>
          <option value="arts">Arts</option>
          <option value="science">Science</option>
          <option value="commerce">Commerce</option>
        </select>

      </div>

      <div>
        Showing {data.length} Book list
      </div>


      <div className='my-5'>
        <BookListTable
          info={data}
          handleEditBookList={handleEditBookList}
          handleCheckbox={handleCheckbox}
          checkIds={checkIds}
          handleDeleteBooklist={multipleDeleteFunc}
        />
      </div>

    </div>
  )
}
