"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import Heading from '@/components/Utils/Heading'
import Inputs from '@/components/Utils/Inputs'
import Spinner from '@/components/Utils/Spinner'
import React, { useContext, useEffect, useState } from 'react'
import { MdAdd } from 'react-icons/md'
import { toast } from 'react-toastify'

export default function AddComplain() {

    const { UploadFIle, imgUrl, postDataWithToken, imgLoading, isLoading } = useContext(GlobalState)

    const [formData, setFormData] = useState({
        subject: "",
        details: "",
        photo: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "photo") {
            const file = e.target.files[0]
            UploadFIle(file)

        }

        setFormData({ ...formData, [name]: value })
    }

    useEffect(() => {
        if (imgUrl) {
            setFormData({ ...formData, "photo": imgUrl })
        }
    }, [imgUrl])


    const handleSubmit = (e) => {
        e.preventDefault();

        const { subject, details } = formData;

        if (subject.length < 5 || details.length < 10) {
            toast.warning("Subject and Complain Text is Too Short")
            return;
        }

        const tokenString = window.localStorage.getItem("STUDENT_IS_LOGGED_IN")
        if (!tokenString) {
            toast.error("Unauthorize User")
        }

        const route = "/complain/add"
        const token = JSON.parse(tokenString)
        postDataWithToken(route, token, formData)
    }

    return (
        <div className='adminPage'>
            <Heading text={"Send Complain"} />
            <form onSubmit={handleSubmit} className='form'>
                <Inputs
                    type="text"
                    name="subject"
                    placeholder="Enter Subject"
                    onChange={handleChange}
                />
                <textarea
                    rows={10}
                    name='details'
                    placeholder='Write Your Complain'
                    onChange={handleChange}
                    className='input'
                    required
                />
                <Inputs
                    type="file"
                    name="photo"
                    onChange={handleChange}
                    required={false}
                />

                <div className="form_btn_wrap">
                    <button disabled={imgLoading} className='formBtn'>
                        {
                            isLoading ? <Spinner /> : " Send"
                        }
                        <MdAdd className='text-2xl' />
                    </button>
                </div>

            </form>
        </div>
    )
}
