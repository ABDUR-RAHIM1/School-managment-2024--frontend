import { API } from "../API";

export const handleStatusController = async (route, statusInfo) => {
     try {
          const res = await fetch(API + route, {
               method: "PUT",
               headers: {
                    "Content-Type": "application/json"
               },
               body: JSON.stringify(statusInfo)
          });
          const data = await res.json();
          console.log(data);
          return data;
     } catch (error) {
          console.log(error);
     }
};


export const handleComplainStatus = async (route) => {
     try {
          const res = await fetch(API + route, {
               method: "PUT",
               headers: { "Content-type": "application/json" }
          });

          return await res.json()
     } catch (error) {
          console.log(error)
     }
}