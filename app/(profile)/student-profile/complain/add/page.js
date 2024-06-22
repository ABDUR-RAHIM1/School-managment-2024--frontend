"use client"
import { GlobalState } from '@/ContextApi/ContextApi' 
import Heading from '@/components/Utils/Heading'
import Inputs from '@/components/Utils/Inputs'
import Spinner from '@/components/Utils/Spinner'
import React, { useContext, useEffect, useState } from 'react'
import { MdAdd } from 'react-icons/md'
import { toast } from 'react-toastify'

export default function AddComplain() {

    const { UploadFIle, imgUrl, postDataWithToken, imgLoading, isLoading, editValue, editLoading, updateMethodWithToken } = useContext(GlobalState)

    const condition = Object.keys(editValue).length !== 0

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
        //  set edited data in form  state
        if (condition) {
            setFormData(editValue)
        }
    }, [imgUrl, editValue])


    const handleSubmit = (e) => {
        e.preventDefault();

        const { subject, details } = formData;

        if (subject.length < 5 || details.length < 10) {
            toast.warning("Subject and Complain Text is Too Short")
            return;
        }

        const token = window.localStorage.getItem("STUDENT_IS_LOGGED_IN")
        const postRoute = "/complain/add"
        const putRoute = `/complain/edit/${editValue._id}`
        condition ?
            updateMethodWithToken(putRoute, token, formData) 
            :

            postDataWithToken(postRoute, token, formData)
    }

    return (
        <div className='adminPage'>
            <Heading text={condition ? "Update Complain" : "Send Complain"} />
            <form onSubmit={handleSubmit} className='form'>
                <Inputs
                    type="text"
                    name="subject"
                    value={formData.subject}
                    placeholder="Enter Subject"
                    onChange={handleChange}
                />
                <textarea
                    rows={10}
                    name='details'
                    value={formData.details}
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
                            isLoading || editLoading ? <Spinner /> : condition ? "Update" : " Send"
                        }
                        <MdAdd className='text-2xl' />
                    </button>
                </div>

            </form>
        </div>
    )
}
