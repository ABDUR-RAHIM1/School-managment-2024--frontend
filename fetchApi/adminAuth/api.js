import { API } from "../API";

//  admin all api's post method handler

export const handleAdminPostMethod = async (route ,data) => {
    console.log(route , data)
    try {
        const res = await fetch(`${API+route}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await res.json()
        return result
    } catch (error) {
        console.log(error)
    }
}