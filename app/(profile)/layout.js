import { MyState } from "@/ContextApi/ContextApi"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import ProfileNavbar from "./ProfileNavbar";
export const metadata = {
    title: 'Profile',
    description: 'school management members profile',
}

//  for teacher and student
export default function profileLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ToastContainer />
                <ProfileNavbar />
                <MyState>
                    {children}
                </MyState>
            </body>
        </html>
    )
}
