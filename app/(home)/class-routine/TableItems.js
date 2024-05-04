import React from 'react'

export default function TableItems({ tableData }) {
    const { dayOfWeek, classCode, subject, teacherName, startTime, endTime } = tableData;
    return (
        <tr>
            <td>{dayOfWeek}</td>
            <td>{classCode}</td>
            <td>{subject}</td>
            <td>{teacherName}</td>
            <td>{startTime}</td>
            <td>{endTime}</td>
        </tr>
    )
}
