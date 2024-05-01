"use client"
import "../../globals.css"
import Image from "next/image"
import thumb from "@/public/images/adminlogin.jpg"
import { useLayoutEffect, useState } from "react"
import { validateEmail } from "@/Helpers/validateAuth";
import {   handleAdminPostMethod } from "@/fetchApi/admin/api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function AdminAuth() {
  const router = useRouter()
  const [authInfo, setAuthInfo] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthInfo(prevState => ({ ...prevState, [name]: value }));

  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { email, password } = authInfo;

    // Validate email
    if (!validateEmail(email)) {
      toast.error("Invalid email");
      setIsLoading(false);
      return;
    }

    // Validate password
    if (password.length < 6) {
      toast.warning("Password should be at least 6 characters long");
      setIsLoading(false);
      return;
    }

    try {
      const route = "/admin/auth/login"
      const result = await handleAdminPostMethod(route, authInfo);
      
      if (result.ok) {

        toast.success(result.message)
        localStorage.setItem("isAdmin", JSON.stringify(result.token))
        setTimeout(() => {
          router.push("/dashboard")
        }, 500);
      } else {
        toast.error(result.message)
      }
    } catch (error) {
      toast.error("Error: " + error);
    } finally {
      setIsLoading(false);
    }
  };

  // admin already login redirected to dashboard
  useLayoutEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin) {
      router.push("/dashboard");
    }
  }, []);

  return (
    <div className="loginPage">
      <div className="loginArea">
        <div>
          <Image
            src={thumb}
            alt="" />
        </div>
        <div>
          <form onSubmit={handleAdminLogin}>
            <input
              className="input"
              type="email"
              name="email"
              value={authInfo.email}
              placeholder="Enter Your Email"
              onChange={handleChange}
              required />
            <input
              className="input"
              type="password"
              name="password"
              value={authInfo.password}
              placeholder="Enter Password"
              onChange={handleChange}
              required />
            <p className="text-blue-700 text-end block italic cursor-pointer underline">Forgat password</p>

            <button disabled={isLoading} className="formBtn bg-blue-500 text-white hover:bg-blue-700 duration-200">
              {isLoading ? 'Checking...' : 'Login'}
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}
