"use client"
import Image from 'next/image';
import DataTable from 'react-data-table-component';
import dummyImg from "@/public/images/sd.png"
//  for admin (id)
export default function StudentProfileAdmin(props) {

    const { info } = props; 
    const columns = [
      
        {
            name: 'Image',
            cell: info => <Image src={info.photo || dummyImg} width={1000} height={1000} className='w-12 h-12 rounded-full my-2' alt="Student"  />
               

        },
        {
            name: 'Name',
            selector: info => info.name,  
        },
        {
            name: 'Email',
            selector: info => info.email,
        },
        {
            name: 'Class',
            selector: info => info.classCode,
        },
        {
            name: 'Group',
            selector: info => info.group,
        },
        {
            name: 'Roll',
            selector: info => info.roll,
        },
        {
            name: 'Session',
            selector: info => info.session,
        },
        {
            name: 'Scholarship',
            selector: info => "Yes",
        },
    ];

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


