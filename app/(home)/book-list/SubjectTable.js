import React from 'react'
import BookItems from './BookItems';

export default function SubjectTable(props) {
    const { classCode, data } = props;
    return (
        <div className=' overflow-x-auto'>
            <h2 className='text-3xl text-center'>Class {classCode}</h2>
            <table className='table' >
                <thead className='bg-gray-300 text-center'>
                    <tr>
                        <th>Group</th>
                        <th>Subject List</th>
                        <th>Optional Subject</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map(item => (
                            <BookItems
                                key={item._id}
                                bookItems={item}
                            />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
