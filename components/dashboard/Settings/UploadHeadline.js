"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import Heading from '@/components/Utils/Heading'
import Spinner from '@/components/Utils/Spinner'
import React, { useContext, useEffect, useState } from 'react'
import { MdAdd } from 'react-icons/md'

export default function UploadHeadline() {
    const { postAllDataFunc, isLoading, imgLoading, imgUrl, editValue } = useContext(GlobalState)

    const condition = Object.keys(editValue).length !== 0;

    const initialFormData = {
        title: "",
        text: ""
    }
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });



    };



    useEffect(() => {
        setFormData(prevFormData => ({
            ...prevFormData,
            photo: imgUrl
        }));


        // setEdit Value in state
        if (condition) {
            setFormData(editValue)
        }

    }, [imgUrl]);


    const handleSubmit = (e) => {
        e.preventDefault()
        const route = `/headline/add`
        postAllDataFunc(route, formData)
    }



    return (
        <div className='adminPage my-5'>

            <div>
                <Heading text={condition ? "Edit Headline" : "Add Headline"} />
                <form onSubmit={handleSubmit} className='form'>

                    <div className="form_group">
                        <input
                            required
                            onChange={handleChange}
                            type="text"
                            name='title'
                            value={formData.title}
                            placeholder='Title'
                            className={`input`}
                        />
                    </div>
                    <div className="form_group">
                        <textarea
                            rows={5}
                            required
                            onChange={handleChange}
                            type="text"
                            name='text'
                            value={formData.text}
                            placeholder='text of Headline'
                            className={`input`}
                        />
                    </div>

                    <div className="form_btn_wrap">
                        <button disabled={imgLoading} className='formBtn'>
                            {
                                isLoading ? <Spinner /> : condition ? "Update " : "Add "
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




