import { API } from "../API";

export const postWithToken = async (route, token, formData) => {
    try {
        console.log(route, token)
        const response = await fetch(API + route, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}