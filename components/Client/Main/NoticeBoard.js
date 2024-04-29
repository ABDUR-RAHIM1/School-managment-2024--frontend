
import Title from '@/components/Utils/Title'
import { handleAllGetMethod } from '@/fetchApi/GetMethod/handleAllGetMethod'
import React from 'react'
import { MdDownload } from 'react-icons/md'

export default async function NoticeBoard() {
    const notice = await handleAllGetMethod("/notice/all")


    return (
        <div className='card'>
            <Title text={"নোটিশ  বোর্ড "} />

            <div className='overflow-auto h-[300px]'>
                <table table="true" className='table'>
                    <thead className='bg-green-100 px-2'>
                        <tr>
                            <th>নং</th>
                            <th>তারিখ</th>
                            <th>শিরোনাম</th>
                            <th>ডাউনলোড</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            notice && notice.map((n, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{new Date(n.createdAt).toLocaleDateString("en-US")}</td>
                                    <td>{n.subject}</td>
                                    <td className=' flex items-center text-blue-600 cursor-pointer hover:text-blue-800'>
                                        <span className='text-3xl'> <MdDownload /></span>
                                        <p>Download</p>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot>
                        {null}
                    </tfoot>
                </table>
            </div>

        </div>
    )
}
