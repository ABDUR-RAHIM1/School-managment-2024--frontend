"use server"

import { API } from "@/fetchApi/API"

export default async function UpdateAction(url, formData) {

    const response = await fetch(API + url, {
        method: "PUT",
        headers: {
            "Context-type": "apllication/json"
        },
        body: JSON.stringify(formData)
    });

    const result = await response.json();
    
    return result
}
