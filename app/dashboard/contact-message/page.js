"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import Loader from '@/components/Utils/Loader'
import MessageModal from '@/components/Utils/MessageModal'
import ReloadButton from '@/components/Utils/ReloadButton'
import ContactMessageTable from '@/components/dashboard/ContactMessageTable'
import { handleDeleteMany } from '@/fetchApi/DeleteMethod/handleDeleteMany'
import { handleAllGetMethod } from '@/fetchApi/GetMethod/handleAllGetMethod'
import React, { useContext, useLayoutEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default function ContactMessage() {
  const [isLoading, setIsLoading] = useState(false)
  const { reload, setReload, setEditValue } = useContext(GlobalState)
  const [checkIds, setCheckIds] = useState([])
  const [search, setSearch] = useState("")
  const [showModel, setShowModel] = useState(false)
  const [contactMessage, setContactMessage] = useState([])

  useLayoutEffect(() => {
    search || !reload && setIsLoading(true)
    const getAllContactMessage = async () => {
      try {
        const route = `/contact/all?search=${search}`
        const result = await handleAllGetMethod(route);
        if (result) {
          setContactMessage(result)
        }
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    getAllContactMessage()
  }, [reload, search])


  //  handle check box
  const handleCheckBox = (e, id) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setCheckIds([...checkIds, id])

    } else {
      const removeId = checkIds.filter(i => i !== id)
      setCheckIds(removeId)
    }
  }
  //  handle check box end

  //  delete multiple contact messsage handler
  const handleDeleteContactMessage = async () => {

    try {
      const route = "/contact/delete"
      const result = await handleDeleteMany(route, checkIds);
      if (result) {
        toast.success(result.message);
        setCheckIds([])
        setReload(!reload)
      }
    } catch (error) {
      console.log(error)
    }
  }
  //  delete multiple contact messsage handler end

  // handle Details message
  const handleDetails = (info) => {
    setShowModel(true)
    setEditValue(info)
  }
  const closeModel = () => {
    setShowModel(false)
  }
  // handle Details message end here


  //  loader component
  if (isLoading) {
    return <Loader />
  }
  return (
    <div className='contactMessagePage'>
      <div className="flex items-center justify-between">
        <h2 className='text-2xl italic font-medium'>Contact Message</h2>
        <ReloadButton />
      </div>
      {/*  header end here */}


      {/*  show items message */}
      <div className='my-4 flex items-center justify-between'>
        <p>Showing {contactMessage.length} Message</p>
        <div className='w-[40%]'>
          <p>Name</p>
          <input onChange={(e) => setSearch(e.target.value)} value={search} type="search" className='input' placeholder='Search . . ' />
        </div>
      </div>
      {/*  show items message  end here*/}



      {/* contact message table component start here */}
      <div>
        <ContactMessageTable
          message={contactMessage}
          handleCheckBox={handleCheckBox}
          checkIds={checkIds}
          handleDeleteContactMessage={handleDeleteContactMessage}
          handleDetails={handleDetails}
        />
      </div>
      {/* contact message table component end here */}
      {
        showModel && <MessageModal
          closeModel={closeModel}
          component={"contact"}
        />
      }
    </div>
  )
}
