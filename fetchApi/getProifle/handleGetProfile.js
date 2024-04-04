import { API } from "../API"

export const handleGetProfile = async (route, id) => {
    try {
        const response = await fetch(API + route, {
            cache: "no-store"
        });
        if (!response.ok) {
            return console.log("Failed to fatch Data")
        }
        const data = await response.json(); 
        return data
    } catch (error) {
        console.log(error)
    }
}