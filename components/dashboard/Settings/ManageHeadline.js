"use client"

import { GlobalState } from "@/ContextApi/ContextApi"
import Heading from "@/components/Utils/Heading";
import { handleAllGetMethod } from "@/fetchApi/GetMethod/handleAllGetMethod";
import { useRouter } from "next/navigation";
import { useContext, useLayoutEffect, useState } from "react"
import DataTable from "react-data-table-component";
import { MdEdit } from "react-icons/md";

export default function ManageHeadline() {
  const { reload , setEditValue } = useContext(GlobalState);
  const [headline, setHeadline] = useState([])
  const router = useRouter()

  useLayoutEffect(() => {
    const getData = async () => {
      const route = "/headline/all"
      const result = await handleAllGetMethod(route);
      setHeadline(result)
    }

    getData()
  }, [reload]);


  const handlEditHeadline = (editInfo) => {
    setEditValue(editInfo);
    router.push("/dashboard/manage-content/add-content")
  }


  const columns = [

    {
      name: "Sl",
      selector: (info, i) => i + 1
    },
    {
      name: "Title",
      selector: info => info.title
    },
    {
      name: "Headline",
      selector: info => info.text
    },
    {
      name: "Published",
      selector: info => new Date(info.createdAt).toLocaleDateString("en-US")
    },
    {
      name: "Edit",
      selector: info => <span onClick={() => handlEditHeadline(info)} className="editBtn my-3"><MdEdit /></span>
    },
  ]

  return (
    <div className="adminPage">
      <Heading text="Headline" />

      <DataTable
        columns={columns}
        data={headline}
        pagination={headline.length >= 15}
      />
    </div>
  )
}
