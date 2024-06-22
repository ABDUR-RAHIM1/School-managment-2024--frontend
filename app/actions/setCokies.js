"use server"

import { cookies } from "next/headers"

export default async function setCokies() {
  
    cookies().set('name', "data")
    return (
        <div>setCokies</div>
    )
}
