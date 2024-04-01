"use client"
import { GlobalState } from '@/ContextApi/ContextApi';
import StaffTable from '@/components/dashboard/StaffTable';
import Loader from '@/components/Utils/Loader';
import ReloadButton from '@/components/Utils/ReloadButton';
import { handleAllGetMethod } from '@/fetchApi/GetMethod/handleAllGetMethod';
import React, { useContext, useEffect, useState } from 'react'
import { GoPersonAdd } from 'react-icons/go';
import { handleDeleteMany } from '@/fetchApi/DeleteMethod/handleDeleteMany';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function ManageStaff() {
  const { reload, setReload , setEditValue } = useContext(GlobalState)
  const [isLoading, setIsLoading] = useState(false)
  const [checkIds, setCheckIds] = useState([]);
  const [search, setSearch] = useState("")
  const [staff, setStaff] = useState([]);
  const router = useRouter()


  const handleAddNewStaff = () => {
    router.push("/dashboard/add-staff")
  }
  const handleSearchStaff = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    search || !reload && setIsLoading(true)
    const getAllStaff = async () => {
      try {
        const route = `/staffs/all?search=${search}`
        const result = await handleAllGetMethod(route);
        setStaff(result)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    getAllStaff()
  }, [reload, search])

  //  handle chakbox for delete multiple 
  const handleCheckBox = (e, id) => {
    console.log(e, id)
    const isChecked = e.target.checked;
    if (isChecked) {
      setCheckIds([...checkIds, id])
    } else {
      const removeId = checkIds.filter(i => i !== id);
      setCheckIds(removeId)
    }
  }

  //  delete multiple
  const handleDeleteStaff = async () => {
    try {
      const route = "/staffs/delete";
      const result = await handleDeleteMany(route, checkIds);
      if (result.isDelete) {
        toast.success(result.message)
        setReload(!reload)
        setCheckIds([])
      } else {
        toast.warning(result.message)
      }
    } catch (error) {
      console.log(error)
    }
  }
  //  handle edit staff
  const handleEditStaff = (info) => {
        router.push("/dashboard/add-staff" );
        setEditValue(info)
  }
 
  if (isLoading) {
    return <Loader />
  }
  return (
    <div className='staffPage'>
      <div className='flex items-center justify-between'>
        <h2 className='my-10 text-2xl italic font-medium'>Staff <span className='text-sm ml-3 border p-1'>{staff.length+ " " }
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
          staff={staff}
          handleCheckBox={handleCheckBox}
          checkIds={checkIds}
          handleDeleteStaff={handleDeleteStaff}
          handleEditStaff={handleEditStaff}
        />
      </div>

    </div>
  )
}
