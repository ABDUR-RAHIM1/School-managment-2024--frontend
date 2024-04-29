"use client"
import Image from 'next/image'
import React from 'react'
import { FaBookReader, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaTwitter  } from 'react-icons/fa'
import { MdEmail, MdFacebook } from 'react-icons/md'

export default function Footer() {


    const handlePhoneCLick = () => {
        alert("Phone Number : 01321040273")
    }

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
                <div className='w-full md:w-[50%] m-auto bg-gray-100 rounded-md py-3 px-5 flex items-center gap-4 flex-wrap '>
                    <div className=' w-[150px] pr-3 border-r border-gray-300'>
                        <Image
                            src="https://scontent.fdac96-1.fna.fbcdn.net/v/t39.30808-6/430144545_1899988140419175_1681205274302736236_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeENvsF6MDvyWML1JBiLaFLbKo1gOZ-t2TAqjWA5n63ZME2iD-aCYTUXNzZm6bsZj01sEygVqr1RYhCWd0TTAcrW&_nc_ohc=Y7MUlfrols0Q7kNvgGG19Pu&_nc_zt=23&_nc_ht=scontent.fdac96-1.fna&oh=00_AfDu7xsOpBb3XUg0g4YKvr0Dybz7tDkH-AKYaIcKMgvxdA&oe=6635B1CC"
                            width={1000}
                            height={1000}
                            alt='developer photo'
                            className='w-full h-full rounded-md my-3'
                        />

                    </div>

                    <div className='w-auto'>
                        <h2 className='text-2xl italic font-medium'>Abdur Rahim</h2>
                        <h2 className='text-xl italic font-medium'>Web Developer</h2>
                        <div className='my-3 flex items-center gap-3 bg-gray-200 shadow-md py-2 px-3'>
                            <a className='inline-block text-3xl text-blue-700 hover:text-blue-800 duration-150' href="https://web.facebook.com/Aabdurrahim.17" target="_blank" rel="noopener noreferrer">
                                <FaFacebook />
                            </a>
                            <a onClick={handlePhoneCLick} className='inline-block text-3xl text-blue-700 hover:text-blue-800 duration-150' href='/'>
                                <FaPhone />
                            </a>
                            <a className='inline-block text-3xl text-blue-700 hover:text-blue-800 duration-150' href="https://github.com/ABDUR-RAHIM1" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                            <a className='inline-block text-3xl text-blue-700 hover:text-blue-800 duration-150' href="mailto:abdurrahim88557@gmail.com" target="_blank" rel="noopener noreferrer">
                                <MdEmail />
                            </a>
                            <a className='inline-block text-3xl text-blue-700 hover:text-blue-800 duration-150' href="https://www.linkedin.com/in/abdur-rahim-1710a4250/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}
