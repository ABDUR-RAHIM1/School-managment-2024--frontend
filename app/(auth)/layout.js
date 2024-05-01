import { MyState } from "@/ContextApi/ContextApi"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
export const metadata = {
  title: 'Authentication',
  description: 'teacher and student authentication',
}

//  for teacher and student
export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        <MyState>
          {children}
        </MyState>
      </body>
    </html>
  )
}
