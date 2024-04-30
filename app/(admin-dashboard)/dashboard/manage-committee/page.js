"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import Loader from '@/components/Utils/Loader';
import PageHeader from '@/components/Utils/PageHeader'
import CommitteTable from '@/components/dashboard/CommitteTable';
import { useRouter } from 'next/navigation';
import React, { useContext, useLayoutEffect, } from 'react'

export default function ManageCommitee() {
  const { getAllDataFunc, data, search, setSearch, isLoading, reload, setEditValue, HandleCheckIds, checkIds, multipleDeleteFunc } = useContext(GlobalState);
  console.log(search)
  const router = useRouter()

  useLayoutEffect(() => {
    const route = `/comitee/all?search=${search}`;
    getAllDataFunc(route)
  }, [reload , search])



  const handleEditComiitee = (comitte) => {
    router.push("/dashboard/add-committee")
    setEditValue(comitte)
  }


  const handleCheckBox = (e, ids) => {
    const isChecked = e.target.checked;
    HandleCheckIds(isChecked, ids)
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className='adminPage'>
      <PageHeader text="Managing Committee List" />


      <div className='search_wrap'>
        <input onChange={handleSearch} id='searchByName' type="search" placeholder='Search By Name' className='input' />


        <select onChange={handleSearch} id="searchByPosition" className='input'>
          <option value="">Search By Position</option>
          <option value="member">Member</option>
          <option value="secretary">Secretary</option>
          <option value="president">President</option>
        </select>

      </div>



      <div className='my-4'>
        Showing {data.length} Members (committe)
      </div>


      <div>
        <CommitteTable
          info={data}
          handleEditComiitee={handleEditComiitee}
          handleCheckBox={handleCheckBox}
          checkIds={checkIds}
          handleDeleteComiite={multipleDeleteFunc}
        />
      </div>
    </div>
  )
}
