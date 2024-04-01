"use client"
import { GlobalState } from "@/ContextApi/ContextApi";
import Loader from "@/components/Utils/Loader";
import ReloadButton from "@/components/Utils/ReloadButton";
import TeacherTable from "@/components/dashboard/TeacherTable";
import { handleDeleteMany } from "@/fetchApi/DeleteMethod/handleDeleteMany";
import { handleAllGetMethod } from "@/fetchApi/GetMethod/handleAllGetMethod";
import { useContext, useEffect, useState } from "react"
import { toast } from "react-toastify";

export default function ManageTeacher() {
  const [teacher, setTeacher] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState("")
  const { reload, setReload } = useContext(GlobalState)
  const [isCheckId, setIsCheckId] = useState([])

  useEffect(() => {
    search || !reload && setIsLoading(true)
    const getAllStudents = async () => {
      const route = `/teachers/auth/all?search=${search}`
      try {
        const result = await handleAllGetMethod(route);
        setTeacher(result)

      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    };

    getAllStudents()
  }, [reload, search]);

  const handleCheck = (e, id) => {
    const check = e.target.checked;

    if (check) {
      setIsCheckId(prevState => [...prevState, id]);
    } else {
      setIsCheckId(prevState => prevState.filter(item => item !== id));
    }
  }

  //  handle Delete many teacher
  const handleDeleteManyTeahcer = async (e) => {

    const route = "/teachers/auth/delete-many"
    try {
      const result = await handleDeleteMany(route, isCheckId);
      if (result.isDelete) {
        toast.success(result.message)
        setReload(!reload)
        setIsCheckId([])
      } else {
        toast.warning(result.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="manageStudentPage">
      <div className=" flex items-center justify-between border-b">
        <h2 className="text-2xl font-medium my-3 text-blue-900">Teacher Managment</h2>
        <ReloadButton />
      </div>


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
          {teacher.length} </span> Teachers </p>

      </div>



      <div className="studentTableContainer">

        <TeacherTable
          teacher={teacher}
          handleCheck={handleCheck}
          isCheckId={isCheckId}
          handleDeleteManyTeahcer={handleDeleteManyTeahcer}
        />

      </div>

    </div>
  )
}
