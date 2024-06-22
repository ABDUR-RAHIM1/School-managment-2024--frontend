"use server"

import { API } from "@/fetchApi/API"

export default async function FetchDataStudent(url, token) {
    const res = await fetch(API + url, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        cache: "no-store"
    })
    const data = await res.json();

    return data


}
