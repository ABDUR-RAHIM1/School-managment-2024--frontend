"use client"
import { GlobalState } from "@/ContextApi/ContextApi";
import Empty from "@/components/Utils/Empty";
import Loader from "@/components/Utils/Loader";
import ReloadButton from "@/components/Utils/ReloadButton";
import StudentTable from "@/components/dashboard/StudentTable";
import { handleDeleteMany } from "@/fetchApi/DeleteMethod/handleDeleteMany";
import { handleAllGetMethod } from "@/fetchApi/GetMethod/handleAllGetMethod";
import { useContext, useEffect, useState } from "react"
import { toast } from "react-toastify";

export default function ManageStudent() {
  const [student, setStudent] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState("")
  const { reload, setReload } = useContext(GlobalState)
  const [isCheckId, setIsCheckId] = useState([])

  useEffect(() => {
    search || !reload && setIsLoading(true)
    const getAllStudents = async () => {
      const route = `/student/auth/all?search=${search}`
      try {
        const result = await handleAllGetMethod(route);
        setStudent(result)

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

  //  handle Delete many students
  const handleDeleteManyStudent = async (e) => {
    e.preventDefault()
    const route = "/student/auth/delete-many"
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
      <form onSubmit={handleDeleteManyStudent}>
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
            {student.length} </span> Students </p>
          {/*  delete  many button */}
          {isCheckId.length > 0 && <div>
            <button type="submit" className="py-2 px-4 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 duration-200">Delete</button>
          </div>}
          {/*  delete  many button */}
        </div>



        <div className="studentTableContainer">

          <table className='table'>
            {

              student.length <= 0 ? <Empty text="record not found" />
                :

                <thead>
                  <tr>
                    <th>select</th>
                    <th>username</th>
                    <th>email</th>
                    <th>role</th>
                    <th>joined</th>
                    <th>status</th>
                    <th>reject</th>
                  </tr>
                </thead>
            }
            <tbody>
              {
                student && student.map((st) => (
                  <StudentTable key={st._id} student={st} handleCheck={handleCheck} />
                ))
              }

            </tbody>
          </table>
        </div>
      </form>

    </div>
  )
}
