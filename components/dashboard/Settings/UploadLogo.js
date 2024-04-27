"use client"
import { GlobalState } from '@/ContextApi/ContextApi'
import Heading from '@/components/Utils/Heading'
import Spinner from '@/components/Utils/Spinner'
import React, { useContext, useEffect, useState } from 'react'
import { MdAdd } from 'react-icons/md'

export default function UploadLogo() {
    const { postAllDataFunc, isLoading, editLoading, UploadFIle, imgLoading, imgUrl, editValue, editDataFunc } = useContext(GlobalState)
    const initialFormData = {
        width: "",
        height: "",
        radius: "",
        photo: ""
    }
    const [formData, setFormData] = useState(initialFormData);

    const condition = Object.keys(editValue).length !== 0


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

        //  set Edit vlaue in state
        if (condition) {
            setFormData(editValue)
        }

    }, [imgUrl]);


    const handleSubmitLogo = (e) => {
        e.preventDefault()
        const postRoute = `/logo/add`
        const editRoute = `/logo/edit/${editValue._id}`

        condition
            ?
            editDataFunc(editRoute, formData)
            :
            postAllDataFunc(postRoute, formData)
    }


    return (
        <div className='adminPage my-5'>

            <div>
                <Heading text={condition ? "Edit Logo" : "Upload Logo"} />
                <form onSubmit={handleSubmitLogo} className='form' action="">
                    <div className="form_group">
                        <input required onChange={handleChange} type="number" value={formData.width} name='width' placeholder='logo Width' className='input py-4' />
                        <input required onChange={handleChange} type="number" value={formData.height} name='height' placeholder='logo Height' className='input py-4' />
                    </div>

                    <div className="form_group">
                        <input required onChange={handleChange} type="number" value={formData.radius} name='radius' placeholder='Rounded' className='input py-4' />
                        <input required={!condition} onChange={handleChange} type="file" name='photo' placeholder='logo' className={`input ${imgLoading ? "border border-red-600" : null}`} />
                    </div>

                    <div className="form_btn_wrap">
                        <button disabled={imgLoading} className='formBtn'>
                            {
                                isLoading || editLoading ? <Spinner /> : condition ? "update" : "Add"
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




