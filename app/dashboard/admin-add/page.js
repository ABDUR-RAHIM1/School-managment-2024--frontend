"use client"
import adminformData from '@/Data/AdminForm'
import { validateEmail } from '@/Helpers/validateAuth'
import { handleAdminPostMethod } from '@/fetchApi/admin/api'
import React, { useState } from 'react'
import { toast } from 'react-toastify' 

export default function AdminAdd() {
  const formData = adminformData
 
  const [isLoading, setIsLoading] = useState(false)
  const [info, setInfo] = useState({ username: "", email: "", password: "", role: "admin" })
 
  const handleChange = (e) => {
    const value = e.target.value

    setInfo({ ...info, [e.target.name]: value })
  }

 

  const addAdminHandler = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const { email, password } = info;

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
      const route = "/admin/auth/register"
      const result = await handleAdminPostMethod(route, info)

      if (result.isRegister) {
        toast.success(result.message)
      } else {
        toast.error(result.message)
      }
    } catch (error) {
      toast.error("Error: " + error);
    } finally {
      setIsLoading(false)
    }
  }

  //  set Edit admin info in state
 


  return (
    <div className='addAdminPage'>
      <form onSubmit={addAdminHandler}>
        <h2 className='text-center my-4 uppercase text-2xl font-medium text-blue-900'>  
             Add admin or modertor"
         </h2>
        {
          formData.map((input, i) => (

            <input
              key={i}
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              required={input.required}
              value={info[input.name]}
              onChange={handleChange}
            />
          )
          )
        }
        <select value={info.role} onChange={handleChange} className='input cursor-pointer' name="role">
          <option value="admin">Admin</option>
          <option value="moderator">Moderator</option>
        </select>

        <button disabled={isLoading} className='formBtn' type="submit">
          {isLoading ? "Waiting..." : "Add Now"}
        </button>
       
      </form>
    </div>
  )
}
