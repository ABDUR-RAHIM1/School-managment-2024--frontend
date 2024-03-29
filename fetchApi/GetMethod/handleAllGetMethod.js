import { API } from "../API"

export const handleAllGetMethod = async (route) => {
     try {
          const res = await fetch(API + route, {
               next: { revalidate: 10 }
          });
          const data = await res.json();
          return data
     } catch (error) {
          console.log(error)
     }
}