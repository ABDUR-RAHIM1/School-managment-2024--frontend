"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import Heading from '@/components/Utils/Heading'
import Spinner from '@/components/Utils/Spinner'
import React, { useContext, useEffect, useState } from 'react'
import { MdAdd } from 'react-icons/md'

export default function UploadAbout() {
    const { postAllDataFunc, isLoading, UploadFIle, imgLoading, imgUrl, editValue, editDataFunc , editLoading } = useContext(GlobalState)


    const condition = Object.keys(editValue).length !== 0


    const initialFormData = {
        title: "",
        content: "",
        photo: ""
    }
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "photo") {
            const file = e.target.files[0];
            UploadFIle(file)
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };



    useEffect(() => {
        setFormData(prevFormData => ({
            ...prevFormData,
            photo: imgUrl
        }));



        //  set edit value is state
        if (condition) {
            setFormData(editValue)
        }


    }, [imgUrl]);


    const handleSubmit = (e) => {
        e.preventDefault()
        const postRoute = `/about/add`
        const editRoute = `/about/edit/${editValue._id}`

        condition ?
            editDataFunc(editRoute, formData)
            :
            postAllDataFunc(postRoute, formData)
    }


    return (
        <div className='adminPage my-5'>

            <div>
                <Heading text={condition ? "Update Content" : " About Page Content"} />
                <form onSubmit={handleSubmit} className='form' action="">
                    <input
                        required
                        onChange={handleChange}
                        type="text"
                        value={formData.title}
                        name='title'
                        placeholder='Titile is Here'
                        className='input py-4'
                    />

                    <textarea
                        rows={10}
                        required
                        onChange={handleChange}
                        type="text"
                        value={formData.content}
                        name='content'
                        placeholder='Write About Content . . .'
                        className='input py-4'
                    />

                    <div className="form_group">
                        <input
                            required={!condition}
                            onChange={handleChange}
                            type="file"
                            name='photo'
                            placeholder='logo'
                            className={`input ${imgLoading ? "border border-red-600" : null}`}
                        />
                    </div>

                    <div className="form_btn_wrap">
                        <button disabled={imgLoading} className='formBtn'>
                            {
                                isLoading || editLoading ? <Spinner /> : condition ? "Update" : "Add"
                            }
                            <span span className="text-xl"><MdAdd /></span>
                        </button>
                    </div>
                </form>
            </div >
            <div />


        </div >
    )
}




