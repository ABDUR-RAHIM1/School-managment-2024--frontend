"use client"
import { GlobalState } from '@/ContextApi/ContextApi';
import Loader from '@/components/Utils/Loader';
import PageHeader from '@/components/Utils/PageHeader';
import ReloadButton from '@/components/Utils/ReloadButton'
import Gallary from '@/components/dashboard/Gallary';
import GallaryTable from '@/components/dashboard/GallaryTable';
import { handleAllDeleteMethod } from '@/fetchApi/DeleteMethod/handleAllDeleteMethod';
import { handleAllGetMethod } from '@/fetchApi/GetMethod/handleAllGetMethod';
import { handleStatusController } from '@/fetchApi/UpdateMethod/handleAllUpdateMethod';
import React, { useContext, useLayoutEffect, useState } from 'react'
import { toast } from 'react-toastify';

export default function TeacherGallary() {
  const { reload, setReload } = useContext(GlobalState)
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("")
  const [gallary, setGallary] = useState([]);

  useLayoutEffect(() => {
    search || !reload && setIsLoading(true)
    const getAllGallary = async () => {
      try {
        const route = `/gallary/all?search=${search}`;
        const result = await handleAllGetMethod(route);
        if (result) {
          setGallary(result)
        }
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    };
    getAllGallary()
  }, [reload, search]);


  //  gallary  controller / accept -reject - pending
  const handleGallaryController = async (e, id) => {
    try {
      const selectedStatus = e.target.value;

      const info = { status: selectedStatus }
      const route = `/gallary/${id}/controll`;
      const result = await handleStatusController(route, info);
      if (result.ok) {
        toast.success(result.message)
        setReload(!reload)
      } else {
        toast.error(result.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  if (isLoading) {
    return <Loader />
  }
  return (
    <div className='adminPage'>

      <PageHeader text="Teachers Gallary" />
      
      <div className='flex items-center justify-between my-4'>
        <p className='my-4'>Showing {gallary.length} photos</p>

        <div className='w-[50%]'>
          <small>Status</small>
          <select onChange={(e) => setSearch(e.target.value)} name="status" className='input'>
            <option value="">All</option>
            <option value="accept">Accept</option>
            <option value="reject">Reject</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>

      {/*  gallary table  */}
      <div>
        <GallaryTable
          gallary={gallary}
          handleGallaryController={handleGallaryController}
        />
      </div>
      {/*  gallary table  end */}

    </div>
  )
}
