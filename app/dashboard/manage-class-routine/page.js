"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import Loader from '@/components/Utils/Loader'
import PageHeader from '@/components/Utils/PageHeader'
import ClassRoutineTable from '@/components/dashboard/ClassRoutineTable'
import { handleDeleteMany } from '@/fetchApi/DeleteMethod/handleDeleteMany'
import { handleAllGetMethod } from '@/fetchApi/GetMethod/handleAllGetMethod'
import { useRouter } from 'next/navigation'
import React, { useContext, useLayoutEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default function ManageClassRoutine() {
  const { reload, setReload, setEditValue } = useContext(GlobalState)
  const [isLoading, setIsLoding] = useState(false)
  const [search, setSearch] = useState("")
  const [checkIds, setChackIds] = useState([])
  const [routine, setRoutine] = useState([])
  const router = useRouter()

  useLayoutEffect(() => {
    search || !reload && setIsLoding(true)
    const getAllRoutine = async () => {
      try {
        const route = `/routine/all?search=${search}`
        const routine = await handleAllGetMethod(route);
        setRoutine(routine)
      } catch (error) {

      } finally {
        setIsLoding(false)
      }
    }
    getAllRoutine()
  }, [reload, search])

  //  handle search inputs
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  //  handle Multiple delete  onChange handler 
  const handleCheckId = (e, id) => {
    const isCheck = e.target.checked;
    if (isCheck) {
      setChackIds([...checkIds, id])
    } else {
      const removeId = checkIds.filter(i => i !== id)
      setChackIds(removeId)
    }
  }
  //  multiple delete handler function
  const handleDeleteMultipleRoutine = async () => {
    try {
      const route = "/routine/delete-many"
      const result = await handleDeleteMany(route, checkIds);
      if (result.isDelete) {
        toast.success(result.message)
        setReload(!reload)
      } else {
        toast.warning(result.message)
      }
    } catch (error) {
      console.log(error)
    }
  }


  //  handle update funciton
  const handleUpdateClassRoutine = (routine) => {
    setEditValue(routine)
    router.push("/dashboard/add-class-routine")
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className='adminPage'>
      <PageHeader text="Class Routine" />

      <div className='flex items-center justify-between gap-4 my-4'>
        <p>Showing {routine.length} classes</p>
        <div className='flex items-center flex-1 gap-2'>
          <input onChange={handleSearch} type="search" placeholder='search By Name' className='input' />
          <input onChange={handleSearch} type="search" placeholder='search By Class' className='input' />
        </div>
      </div>


      {/*  class routine table */}
      <div>
        <ClassRoutineTable
          info={routine}
          handleCheckId={handleCheckId}
          checkIds={checkIds}
          handleDeleteMultipleRoutine={handleDeleteMultipleRoutine}
          handleUpdateClassRoutine={handleUpdateClassRoutine}
        />
      </div>

    </div>
  )
}
