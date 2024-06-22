"use client"
import DeleteAction from '@/app/actions/DeleteAction'
import { toast } from 'react-toastify'

export default async function DeleteMethod(route) {

    const result = await DeleteAction(route)

    if (result.ok) {
        toast.success(result.message)
    } else {
        toast.error(result.message)
    }


    return result
}
