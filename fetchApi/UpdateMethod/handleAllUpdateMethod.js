import { API } from "../API";

export const activateResource = async (route) => {
     try {
          const res = await fetch(API+route, {
               method: "PUT",
               headers: {
                    "Content-Type": "application/json"
               }
          });
          const data = await res.json();
          console.log(data);
          return data;
     } catch (error) {
          console.log(error);
     }
};
