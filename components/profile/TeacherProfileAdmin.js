"use client"
import Image from 'next/image';
import DataTable from 'react-data-table-component';
import dummyImg from "@/public/images/sd.png"
//  for admin (id)
export default function TeacherProfileAdmin(props) {

    const { info } = props; 
    const columns = [
        {
            name: "Photo",
            selector: info => info.photo,
            cell: info => <Image src={info.photo || dummyImg} width={100} height={100} className='w-16 h-16 rounded-full my-3' alt='teacher profile photo' />
        },
        {
            name: "Name",
            selector: info => info.name
        },
        {
            name: "Email",
            selector: info => info.email
        },
        {
            name: "Date of Birth",
            selector: info => info.dateOfBirth,
            cell: info => new Date(info.dateOfBirth).toLocaleDateString("en-US")
        },
        {
            name: "Gender",
            selector: info => info.gender
        },
        {
            name: "Qualification",
            selector: info => info.qualification
        },
    ]

    return (
        <div>
            <DataTable
                columns={columns}
                data={info}
                pagination
            />
        </div>
    )
}


