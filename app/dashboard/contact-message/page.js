"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import Loader from '@/components/Utils/Loader'
import MessageModal from '@/components/Utils/MessageModal'
import ReloadButton from '@/components/Utils/ReloadButton'
import ContactMessageTable from '@/components/dashboard/ContactMessageTable'
import { handleDeleteMany } from '@/fetchApi/DeleteMethod/handleDeleteMany'
import React, { useContext, useLayoutEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default function ContactMessage() {
  const { reload, setReload, setEditValue, getAllDataFunc, data, search, setSearch, isLoading, HandleCheckIds, checkIds, multipleDeleteFunc } = useContext(GlobalState)

  const [showModel, setShowModel] = useState(false)

  useLayoutEffect(() => {
    const route = `/contact/all?search=${search}`
    getAllDataFunc(route)
  }, [reload, search])


  //  handle check box
  const handleCheckBox = (e, ids) => {
    const isChecked = e.target.checked;
    HandleCheckIds(isChecked, ids)
  }
  //  handle check box end
 

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
    <div className='adminPage'>
      <div className="flex items-center justify-between">
        <h2 className='text-2xl italic font-medium'>Contact Message</h2>
        <ReloadButton />
      </div>
      {/*  header end here */}


      {/*  show items message */}
      <div className='my-4 flex items-center justify-between'>
        <p>Showing {data.length} Message</p>
        <div className='w-[40%]'>
          <p>Name</p>
          <input onChange={(e) => setSearch(e.target.value)} value={search} type="search" className='input' placeholder='Search . . ' />
        </div>
      </div>
      {/*  show items message  end here*/}



      {/* contact message table component start here */}
      <div>
        <ContactMessageTable
          message={data}
          handleCheckBox={handleCheckBox}
          checkIds={checkIds}
          handleDeleteContactMessage={multipleDeleteFunc}
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
