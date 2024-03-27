import { API } from "../API"

export const handleAllDeleteMethod = async (route) => {
    try {
        const res = await fetch(API+ route, {
            method: "DELETE"
        });

        const data = await res.json();
        return data
    } catch (error) {
        console.log(error)
    }
}