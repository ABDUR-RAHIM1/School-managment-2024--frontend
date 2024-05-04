import React from 'react'
import TableItems from './TableItems';
import { FaAdjust, FaAward, FaTimes } from 'react-icons/fa';

export default function Table(props) {
    const { classCode, data } = props;

    return (
        <div className=' overflow-x-auto'>
            <div className='mb-3 flex items-center justify-center gap-2'>
                <span className='text-4xl text-purple-600'>
                    <FaAward />
                </span>
                <h2 className='text-center text-3xl italic'>Class {classCode} </h2>
            </div>
            <table className='table border'  >
                {
                    data.length > 0 ?
                        <thead>
                            <tr>
                                <th>Exam Name</th>
                                <th>Class</th>
                                <th>Subject</th>
                                <th>Exam Date</th>
                                <th>Start Time</th>
                                <th>Duration</th>
                            </tr>
                        </thead>
                        :
                        <p className=' text-xl my-3 text-red-500'>Record not found</p>
                }
                <tbody >
                    {
                        data && data.map(examRoutine => (
                            <TableItems
                                key={examRoutine._id}
                                tableData={examRoutine}
                            />
                        ))
                    }
                </tbody>

            </table>
        </div>
    )
}
