"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import Image from 'next/image';
import React, { useContext, useState } from 'react'
import avatar from "@/public/images/sd.png"
import { MdDelete, MdEdit, MdEmail, MdPerson } from 'react-icons/md';
import EditModal from '@/components/Utils/EditModal';

export default function ProfileCard(props) {
    const { username, email, photo } = props.profile;
    const { setEditValue } = useContext(GlobalState);

    const [showModal, setShowModal] = useState(false)
    const studentProfileData = true;

    const handleEditProfile = (editInfo) => {
        setShowModal(true)
        setEditValue(editInfo)
    }

    const closeModal = () => {
        setShowModal(false)
    }


    const handleDeleteAccount = (id) => {
        const confirmed = window.confirm("Are you sure you want to permanently delete this account?");
        if (confirmed) {
            const route = `/student/auth/delete/${id}`;
            singleDeleteFunc(route);
        }
    };

    return (
        <div className=' adminPage w-full md:w-[48%] py-10 px-3'>
            <div className='w-full bg-gray-50 dark:bg-slate-900 py-3'>
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
                        <span onClick={() => handleEditProfile(studentProfileData)} className='editBtn'>
                            <MdEdit />
                        </span>
                        <p>Edit</p>
                    </div>
                    <div onClick={() => handleDeleteAccount(studentProfileData._id)} className='text-center font-medium italic'>
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
