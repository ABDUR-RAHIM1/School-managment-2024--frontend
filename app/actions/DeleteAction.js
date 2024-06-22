"use server"
import { API } from '@/fetchApi/API'

export default async function DeleteAction(url) {

    const response = await fetch(API + url, {
        method: "DELETE"
    });

    const result = await response.json()

    return result

}
