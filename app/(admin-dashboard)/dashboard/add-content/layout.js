"use client"
import addContentItem from '@/Data/AddContentItems'
import Link from 'next/link'
import React from 'react'
import { MdLabel } from 'react-icons/md'

export default function AddContentLayout({ children }) {


    return (
        <div>

            <div className=' adminPage'>
                 <h2 className='text-2xl italic font-medium mb-4'>Add Content</h2>
                <div className='flex flex-col gap-4 my-4'>
                    {
                        addContentItem.map((ad, i) => (
                            <div key={i} className='flex items-center gap-2'>
                                <MdLabel className='text-2xl' />
                                <Link key={ad.href} href={ad.href}>
                                    {ad.text}
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>

            {children}
        </div>
    )
}
