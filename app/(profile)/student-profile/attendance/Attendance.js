"use client"
import Select from '@/components/Utils/Select';
import DataTable from 'react-data-table-component';
import { MdSearch } from 'react-icons/md';

export default function Attendance(props) {

    const { attendance, handleSearchValue } = props;


    const handleChange = (e) => {
        const text = e.target.value
        handleSearchValue(text)

    }

    const columns = [
        {
            name: "Name",
            selector: row => row.studentName
        },
        {
            name: "Class",
            selector: row => row.classCode
        },
        {
            name: "Group",
            selector: row => row.group
        },
        {
            name: "Roll",
            selector: row => row.roll
        },
        {
            name: "Day",
            selector: row => row.dateByday,
            cell: row => new Date(row.dateByday).toLocaleDateString(),
            sortable: true,
        },
        {
            name: "Attendance",
            selector: row => row.status,
            cell: row => <p className={`${row.status === "Present" ? "text-green-700" : row.status === "Late" ? "text-orange-500" : "text-red-600"}`}>{
                row.status
            }</p>
        },
    ]
    const months = [
        "Select Month",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];





    return (
        <div>
            <div className="border flex items-center justify-between gap-3">
                <div  >
                    <MdSearch className='text-5xl text-purple-600' />
                </div>
                <Select
                    name="Attendance"
                    options={months} 
                    onChange={handleChange}
                />
            </div>
            <DataTable
                data={attendance}
                columns={columns}
                pagination
                highlightOnHover
                pointerOnHover
            />
        </div>
    )
}
