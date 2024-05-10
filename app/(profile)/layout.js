"use client"
import "../globals.css"
import { MyState } from "@/ContextApi/ContextApi"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import ProfileNavbar from "../../components/ProfileDashboard/ProfileNavbar";
import ProfileSidebar from "./ProfileSidebar";
import { useEffect, useState } from "react";


//  for teacher and student
export default function profileLayout({ children }) {
    const [openSidebar, setOpenSidebar] = useState(true);

    const handleShowSidebar = () => {
        setOpenSidebar(!openSidebar)
    }

    // useEffect(() => {
    //     const token = localStorage.getItem("STUDENT_IS_LOGGED_IN");
    //     console.log("token 21", token)
    //     fetch("http://localhost:9000/api/student/auth/user", {
    //         headers: {
    //             "Authorization": `Bearer ${token}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])

    return (
        <html lang="en">
            <title>Profile</title>
            <body>
                <ToastContainer />
                <ProfileNavbar handleShowSidebar={handleShowSidebar} />
                <MyState>
                    <div className="dashboard">
                        <aside className={`dashboardSidebar origin-left ${openSidebar ? "scale-x-1 w-[250px]" : "scale-x-0 w-[0px]"} duration-300`}>
                            <ProfileSidebar />
                        </aside>
                        <main className="dashboardMain">
                            {children}
                        </main>
                    </div>
                </MyState>
            </body>
        </html>
    )
}
