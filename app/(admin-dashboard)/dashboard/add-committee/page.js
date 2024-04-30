"use client"
import { GlobalState } from '@/ContextApi/ContextApi';
import { validateEmail } from '@/Helpers/validateAuth';
import AddNewButton from '@/components/Utils/AddNewButton';
import Heading from '@/components/Utils/Heading'
import React, { useContext, useEffect, useState } from 'react'
import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

export default function AddComitee() {
  const { postAllDataFunc, isLoading, UploadFIle, imgUrl, imgLoading, editValue, editDataFunc } = useContext(GlobalState);

  const condition = Object.keys(editValue).length !== 0;

  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    title: "",
    position: "",
    photo: imgUrl
  };
  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === "photo") {
      const file = e.target.files[0]
      UploadFIle(file)
    } else {
      setFormData({ ...formData, [name]: value })
    }
  };

  useEffect(() => {
    setFormData(prevFormData => ({
      ...prevFormData,
      photo: imgUrl
    }));


    //  set Edit Value in state
    if (condition) {
      setFormData(editValue)
    }


  }, [imgUrl]);

  const handleComitteForm = (e) => {
    e.preventDefault();

    const { email } = formData;
    // Validate email
    if (!validateEmail(email)) {
      toast.error("Invalid email");
      return;
    }

    const postRoute = "/comitee/add"
    const editRoute = `/comitee/edit/${editValue._id}`
    condition ?
      editDataFunc(editRoute, formData)
      :
      postAllDataFunc(postRoute, formData)


  }

  return (
    <div className='adminPage'>
      <Heading text={condition ? "Edit Committee" : "Add Committee"} />
      <AddNewButton />

      <div className='form'>
        <form onSubmit={handleComitteForm}>
          <div className="form_group">
            <input required type="text" onChange={handleChange} value={formData.name} name='name' placeholder='Enter Name' className='input' />
          </div>

          <div className="form_group">

            <input required type="email" onChange={handleChange} value={formData.email} name='email' placeholder='Enter Email' className='input' />

            <input required type="number" onChange={handleChange} value={formData.phone} name='phone' placeholder='Enter Phone' className='input' />
          </div>

          <div className="form_group">
            <input required type="text" onChange={handleChange} value={formData.title} name='title' placeholder='Enter Title' className='input' />
            <select onChange={handleChange} id="searchByPosition" name='position' className='input'>
              <option value="">Select Position</option>
              <option value="member">Member</option>
              <option value="secretary">Secretary</option>
              <option value="president">President</option>
            </select>
          </div>
          <div className="form_wrap">
            <input onChange={handleChange} type="file" name='photo' className={`input ${imgLoading ? "border border-red-600 duration-150" : null}`} />
          </div>

          <div className="form_btn_wrap mt-6">
            <button type='submit' className='formBtn'>
              {isLoading ? "Posting . . ." : condition ? "Update" : "Add Member"}
              <span className='text-xl'><MdAdd /></span> </button>
          </div>
        </form>
      </div>
    </div>
  )
}
