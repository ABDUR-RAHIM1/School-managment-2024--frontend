"use client"
import Spinner from '@/components/Utils/Spinner';
import { handleAdminDeleteMethod, handleAdminGetMethod } from '@/fetchApi/admin/api'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { GoPersonAdd } from "react-icons/go";
import { useRouter } from 'next/navigation';
import Model from '@/components/Utils/Model';
import { GlobalState } from '@/ContextApi/ContextApi';
import ReloadButton from '@/components/Utils/ReloadButton';
import AdminTable from '@/components/dashboard/AdminTable';
import Loader from '@/components/Utils/Loader';
import { handleDeleteMany } from '@/fetchApi/DeleteMethod/handleDeleteMany';

export default function AdminLists() {
  const [isLoading, setIsLoading] = useState(false)
  const [filterText, setFilerText] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState(null)
  const [adminList, setAdminList] = useState([])
  const [checkIds, setCheckIds] = useState([])
  const { reload, setReload } = useContext(GlobalState)
  const router = useRouter()


  useEffect(() => {
    const fetchData = async () => {
      filterText || !reload && setIsLoading(true)
      try {
        const route = `/admin/auth/all?search=${filterText}`;
        const data = await handleAdminGetMethod(route);
        setAdminList(data);
      } catch (error) {
        console.error("Error fetching admin list:", error);

        toast.error("Failed to fetch admin list");
      } finally {
        setIsLoading(false)
      }
    };

    fetchData();


  }, [reload, filterText]);


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
    setFilerText(text)
  }

  //  edit admin handler 
  const handleEditAdmin = (info) => {
    setModalData(info)
    setShowModal(true)
    console.log("edit")
  }
  const closeModal = () => {
    setShowModal(false);
  };

  //  inputs checked for multiple delete
  const handleCheck = (e, id) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setCheckIds([...checkIds, id])
    } else {
      const removeIds = checkIds.filter(i => i !== id)
      setCheckIds(removeIds)
    }
  }

  //  multiple delete handler
  const handleDeleteManyAdmins = async () => {
    const route = '/admin/auth/delete-many'
    const result = await handleDeleteMany(route, checkIds);
    if (result.isDelete) {
      toast.success(result.message)
      setReload(!reload)
      setCheckIds([])
    } else {
      toast.warning(result.message)
    }
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className='adminListPage relative'>

      <div className='flex items-center justify-between'>
        <h2 className='my-10 text-2xl italic font-medium'>Team <span className='text-sm ml-3 border p-1'>{adminList.length}
          {
            filterText ? " " + filterText : " members"
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
          <select value={filterText} onChange={handleFilterAdmin} className='py-1 px-3 focus:outline-none border border-gray-200'>
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
        adminList={adminList}
        handleEditAdmin={handleEditAdmin}
        handleDeleteAdmin={handleDeleteAdmin}
        handleCheck={handleCheck}
        checkIds={checkIds}
        handleDeleteManyAdmins={handleDeleteManyAdmins}
      />



      {showModal && <Model
        data={modalData}
        closeModal={closeModal}
      />}
    </div>
  )
}
