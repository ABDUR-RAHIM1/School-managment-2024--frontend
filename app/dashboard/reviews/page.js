"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import Loader from '@/components/Utils/Loader'
import MessageModal from '@/components/Utils/MessageModal'
import ReloadButton from '@/components/Utils/ReloadButton'
import ReviewsTable from '@/components/dashboard/ReviewsTable'
import { handleDeleteMany } from '@/fetchApi/DeleteMethod/handleDeleteMany'
import { handleAllGetMethod } from '@/fetchApi/GetMethod/handleAllGetMethod'
import React, { useContext, useLayoutEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default function Reviews() {
  const [isLoading, setIsLoading] = useState(false)
  const { reload, setReload, setEditValue } = useContext(GlobalState)
  const [showModel, setShowModel] = useState(false)
  const [checkIds, setCheckIds] = useState([])
  const [review, setReview] = useState([]);

  useLayoutEffect(() => {
    !reload && setIsLoading(true)
    const getAllReview = async () => {
      try {
        const route = "/review/all";
        const result = await handleAllGetMethod(route);
        if (result) {
          setReview((result))
        }
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    };
    getAllReview()
  }, [reload]);


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

  //  handle Delete multiple
  const handleReviewDeleteMany = async () => {
    try {
      const route = '/review/delete'
      const result = await handleDeleteMany(route, checkIds);
      if (result) {
        toast.success(result.message);
        setReload(!reload);
        setCheckIds([])
      }
    } catch (error) {
      console.log(error)
    }
  }


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
    <div className='reviewPage'>
      <div className="flex items-center justify-between">
        <h2 className='text-2xl italic font-medium'>Reviews</h2>
        <ReloadButton />
      </div>

      {/*  show count of review */}
      <div className='my-4 flex items-center justify-between'>
        <p>Showing {review.length} Reviews</p>

      </div>
      {/*  show count of review  end here*/}

      {/*  review table start here */}
      <div>
        <ReviewsTable
          review={review}
          handleCheckBox={handleCheckBox}
          checkIds={checkIds}
          handleReviewDeleteMany={handleReviewDeleteMany}
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
