"use client"
import React from 'react'
import { FaBookReader, FaInstagram, FaTwitter } from 'react-icons/fa'
import { MdFacebook } from 'react-icons/md'
import DeveloperCard from './Main/DeveloperCard'

export default function Footer() {


    return (
        <div className='bg-gray-200 py-20 px-5'>
            <div className='py-5 flex items-center justify-center'>
                <span className='text-8xl text-blue-700'>
                    <FaBookReader />
                </span>
            </div>


            <div className='flex  justify-between flex-wrap my-5'>
                <div className='w-[58%] '>
                    <h2 className='text-2xl italic font-bold'>
                        দেওডোবা তারক নাথ সরকার মাধ্যমিক বিদ্যালয়
                    </h2>
                    <p className='py-2 '>
                        শিক্ষা আলোর পথ যেন জ্বলতে থাকে সর্বদা, তাই আমরা শিক্ষার উজ্জ্বল পথে অগ্রসর করে যাচ্ছি । আমরা সম্পূর্ণ নির্ভরযোগ্য ও বিশ্বস্ত পথে অগ্রসর করে যাচ্ছি একটি পরিপূর্ণ সমস্ত শিক্ষার প্রস্তুতি দেওয়ার জন্য।
                    </p>
                </div>
                <div className='w-[38%]'>
                    <h2 className='text-2xl italic font-bold'>যোগাযোগ</h2>
                    <div className='flex items-center gap-4 my-5'>
                        <a href='' className='block text-4xl text-blue-700 cursor-pointer'><MdFacebook /></a>
                        <a href='' className='block text-4xl text-purple-700 cursor-pointer'><FaInstagram /></a>
                        <a href='' className='block text-4xl text-orange-700 cursor-pointer'><FaTwitter /></a>
                    </div>
                </div>
            </div>


            {/* contact with develoepr */}
            <div className='my-5'>
                <DeveloperCard />
            </div>


        </div>
    )
}
