import React from 'react'

export default function BookItems({ bookItems }) {
    const { group, subjectList, optional } = bookItems;
    return (
        <tr>
            <td className=' w-[20%] text-center bg-gray-100'>{group}</td>
            <td>
                <div className='flex items-center justify-center flex-wrap  overflow-x-auto w-[100%] h-[200px] bg-gray-200 px-5'>
                    <div>
                        {subjectList && subjectList.map((sbl, index) => (
                            <p key={index}>{sbl}</p>
                        ))}
                    </div>
                </div>
            </td>
            <td className='w-[20%] text-center bg-gray-100'>{optional}</td>
        </tr>
    )
}
