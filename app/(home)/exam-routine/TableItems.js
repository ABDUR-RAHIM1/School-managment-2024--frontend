import React from 'react'

export default function TableItems({ tableData }) {
    const { classCode, subject, examName, examDate, examTime, examDuration } = tableData;
    return (
        <tr>
            <td>{examName}</td>
            <td>{classCode}</td>
            <td>{subject}</td>
            <td>{new Date(examDate).toLocaleDateString()}</td>
            <td>{examTime}</td>
            <td>{examDuration} Hours</td>
        </tr>
    )
}
