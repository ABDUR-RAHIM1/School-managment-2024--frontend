"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import Loader from '@/components/Utils/Loader'
import PageHeader from '@/components/Utils/PageHeader'
import ExamRoutineTable from '@/components/dashboard/ExamRoutineTable'
import { handleAllGetMethod } from '@/fetchApi/GetMethod/handleAllGetMethod'
import { useRouter } from 'next/navigation'
import React, { useContext, useLayoutEffect, useState } from 'react'

export default function ManageExamRoutine() {
  const { reload, setReload, setEditValue } = useContext(GlobalState)
  const [isLoading, setIsLoding] = useState(false)
  const [routine, setRoutine] = useState([])
  const router = useRouter()

  useLayoutEffect(() => {
    setIsLoding(true)
    const getAllExamRoutine = async () => {
      try {
        const route = "/examroutine/all"
        const routines = await handleAllGetMethod(route);
        setRoutine(routines)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoding(false)
      }
    }

    getAllExamRoutine()
  }, [reload])



  //  edit exam routine 
  const handleEditRoutine = (info) => {
    router.push("/dashboard/add-exam-routine")
    setEditValue(info)
    console.log(info)
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
          info={routine}
          handleEditRoutine={handleEditRoutine}
        />
      </div>
      {/*  exam routines table end here */}

    </div>
  )
}
