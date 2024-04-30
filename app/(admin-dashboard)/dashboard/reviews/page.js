"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import Loader from '@/components/Utils/Loader'
import MessageModal from '@/components/Utils/MessageModal'
import ReloadButton from '@/components/Utils/ReloadButton'
import ReviewsTable from '@/components/dashboard/ReviewsTable'
import React, { useContext, useLayoutEffect, useState } from 'react'

export default function Reviews() {
  const { reload, setEditValue, getAllDataFunc, data, isLoading, checkIds, HandleCheckIds, multipleDeleteFunc } = useContext(GlobalState)
  const [showModel, setShowModel] = useState(false)

  useLayoutEffect(() => {
    const route = "/review/all";
    getAllDataFunc(route)
  }, [reload]);


  //  handle check box
  const handleCheckBox = (e, ids) => {
    const isChecked = e.target.checked;
    HandleCheckIds(isChecked, ids)
  }
  //  handle check box end



  const handleDetails = (info) => {
    setShowModel(true)
    setEditValue(info)
  }
  const closeModel = () => {
    setShowModel(false)
  }

  if (isLoading) {
    return <Loader />
  }
  return (
    <div className='adminPage'>
      <div className="flex items-center justify-between">
        <h2 className='text-2xl italic font-medium'>Reviews</h2>
        <ReloadButton />
      </div>

      {/*  show count of review */}
      <div className='my-4 flex items-center justify-between'>
        <p>Showing {data.length} Reviews</p>

      </div>
      {/*  show count of review  end here*/}

      {/*  review table start here */}
      <div>
        <ReviewsTable
          review={data}
          handleCheckBox={handleCheckBox}
          checkIds={checkIds}
          handleReviewDeleteMany={multipleDeleteFunc}
          handleDetails={handleDetails}
        />
      </div>
      {/*  review table end here */}

      {
        showModel && <MessageModal
          closeModel={closeModel}
          component={"review"}
        />
      }

    </div>
  )
}
