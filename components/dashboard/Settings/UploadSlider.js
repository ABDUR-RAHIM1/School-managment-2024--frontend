"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import Heading from '@/components/Utils/Heading'
import Spinner from '@/components/Utils/Spinner'
import React, { useContext, useEffect, useState } from 'react'
import { MdAdd } from 'react-icons/md'

export default function UploadSlider() {
    const { postAllDataFunc, isLoading, UploadFIle, imgLoading, imgUrl } = useContext(GlobalState)
    const initialFormData = { 
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

    }, [imgUrl]);


    const handleSubmit = (e) => {
        e.preventDefault()
        const route = `/slider/add`
        postAllDataFunc(route, formData)
    }


    return (
        <div className='adminPage my-5'>

            <div>
                <Heading text=" Slider Photo" />
                <form onSubmit={handleSubmit} className='form'>
 

                    <div className="form_group">
                        <input
                            required
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
                                isLoading ? <Spinner /> : "Add"
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




