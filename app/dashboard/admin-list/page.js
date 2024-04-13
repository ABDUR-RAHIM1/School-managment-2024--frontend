"use client"
import Spinner from '@/components/Utils/Spinner';
import { handleAdminDeleteMethod } from '@/fetchApi/admin/api'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { GoPersonAdd } from "react-icons/go";
import { useRouter } from 'next/navigation';
import Model from '@/components/Utils/Model';
import { GlobalState } from '@/ContextApi/ContextApi';
import ReloadButton from '@/components/Utils/ReloadButton';
import AdminTable from '@/components/dashboard/AdminTable';
import Loader from '@/components/Utils/Loader';

export default function AdminLists() {
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState(null)
  const { reload, setReload, getAllDataFunc, data, isLoading, search, setSearch, checkIds, HandleCheckIds, multipleDeleteFunc } = useContext(GlobalState)
  const router = useRouter()


  useEffect(() => {
    const route = `/admin/auth/all?search=${search}`;
    getAllDataFunc(route)


  }, [reload, search]);


  //  delete handler 
  const handleDeleteAdmin = async (id) => {

    try {
      const deleteRoute = `/admin/auth/delete/${id}`
      const result = await handleAdminDeleteMethod(deleteRoute)

      toast(result.message)
      setReload(!reload)
    } catch (error) {
      toast.error("somthing went wrong")
    }
  }


  //  navigate to dashboard/admin-add route
  const handleAddNewBtn = () => {
    router.push("/dashboard/admin-add")
  }

  const handleFilterAdmin = (e) => {
    const text = e.target.value.toLowerCase()
    setSearch(text)
  }

  //  edit admin handler 
  const handleEditAdmin = (info) => {
    setModalData(info)
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false);
  };

  //  inputs checked for multiple delete
  const handleCheck = (e, ids) => {
    const isChecked = e.target.checked;
    HandleCheckIds(isChecked, ids)
  }


  if (isLoading) {
    return <Loader />
  }

  return (
    <div className='adminListPage relative'>

      <div className='flex items-center justify-between'>
        <h2 className='my-10 text-2xl italic font-medium'>Team <span className='text-sm ml-3 border p-1'>{data.length}
          {
            search ? " " + search : " members"
          }
        </span> </h2>
        <div>
          <button onClick={handleAddNewBtn} className='flex items-center gap-1 bg-blue-500 text-white hover:bg-blue-600 duration-200 py-2 px-3 rounded-md text-sm'> <span className='text-xl'><GoPersonAdd /></span> Add New</button>
        </div>
      </div>

      {/*  filterd admin moderator  */}
      <div className='flex items-center justify-between  mb-6 '>
        <div className='flex items-center gap-2'>
          <p className='font-medium'>filter by :</p>
          <select value={search} onChange={handleFilterAdmin} className='py-1 px-3 focus:outline-none border border-gray-200'>
            <option value="">All</option>
            <option value="admin">admin</option>
            <option value="moderator">moderator</option>
          </select>
        </div>
        <div>
          <ReloadButton />
        </div>
      </div>

      <div className='my-4 text-center'>
        {isLoading && <Spinner />}
      </div>


      <AdminTable
        adminList={data}
        handleEditAdmin={handleEditAdmin}
        handleDeleteAdmin={handleDeleteAdmin}
        handleCheck={handleCheck}
        checkIds={checkIds}
        handleDeleteManyAdmins={multipleDeleteFunc}
      />



      {showModal && <Model
        data={modalData}
        closeModal={closeModal}
      />}
    </div>
  )
}
