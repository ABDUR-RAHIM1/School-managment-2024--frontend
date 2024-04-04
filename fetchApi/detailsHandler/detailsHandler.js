import { API } from "../API"

export const detailsHandler = async (id, route) => {
     try {
          const res = await fetch(API + route, {
               cache: "no-store"
          });
          const data = await res.json();
          const findData = await data.find(d => d._id === id);

          return findData
     } catch (error) {
          console.log(error)
     }
}