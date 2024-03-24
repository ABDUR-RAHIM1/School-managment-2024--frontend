"use client"
import adminformData from '@/Data/AdminForm'
import { validateEmail } from '@/Helpers/validateAuth'
import { handleAdminPostMethod } from '@/fetchApi/adminAuth/api'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

export default function AdminAdd() {
  const formData = adminformData
  const [isLoading, setIsLoading] = useState(false)
  const [info, setInfo] = useState({ username: "", email: "", password: "", role: "" })

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();

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
  console.log(info)
  return (
    <div className='addAdminPage'>
      <form onSubmit={addAdminHandler}>
        <h2 className='text-center my-4 uppercase text-2xl font-medium text-blue-900'>Add admin or modator</h2>
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
        <select onChange={handleChange} className='input' name="role">
          <option value="">select role</option>
          <option value="Admin">Admin</option>
          <option value="Moderator">Moderator</option>
        </select>
        <button disabled={isLoading} className='formBtn' type="submit">
          {isLoading ? "Waiting..." : "Add Now"}
        </button>

      </form>
    </div>
  )
}
