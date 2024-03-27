"use client"
import getDateInfo from '@/Helpers/Date';
import Spinner from '@/components/Utils/Spinner';
import { handleAdminDeleteMethod, handleAdminGetMethod } from '@/fetchApi/admin/api'
import React, { useEffect, useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';
import { GoPersonAdd } from "react-icons/go";
import { useRouter } from 'next/navigation';
import Model from '@/components/Utils/Model';

export default function AdminLists() {
  const [isLoading, setIsLoading] = useState(false)
  const [filterText, setFilerText] = useState("")
  const [isDelete, setIsDelete] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState(null)
  const [adminList, setAdminList] = useState([])
  const router = useRouter()


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const route = `/admin/auth/all?search=${filterText}`;
        const data = await handleAdminGetMethod(route);
        setAdminList(data);
      } catch (error) {
        console.error("Error fetching admin list:", error);

        toast.error("Failed to fetch admin list");
      } finally {
        setIsLoading(false)
      }
    };

    fetchData();


  }, [isDelete, filterText]);


  //  delete handler 
  const handleDeleteAdmin = async (id) => {
    setIsLoading(true)
    try {
      const deleteRoute = `/admin/auth/delete/${id}`
      const result = await handleAdminDeleteMethod(deleteRoute)

      toast(result.message)
      setIsDelete(!isDelete)
    } catch (error) {
      toast.error("somthing went wrong")
    } finally {
      setIsLoading(false)
    }
  }


  //  navigate to dashboard/admin-add route
  const handleAddNewBtn = () => {
    router.push("/dashboard/admin-add")
  }

  const handleFilterAdmin = (e) => {
    const text = e.target.value.toLowerCase()
    setFilerText(text)
  }

  //  edit admin handler 
  const handleEditAdmin = (info) => {
    setModalData(info)
    setShowModal(true)

  }
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='adminListPage relative overflow-x-auto'>

      <div className='flex items-center justify-between'>
        <h2 className='my-10 text-2xl italic font-medium'>Team <span className='text-sm ml-3 border p-1'>{adminList.length}
          {
            filterText ? " " + filterText : " members"
          }
        </span> </h2>
        <div>
          <button onClick={handleAddNewBtn} className='flex items-center gap-1 bg-blue-500 text-white hover:bg-blue-600 duration-200 py-2 px-3 rounded-md text-sm'> <span className='text-xl'><GoPersonAdd /></span> Add New</button>
        </div>
      </div>

      {/*  filterd admin moderator  */}
      <div className='flex items-center gap-2 mb-6'>
        <p className='font-medium'>filter by :</p>
        <select value={filterText} onChange={handleFilterAdmin} className='py-1 px-3 focus:outline-none border border-gray-200'>
          <option value="">All</option>
          <option value="admin">admin</option>
          <option value="moderator">moderator</option>
        </select>
      </div>

      <div className='my-4 text-center'>
        {isLoading && <Spinner />}
      </div>
      {
        isLoading ? "loading . . ." :
          <table className='table'>
            {adminList.length <= 0 ? "not found" :
              <thead>
                <tr>
                  <th><input className='mr-5' type="checkbox" /></th>
                  <th>Name</th>
                  <th>Email address</th>
                  <th>Role</th>
                  <th>joined</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>}
            <tbody>
              {
                adminList && adminList.map((t, i) => (
                  <tr key={t._id}>
                    <th>
                      <input type="checkbox" />
                    </th>
                    <td className='capitalize'> <span className='py-2 px-3 bg-blue-300 rounded-full'>{t.username.slice(0, 1)}</span> {t.username}</td>
                    <td>{t.email}</td>
                    <td className='capitalize'>{t.role}</td>
                    <td>{getDateInfo(t.createdAt).day + "/" + getDateInfo(t.createdAt).month + "/" + getDateInfo(t.createdAt).year}</td>
                    <td> <button onClick={() => handleEditAdmin(t)} className='editBtn'><CiEdit /></button> </td>
                    <td> <button disabled={isLoading} onClick={() => handleDeleteAdmin(t._id)} className='deleteBtn'>
                      <MdDelete />
                    </button> </td>
                  </tr>
                ))
              }
            </tbody>
          </table>

      }
      {showModal && <Model
        data={modalData}
        closeModal={closeModal}
      />}
    </div>
  )
}
