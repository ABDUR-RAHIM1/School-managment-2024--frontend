"use client"

import { GlobalState } from "@/ContextApi/ContextApi"
import Loader from "@/components/Utils/Loader"
import ReloadButton from "@/components/Utils/ReloadButton"
import StudentProfileTable from "@/components/dashboard/StudentProfileTable"
import { handleAdminGetMethod } from "@/fetchApi/admin/api"
import { useContext, useEffect, useState } from "react"



export default function AccessStudent() {
  const { reload } = useContext(GlobalState)
  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState("")
  const [isCheckId, setIsCheckId] = useState([])
  const [StudentList, setStundentList] = useState([])


  useEffect(() => {
    !search && setIsLoading(true)
    const getAllStudentProfile = async () => {

      try {
        const route = `/profile/all?search=${search}`
        const result = await handleAdminGetMethod(route);
        setStundentList(result)

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
        <h2 className='text-2xl'>Student List</h2>
        <ReloadButton />
      </div>
      <div className="studentFilter">
        <div>
          <p>Student Name</p>
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
          {StudentList.length} </span> Students </p>
        {/*  delete  many button */}
        {isCheckId.length > 0 && <div>
          <button type="submit" className="py-2 px-4 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 duration-200">Delete</button>
        </div>}
        {/*  delete  many button */}
      </div>


      <StudentProfileTable
        info={StudentList}
        handleCheck={handleCheck}
      />
    </div>
  )
}
