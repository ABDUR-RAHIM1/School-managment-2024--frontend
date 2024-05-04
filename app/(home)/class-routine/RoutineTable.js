import React from 'react'
import TableItems from './TableItems';
import { FaSchool } from 'react-icons/fa';

export default function RoutineTable(props) {
    const { classCode, data } = props;
    return (
        <div className=' overflow-x-auto'>
            <div className='mb-3 flex items-center justify-center gap-2 '>
                <span className='text-4xl text-purple-500'>
                    <FaSchool />
                </span>
                <h2 className='text-3xl italic text-center'>Class {classCode}</h2>
            </div>
            <table className='table'>
                {
                    data.length > 0 ?
                        (<thead>
                            <tr>
                                <th>Day</th>
                                <th>Class</th>
                                <th>Subject</th>
                                <th>Teacher</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                            </tr>
                        </thead>)
                        :
                        (<p className='text-red-500 text-xl my-2'>No Records here</p>)
                }
                <tbody>

                    {
                        data && data.map(routine => (
                            <TableItems
                                key={routine._id}
                                tableData={routine}
                            />
                        ))
                    }
                </tbody>
                <tfoot>
                    {null}
                </tfoot>
            </table>
        </div>
    )
}
