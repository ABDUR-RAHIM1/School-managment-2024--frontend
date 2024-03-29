const { API } = require("../API")

export const handleDeleteMany = async (route, ids) => {
    try {
        const response = await fetch(API + route, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ids:ids})
        });
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error)
    }
}