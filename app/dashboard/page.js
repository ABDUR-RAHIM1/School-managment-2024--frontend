"use client"
import PeopleCounter from '@/components/dashboard/Home/PeopleCounter'
import React from 'react'
import { MdDashboard } from 'react-icons/md'

export default function DashboadHome() {
  return (
    <>
      <div className='flex items-center gap-2 my-4 text-blue-950'>
        <span className='text-4xl'>
          <MdDashboard />
        </span>
        <h2 className='text-2xl font-medium '>Dashboard</h2>
      </div>


      <PeopleCounter />


    </>
  )
}
