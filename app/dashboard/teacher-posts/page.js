"use client"
import { GlobalState } from '@/ContextApi/ContextApi';
import Loader from '@/components/Utils/Loader';
import PageHeader from '@/components/Utils/PageHeader';
import PostsTable from '@/components/dashboard/PostsTable';
import React, { useContext, useLayoutEffect } from 'react'

export default function TeachersPosts() {
  const { reload , isLoading, getAllDataFunc, data,  } = useContext(GlobalState)


  useLayoutEffect(() => {
    const route = "/posts/all"
    getAllDataFunc(route)
  }, [reload])

  if (isLoading) {
    return <Loader />
  }
 

  return (
    <div className='adminPage'>

      <PageHeader text="Posts" />

      <div className='flex items-center justify-between my-5'>
        <p>Showing {data.length} Posts</p>
        <div className='w-[50%]'>
          <small>Title</small>
          <input type="search" className='input' placeholder='Search . . .' />
        </div>
      </div>


      {/*  table  */}
      <div>
        <PostsTable
          info={data}
        />
      </div>
      {/*  table  */}


    </div>
  )
}
