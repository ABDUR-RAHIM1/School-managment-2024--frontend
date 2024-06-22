import { API } from "../API";

export const postWithToken = async (route, token, formData) => {
    try {

        let parseToken = "";

        if (token) {
            parseToken = JSON.parse(token)
        }
        console.log(parseToken)
        const response = await fetch(API + route, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${parseToken}`,
                "Content-type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        console.log(data)
        return data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}