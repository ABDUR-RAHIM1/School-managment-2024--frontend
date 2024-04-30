"use client"
import { GlobalState } from '@/ContextApi/ContextApi';
import StaffTable from '@/components/dashboard/StaffTable';
import Loader from '@/components/Utils/Loader';
import ReloadButton from '@/components/Utils/ReloadButton';
import React, { useContext, useEffect } from 'react'
import { GoPersonAdd } from 'react-icons/go';
import { useRouter } from 'next/navigation';

export default function ManageStaff() {
  const { reload, setEditValue, isLoading, getAllDataFunc, data, search, setSearch, HandleCheckIds, checkIds, multipleDeleteFunc } = useContext(GlobalState)
  const router = useRouter()


  const handleAddNewStaff = () => {
    router.push("/dashboard/add-staff")
  }
  const handleSearchStaff = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    const route = `/staffs/all?search=${search}`
    getAllDataFunc(route)
  }, [reload, search])

  //  handle chakbox for delete multiple 
  const handleCheckBox = (e, ids) => {
    const isChecked = e.target.checked;
    HandleCheckIds(isChecked, ids)
  }
 
  //  handle edit staff
  const handleEditStaff = (info) => {
    router.push("/dashboard/add-staff");
    setEditValue(info)
  }

  if (isLoading) {
    return <Loader />
  }
  return (
    <div className='adminPage'>
      <div className='flex items-center justify-between'>
        <h2 className='my-10 text-2xl italic font-medium'>Staff <span className='text-sm ml-3 border p-1'>{data.length + " "}
          Membars
        </span> </h2>
        <div>
          <button onClick={handleAddNewStaff} className='flex items-center gap-1 bg-blue-500 text-white hover:bg-blue-600 duration-200 py-2 px-3 rounded-md text-sm'> <span className='text-xl'><GoPersonAdd /></span> Add New</button>
        </div>
      </div>

      {/*  filterd admin moderator  */}
      <div className='flex items-center justify-between  mb-6 '>
        <div className='w-[40%]'>
          <p>Search By Name</p>
          <input onChange={handleSearchStaff} type="search" className='input' placeholder='Search . . .' />
        </div>
        <div>
          <ReloadButton />
        </div>
      </div>

      <div>
        <StaffTable
          staff={data}
          handleCheckBox={handleCheckBox}
          checkIds={checkIds}
          handleDeleteStaff={multipleDeleteFunc}
          handleEditStaff={handleEditStaff}
        />
      </div>

    </div>
  )
}
