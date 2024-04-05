"use client"

import { GlobalState } from "@/ContextApi/ContextApi"
import Loader from "@/components/Utils/Loader"
import ReloadButton from "@/components/Utils/ReloadButton"
import TeacherProfileTable from "@/components/dashboard/TeacherProfile"
import { handleAllGetMethod } from "@/fetchApi/GetMethod/handleAllGetMethod"
import { useContext, useEffect, useState } from "react"



export default function ManageTecher() {
  const { reload } = useContext(GlobalState)
  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState("")
  const [isCheckId, setIsCheckId] = useState([])
  const [teachertList, setTeacherList] = useState([])


  useEffect(() => {
    !search && setIsLoading(true)
    const getAllStudentProfile = async () => {

      try {
        const route = `/teachers/profile/all`
        const result = await handleAllGetMethod(route);
        setTeacherList(result)

      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    getAllStudentProfile()
  }, [reload, search])

  const handleCheck = (e, id) => {
    const check = e.target.checked;

    if (check) {
      setIsCheckId(prevState => [...prevState, id]);
    } else {
      setIsCheckId(prevState => prevState.filter(item => item !== id));
    }
  }
 



  if (isLoading) {
    return <Loader />
  }

  return (
    <div>
      <div className='flex items-center justify-between my-3 font-medium capitalize'>
        <h2 className='text-2xl'>Teachers List</h2>
        <ReloadButton />
      </div>
      <div className="studentFilter">
        <div>
          <p>Teacher Name</p>
          <input onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search" />
        </div>
        <div>
          <p>Class</p>
          <select onChange={(e) => setSearch(e.target.value)} className="input text-gray-500">
            <option value="">All</option>
            <option value="six">Six</option>
            <option value="seven">Seven</option>
            <option value="eight">Eight</option>
            <option value="nine">Nine</option>
            <option value="ten">Ten</option>

          </select>
        </div>

      </div>



      <div className="flex items-center justify-between my-4">
        <p className="text-gray-400">Showing <span className="text-blue-600">
          {teachertList.length} </span> Teachers </p>

      </div>


      <TeacherProfileTable
        info={teachertList}
        handleCheck={handleCheck}
        isCheckId={isCheckId} 
      />
    </div>
  )
}
