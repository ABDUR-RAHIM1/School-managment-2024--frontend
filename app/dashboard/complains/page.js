"use client"
import { GlobalState } from "@/ContextApi/ContextApi" 
import Loader from "@/components/Utils/Loader"
import ReloadButton from "@/components/Utils/ReloadButton"
import ComplainTable from "@/components/dashboard/ComplainTable"
import { handleAllGetMethod } from "@/fetchApi/GetMethod/handleAllGetMethod"
import { useContext, useEffect, useState } from "react"


export default function ManageComplains() {
  const { reload } = useContext(GlobalState)
  const [search, setSearch] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const [complain, setComplain] = useState([])

  useEffect(() => {
    !search && setIsLoading(true)
    const getAllComplain = async () => {
      try {
        const route = `/complain/all?search=${search}`
        const data = await handleAllGetMethod(route)
        setComplain(data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    getAllComplain()
  }, [reload, search])





  if (isLoading) {
    return <Loader />
  }

  return (
    <div className='complain_page'>
      <div className='flex items-center justify-between my-3 font-medium capitalize'>
        <h2 className='text-2xl'>Complain of students</h2>
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
            <option value="checked">Seen</option>
            <option value="pending">Unseen</option>
          </select>
        </div>
      </div>

      <div className="flex items-center justify-between my-4">
        <p className="text-gray-400">Showing <span className="text-blue-600">
          {complain.length} </span> Complain </p>

      </div>

      <div className="complainsContainer">

        <ComplainTable
          complains={complain}
        />


      </div>

    </div>
  )
}
