"use client"
import { GlobalState } from "@/ContextApi/ContextApi";
import Loader from "@/components/Utils/Loader";
import ReloadButton from "@/components/Utils/ReloadButton";
import StudentTable from "@/components/dashboard/StudentTable";
import { useContext, useEffect } from "react"

export default function ManageStudent() {
  const { reload, search, setSearch, isLoading, getAllDataFunc, data, HandleCheckIds, checkIds, multipleDeleteFunc } = useContext(GlobalState)


  useEffect(() => {
    const route = `/student/auth/all?search=${search}`
    getAllDataFunc(route)
  }, [reload, search]);

  const handleCheck = (e, ids) => {
    const isCheck = e.target.checked;
    HandleCheckIds(isCheck, ids)
  }


  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="manageStudentPage">
      <div className=" flex items-center justify-between border-b">
        <h2 className="text-2xl font-medium my-3 text-blue-900">Student Managment</h2>
        <ReloadButton />
      </div>


      <div className="studentFilter">
        <div>
          <p>Student Name</p>
          <input onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search" />
        </div>
        <div>
          <p>Status</p>
          <select onChange={(e) => setSearch(e.target.value)} className="input text-gray-500">
            <option value="">All</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="banned">Banned</option>
          </select>
        </div>
      </div>


      <div className="flex items-center justify-between">
        <p className="text-gray-400">Showing <span className="text-blue-600">
          {data.length} </span> Students </p>

      </div>



      <div className="studentTableContainer">

        <StudentTable
          student={data}
          handleCheck={handleCheck}
          isCheckId={checkIds}
          handleDeleteManyStudent={multipleDeleteFunc}
        />

      </div>

    </div>
  )
}
