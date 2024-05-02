"use client"
import "../globals.css"
import { MyState } from "@/ContextApi/ContextApi"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import ProfileNavbar from "../../components/ProfileDashboard/ProfileNavbar";
import ProfileSidebar from "./ProfileSidebar";
import { useState } from "react";


//  for teacher and student
export default function profileLayout({ children }) {
    const [openSidebar, setOpenSidebar] = useState(true);

    const handleShowSidebar = () => {
        setOpenSidebar(!openSidebar)
    }
  
    return (
        <html lang="en">
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
