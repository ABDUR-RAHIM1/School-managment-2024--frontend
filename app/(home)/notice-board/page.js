import NoticeBoardItems from '@/components/Client/Main/NoticeBoardItems'
import Title from '@/components/Utils/Title'
import { handleAllGetMethod } from '@/fetchApi/GetMethod/handleAllGetMethod'
import React from 'react'

export default async function NoticeBoardPage() {
    const notice = await handleAllGetMethod("/notice/all")

    return (
        <div className='py-3'>
            <Title text={"All Notice"} />

            <div className='overflow-auto h-[100vh] my-4'>
                <table table="true" className='table'>
                    <thead className='bg-green-100 px-2 sticky top-0'>
                        <tr>
                            <th>নং</th>
                            <th>তারিখ</th>
                            <th>শিরোনাম</th>
                            <th>ডাউনলোড</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            notice && notice.slice().reverse().map((noticeItem, i) => (
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
        </div>
    )
}
