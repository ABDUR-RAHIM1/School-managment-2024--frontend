"use client"
import { GlobalState } from '@/ContextApi/ContextApi';
import Loader from '@/components/Utils/Loader';
import PageHeader from '@/components/Utils/PageHeader';
import ReloadButton from '@/components/Utils/ReloadButton';
import PostsTable from '@/components/dashboard/PostsTable';
import { handleAllGetMethod } from '@/fetchApi/GetMethod/handleAllGetMethod';
import React, { useContext, useLayoutEffect, useState } from 'react'

export default function TeachersPosts() {
  const { reload, setReload } = useContext(GlobalState)
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useLayoutEffect(() => {
    setIsLoading(true)
    const getAllPosts = async () => {
      try {
        const route = "/posts/all"
        const posts = await handleAllGetMethod(route)
        if (posts) {
          setPosts(posts)
        }
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    getAllPosts()
  }, [reload])

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className='adminPage'>

      <PageHeader text="Posts" />

      <div className='flex items-center justify-between my-5'>
        <p>Showing {posts.length} Posts</p>
        <div className='w-[50%]'>
          <small>Title</small>
          <input type="search" className='input' placeholder='Search . . .' />
        </div>
      </div>


      {/*  table  */}
      <div>
        <PostsTable
          info={posts}
        />
      </div>
      {/*  table  */}


    </div>
  )
}
