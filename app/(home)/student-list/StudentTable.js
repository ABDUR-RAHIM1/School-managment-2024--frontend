"use client"

import DataTable from "react-data-table-component"

export default function StudentTable(props) {

    const { info } = props;

    const columns = [
        {
            name: "No",
            selector: (row, index) => index + 1
        },
        {
            name: "Name",
            selector: row => row.name,
            sortable: true,
        },
        {
            name: "Class",
            selector: row => row.classCode,
            sortable: true,
        },
        {
            name: "Roll",
            selector: row => row.roll,
            sortable: true,
        },
        {
            name: "Group",
            selector: row => row.group,
            sortable: true,
        },
        {
            name: "Religion",
            selector: row => row.religion,
        },
    ]

    return (
        <DataTable
            columns={columns}
            data={info}
            pagination
        />
    )
}
