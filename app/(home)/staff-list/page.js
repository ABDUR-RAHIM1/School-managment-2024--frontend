import Title from '@/components/Utils/Title'
import { handleAllGetMethod } from '@/fetchApi/GetMethod/handleAllGetMethod'
import Image from 'next/image'
import React from 'react'

export default async function Staffpage() {
    const staff = await handleAllGetMethod("/staffs/all")
    console.log(staff)
    return (
        <div className='my-3'>
            <Title text={"Staffs List"} />

            <div className='listCardWrapper'>
                {
                    staff && staff.map(staff => (
                        <div className='listCard' key={staff._id}>
                            <div>
                                <Image
                                    src={staff.photo || dummyImg}
                                    width={1000}
                                    height={1000}
                                    alt='staff photo'
                                    className='listCardPhoto'
                                />
                                <small>Profile Created : {new Date(staff.createdAt).toLocaleDateString("en-US")} </small>
                            </div>
                            <div className='text'>
                                <p>Name : {staff.username}</p>
                                <p>Position : {staff.position} </p>
                                <p>Role : {staff.role} </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
