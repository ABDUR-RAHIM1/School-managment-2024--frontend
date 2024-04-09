import { API } from "../API";

export const handlePostMethod = async (route, data) => {
    console.log(API + route, data)
    try {
        const res = await fetch(`${API + route}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            console.log("failed to fatch")
            return
        }

        const result = await res.json()
        return result
    } catch (error) {
        console.log(error)
    }
}