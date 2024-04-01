import { API } from "../API";


//  all update handler
export const handleUpdate = async (route, info) => {
     try {
          const res = await fetch(API + route, {
               method: "PUT",
               headers: {
                    "Content-Type": "application/json"
               },
               body: JSON.stringify(info)
          });
          const data = await res.json(); 
          return data;
     } catch (error) {
          console.log(error);
     }
};


//  status mean active , pending , reject etc
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
          return data;
     } catch (error) {
          console.log(error);
     }
};


//  just click and update unseen to seen messgae
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