
import Title from '@/components/Utils/Title'
import React from 'react'
import NoticeBoardItems from './NoticeBoardItems'
import { handleAllGetMethod } from '@/fetchApi/GetMethod/handleAllGetMethod'
import Link from 'next/link'

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
                            notice && notice.slice(-5).reverse().map((noticeItem, i) => (
                                <NoticeBoardItems
                                    key={i}
                                    data={noticeItem}
                                    index={i}
                                />
                            ))
                        }
                    </tbody>
                    <tfoot>
                        {null}
                    </tfoot>
                </table>
            </div>

            <div className='btn_wrap'>
                <Link href={"/notice-board"} className="myBtn">আরো দেখুন</Link>
            </div>

        </div>
    )
}
