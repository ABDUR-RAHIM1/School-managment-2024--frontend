import Link from 'next/link'
import React from 'react'
import ManageContent from "@/components/dashboard/Settings/ManageContent"
export default function ManageAllContent() {
  return (
    <div>
      <button className='py-2 px-3 border border-blue-500 text-blue-500 rounded-md'>
        <Link href={`/dashboard/manage-content/add-content`}>
          Add Contents
        </Link>
      </button>
      <ManageContent />
      <p>add logo</p>
      <p>aabout page</p>
      <p>add tour slider</p>
      <p>add main slider</p>
      <p>add headline</p>
    </div>
  )
}
