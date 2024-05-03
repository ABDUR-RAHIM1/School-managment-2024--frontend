 
import React from 'react'
import { MdDownload } from 'react-icons/md'

export default async function NoticeBoardItems(props) { 

    const { createdAt, subject, } = props.data

    return (

        <tr>
            <td>{props.index + 1}</td>
            <td>{new Date(createdAt).toLocaleDateString("en-US")}</td>
            <td>{subject}</td>
            <td className=' flex items-center text-blue-600 cursor-pointer hover:text-blue-800'>
                <span className='text-3xl'> <MdDownload /></span>
                <p>Download</p>
            </td>
        </tr>

    )
}
