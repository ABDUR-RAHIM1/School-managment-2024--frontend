"use client"
import React, { useContext, useLayoutEffect } from 'react'
import { GlobalState } from '@/ContextApi/ContextApi'
import Loader from '@/components/Utils/Loader'
import PageHeader from '@/components/Utils/PageHeader'
import ExamRoutineTable from '@/components/dashboard/ExamRoutineTable'
import { useRouter } from 'next/navigation'

export default function ManageExamRoutine() {
  const { reload, setEditValue, HandleCheckIds, multipleDeleteFunc, getAllDataFunc, isLoading, data } = useContext(GlobalState)
  const router = useRouter()

  useLayoutEffect(() => {
    const route = "/examroutine/all"
    getAllDataFunc(route)
  }, [reload])


  //  edit exam routine 
  const handleEditRoutine = (info) => {
    router.push("/dashboard/add-exam-routine")
    setEditValue(info)
  }

  // check routine items (ID)
  const handleCheck = (e, ids) => {
    const isCheck = e.target.checked
    HandleCheckIds(isCheck, ids)
  }


  if (isLoading) {
    return <Loader />
  }
  return (
    <div className='adminPage'>
      <PageHeader text="Exam Routine's" />



      {/*  exam routines table start here */}
      <div>
        <ExamRoutineTable
          info={data}
          handleEditRoutine={handleEditRoutine}
          handleCheck={handleCheck}
          handleDeleteRoutine={multipleDeleteFunc}
        />
      </div>
      {/*  exam routines table end here */}

    </div>
  )
}
