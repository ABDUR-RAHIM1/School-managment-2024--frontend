"use client"
import { GlobalState } from "@/ContextApi/ContextApi";
import StudentTable from "@/components/dashboard/StudentTable";
import { handleAllGetMethod } from "@/fetchApi/GetMethod/handleAllGetMethod";
import { useContext, useEffect, useState } from "react"


export default function ManageStudent() {
  const [student, setStudent] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const { reload } = useContext(GlobalState)

  useEffect(() => {
    setIsLoading(true)
    const getAllStudents = async () => {
      const route = "/student/auth/all"
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
  }, [reload]);
 
  return (
    <div className="manageStudentPage">
      <h2 className="text-2xl font-medium my-3 text-blue-900">Student Managment</h2>

      <div className="studentTableContainer">
     {  
       isLoading ? "loading . . ." : 
     <table className='table'>
          <thead>
            <tr>
              <th>select</th> 
              <th>username</th>
              <th>email</th>
              <th>role</th>
              <th>status</th>
              <th>joined</th>
              <th>active</th>
              <th>reject</th>
            </tr>
          </thead>
          <tbody>
            {
              student && student.map((st) => (
                <StudentTable key={st._id} student={st} />
              ))
            }
          </tbody>
        </table>
        
        }
      </div>

    </div>
  )
}
