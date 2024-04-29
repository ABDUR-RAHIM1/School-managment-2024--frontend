import Title from '@/components/Utils/Title'
import { handleAllGetMethod } from '@/fetchApi/GetMethod/handleAllGetMethod'
import Image from 'next/image'
import dummyImg from "@/public/images/sd.png"
import React from 'react'

export default async function Committe() {
    const committe = await handleAllGetMethod("/comitee/all")

    return (
        <div className='card '>
            <Title text={"বর্তমান কমিটির তালিকা"} />

            <div className='overflow-auto h-[350px]'>
                <table table={"true"} className='table w-[full]  min-w-[800px] '>
                    <thead>
                        <tr>
                            <th className='w-[100px]'>নং</th>
                            <th>ফটো </th>
                            <th>নাম</th>
                            <th>অবস্থান</th>
                            <th >পদবী</th>
                            <th >জিমেইল </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            committe.map((item, index) => (
                                <Commitetable
                                    key={item._id}
                                    committe={item}
                                    index={index}
                                />
                            ))
                        }
                    </tbody>
                    <tfoot>
                        {null}
                    </tfoot>
                </table>
            </div>

            <div className="btn_wrap">
                <button className='myBtn'>
                    আরো দেখুন
                </button>
            </div>

        </div>
    )
}

const Commitetable = (props) => {
    const { name, email, phone, title, position, photo } = props.committe
    return (
        <tr>
            <td>{props.index + 1}</td>
            <td>
                <Image
                    src={photo || dummyImg}
                    width={100}
                    height={100}
                    alt='committe photo'
                    className='rounded-md w-16 h-16'
                />
            </td>
            <td>{name}</td>
            <td>{title}</td>
            <td>{position}</td>
            <td>{email}</td>
        </tr>
    )
}