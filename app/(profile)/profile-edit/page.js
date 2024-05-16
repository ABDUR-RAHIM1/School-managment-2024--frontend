"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import Image from 'next/image';
import React, { useContext, useState } from 'react'
import avatar from "@/public/images/sd.png"
import { MdDelete, MdEdit, MdEmail, MdPerson } from 'react-icons/md';
import Model from '@/components/Utils/Model';
import EditModal from '@/components/Utils/EditModal';

export default function ProfileEdit() {
    const { profileData, editValue, setEditValue } = useContext(GlobalState);

    const [showModal, setShowModal] = useState(false)

    const { username, photo, email } = profileData;

    const handleEditProfile = (editInfo) => {
        setShowModal(true)
        setEditValue(editInfo)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <div className=' bg-gray-100  py-10 px-3'>
            <div className='w-full bg-gray-50 py-3'>
                <Image
                    src={photo || avatar}
                    width={500}
                    height={500}
                    alt='profile photo'
                    className=' w-[300px] h-[250px] m-auto rounded-md my-3 border '

                />
            </div>
            <div className='my-5 px-5'>
                <div className='flex items-center justify-between my-5 border py-3 px-4'>
                    <div className='text-center font-medium italic'>
                        <span onClick={() => handleEditProfile(profileData)} className='editBtn'>
                            <MdEdit />
                        </span>
                        <p>Edit</p>
                    </div>
                    <div className='text-center font-medium italic'>
                        <span className='deleteBtn'>
                            <MdDelete />
                        </span>
                        <p>Delete Account</p>
                    </div>

                </div>
                <div className=' w-full md:w-[300px] m-auto'>
                    <div className='flex items-center gap-1'>
                        <span className='text-3xl text-blue-500'>
                            <MdPerson />
                        </span>
                        <p>{username}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <span className='text-3xl text-blue-500'>
                            <MdEmail />
                        </span>
                        <p>{email}</p>
                    </div>
                </div>
            </div>


            {
                showModal && <EditModal
                closeModal={closeModal}
                />
            }

        </div >
    )
}
