import React from 'react'
import DataTable from 'react-data-table-component';
import { MdDelete } from "react-icons/md";
import { BiSolidMessageDetail } from "react-icons/bi";


export default function ContactMessageTable(props) {
  const route = "/contact/delete"
  const { message, handleCheckBox, handleDeleteContactMessage, handleDetails } = props;


  const columns = [
    {
      name: <div>
        {props.checkIds.length > 0 ?
          <span onClick={() => handleDeleteContactMessage(route)} className='deleteBtn'> <MdDelete />  </span>
          : "Select"}
      </div>,
      selector: info => <input onChange={(e) => handleCheckBox(e, info._id)} type="checkbox" />
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
      name: "Message",
      selector: info => info.message.slice(0, 17)
    },
    {
      name: "Date",
      selector: info => new Date(info.createdAt).toLocaleDateString('en-US')
    },
    {
      name: "Details",
      selector: info => <span onClick={() => handleDetails(info)} className='iconBtn bg-blue-600 text-white'> <BiSolidMessageDetail /></span>
    },
  ]


  return (
    <>
      <DataTable
        columns={columns}
        data={message}
        pagination
      />

    </>

  )
}
