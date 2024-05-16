import { API } from "../API";

export const getProfileDataWithToken = async (route, token) => {
    try {

        const response = await fetch(API + route, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-type": "application/json"
            }
        });
        const data = await response.json();
         return data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}