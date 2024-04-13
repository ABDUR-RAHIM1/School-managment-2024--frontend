"use client"

import { GlobalState } from "@/ContextApi/ContextApi"
import Loader from "@/components/Utils/Loader"
import PageHeader from "@/components/Utils/PageHeader"
import TeacherProfileTable from "@/components/dashboard/TeacherProfile"
import { useContext, useEffect } from "react"



export default function ManageTecher() {
  const { reload, search, setSearch, isLoading, getAllDataFunc, data, HandleCheckIds, checkIds, multipleDeleteFunc } = useContext(GlobalState)


  useEffect(() => {
    const route = `/teachers/profile/all`
    getAllDataFunc(route)
  }, [reload, search])

  const handleCheck = (e, ids) => {
    const isChecked = e.target.checked;

    HandleCheckIds(isChecked, ids)
  }




  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="adminPage">
      <PageHeader text="Teachers List" />
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
          {data.length} </span> Teachers </p>

      </div>


      <TeacherProfileTable
        info={data}
        handleCheck={handleCheck}
        isCheckId={checkIds}
        handleTeacherDelete={multipleDeleteFunc}
      />
    </div>
  )
}
