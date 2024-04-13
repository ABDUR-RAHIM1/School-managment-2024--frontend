"use client"
import { GlobalState } from "@/ContextApi/ContextApi";
import Loader from "@/components/Utils/Loader";
import PageHeader from "@/components/Utils/PageHeader";
import TeacherTable from "@/components/dashboard/TeacherTable";
import { useContext, useEffect } from "react"

export default function ManageTeacher() {
  const { reload, search, setSearch, isLoading, getAllDataFunc, data, HandleCheckIds, checkIds, multipleDeleteFunc } = useContext(GlobalState)


  useEffect(() => {
    const route = `/teachers/auth/all?search=${search}`
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

      <PageHeader text="Teacher Managment" />


      <div className="studentFilter">
        <div>
          <p>Teacher Name</p>
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
          {data.length} </span> Teachers </p>

      </div>



      <div className="studentTableContainer">

        <TeacherTable
          teacher={data}
          handleCheck={handleCheck}
          isCheckId={checkIds}
          handleDeleteManyTeahcer={multipleDeleteFunc}
        />

      </div>

    </div>
  )
}
