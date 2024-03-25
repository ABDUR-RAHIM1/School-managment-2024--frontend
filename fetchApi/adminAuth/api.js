import { API } from "../API";

//  admin all api's post method handler

export const handleAdminPostMethod = async (route, data) => {
    console.log(route, data)
    try {
        const res = await fetch(`${API + route}`, {
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

//  admin all get method handler 

export const handleAdminGetMethod = async (route) => {
    try {
        const res = await fetch(API + route, {
            next: { revalidate: 10 }
        })
        const result = await res.json();

        return result
    } catch (error) {
        console.log(error)
    }
}

//  admin  all  delete method handler 

export const handleAdminDeleteMethod = async (deleteRoute) => {
    console.log(deleteRoute)
    try {
          const res = await fetch(API+deleteRoute, {
            method : "DELETE"
          });

          const  result = await res.json()
          return result
    } catch (error) {
        console.log(error)
    }
}