
"use client"
import { GlobalState } from "@/ContextApi/ContextApi"
import { validateEmail } from "@/Helpers/validateAuth"
import Spinner from "@/components/Utils/Spinner"
import avatar from "@/public/images/adminlogin.jpg"
import Image from "next/image"
import { useContext, useState } from "react"
import { toast } from "react-toastify"

export default function ContactUs() {
    const { postAllDataFunc, isLoading } = useContext(GlobalState);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value })
    }

    const handleSubmitMesage = (e) => {
        e.preventDefault();

        const { name, email, message } = formData;
        if (name.length < 3) {
            toast.warning("Name is too short")
            return
        }
        if (!validateEmail(email)) {
            toast.error("Invalid Email !")
            return
        }
        if (message.length < 15) {
            toast.warning("Message is too short (20 characters)")
            return
        }

        const postRoute = "/contact/add";
        postAllDataFunc(postRoute, formData)
         
    }

    return (
        <div className='py-10 flex justify-between flex-wrap'>
            <div className='w-full md:w-[48%]'>
                <h2 className='text-xl italic my-2 font-medium'>আমরা কিভাবে আপনাকে সাহায্য করতে পারি ?</h2>
                <p>
                    ফর্মটি  পূরণ পূরণ করুন  পাঠান, আমরা দ্রুত  আপনার সাথে যোগাযোগ করব
                </p>
                <Image
                    src={avatar}
                    width={500}
                    height={500}
                    alt="contact us"
                    className="w-full h-[250px] md:h-[350px] mt-10"
                />
            </div>
            <div className='w-full md:w-[48%]'>
                <form onSubmit={handleSubmitMesage} className='form'>
                    <input
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        name="name"
                        placeholder='Enter Your Good name'
                        className='input'
                        required
                    />
                    <input
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        name="email"
                        placeholder=' Your Email Address'
                        className='input'
                        required
                    />
                    <textarea
                        value={formData.message}
                        onChange={handleChange}
                        rows={10} name="message"
                        placeholder='Write Message . . .'
                        className='input'
                        required
                    />

                    <button className="formBtn">
                        {
                            isLoading ? <Spinner /> : "Submit"
                        }
                    </button>
                </form>
            </div>
        </div>
    )
}
