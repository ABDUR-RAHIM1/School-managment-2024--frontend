"use client"
import { GlobalState } from '@/ContextApi/ContextApi';
import { validateEmail } from '@/Helpers/validateAuth';
import Heading from '@/components/Utils/Heading'
import React, { useContext, useEffect, useState } from 'react'
import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

export default function AddComitee() {
  const { postAllDataFunc, isLoading, UploadFIle, imgUrl, imgLoading } = useContext(GlobalState);

  const initialFormData = {
    name: "",
    email: "",
    title: "",
    position: "",
    photo: imgUrl
  };
  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    UploadFIle(file)
  }
  useEffect(() => {
    setFormData(prevFormData => ({
      ...prevFormData,
      photo: imgUrl
    }));
  }, [imgUrl]);

  const handleComitteForm = (e) => {
    e.preventDefault();

    const { email } = formData;
    // Validate email
    if (!validateEmail(email)) {
      toast.error("Invalid email");
      return;
    }

    const route = "/comitee/add"
    postAllDataFunc(route, formData)


  }

  return (
    <div className='adminPage'>
      <Heading text="Add Comitee" />

      <div className='form'>
        <form onSubmit={handleComitteForm}>
          <div className="form_group">
            <input required type="text" onChange={handleChange} value={formData.name} name='name' placeholder='Enter Name' className='input' />
            <input required type="email" onChange={handleChange} value={formData.email} name='email' placeholder='Enter Email' className='input' />
          </div>

          <div className="form_group">
            <input required type="text" onChange={handleChange} value={formData.title} name='title' placeholder='Enter Title' className='input' />
            <input required type="text" onChange={handleChange} value={formData.position} name='position' placeholder='Enter Position' className='input' />
          </div>
          <div className="form_wrap">
            <input onChange={handleFileChange} type="file" name='photo' className={`input ${imgLoading ? "border border-red-600 duration-150" : null}`} />
          </div>

          <div className="form_btn_wrap mt-6">
            <button type='submit' className='formBtn'>
              {isLoading ? "Posting . . ." : "Add Member"}
              <span className='text-xl'><MdAdd /></span> </button>
          </div>
        </form>
      </div>
    </div>
  )
}
