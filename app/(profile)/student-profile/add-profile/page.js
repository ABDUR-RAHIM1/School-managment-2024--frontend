"use client";
import { GlobalState } from '@/ContextApi/ContextApi';
import { initialformData } from '@/Data/formData/studentAddFormData';
import { validateEmail } from '@/Helpers/validateAuth';
import Heading from '@/components/Utils/Heading'
import Inputs from '@/components/Utils/Inputs';
import Select from '@/components/Utils/Select';
import Spinner from '@/components/Utils/Spinner';
import React, { useContext, useEffect, useState } from 'react'
import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

export default function AddProfile() {

  const { isLoading, postDataWithToken, UploadFIle, imgUrl } = useContext(GlobalState)

  const [formData, setFormData] = useState(initialformData)


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "photo") {
      const file = e.target.files[0]
      UploadFIle(file)
    }
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (imgUrl) {
      setFormData({ ...formData, photo: imgUrl })
    }
  }, [imgUrl])


  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email } = formData;

    if (!validateEmail(email)) {
      toast.error("Invalid Email")
      return
    }
    if (name.length < 3) {
      toast.error("Name Is Too Short");
      return
    }

    const token = JSON.parse(window.localStorage.getItem("STUDENT_IS_LOGGED_IN"))

    const postRoute = "/profile/create"
    postDataWithToken(postRoute, token, formData)


  }



  return (
    <div className='adminPage'>
      <Heading text="Add Your Profile" />

      <div className='form'>
        <form onSubmit={handleSubmit} >
          <div className="form_group">
            <Inputs
              type="text"
              name='name'
              value={formData.name}
              placeholder='Enter Your Good Name'
              onChange={handleChange}
            />
            <Inputs
              type="number"
              name='classCode'
              value={formData.classCode}
              placeholder='Enter Your Class'
              onChange={handleChange}
            />
          </div>

          <div className="form_group">
            <Inputs
              type="number"
              name='roll'
              value={formData.roll}
              placeholder='Enter Your Roll'
              onChange={handleChange}
            />
            <Select
              name="group"
              options={["Select Group", "Science", "Arts", "Commerce"]}
              value={formData.group}
              onChange={handleChange}
            />
          </div>

          <div className="form_group">
            <Inputs
              type="text"
              name='session'
              value={formData.session}
              placeholder='Enter Your Season'
              onChange={handleChange}
            />
            <Inputs
              type="date"
              name='dob'
              value={formData.dob}
              placeholder='Date Of Birth'
              onChange={handleChange}
            />
          </div>


          <div className="form_group">
            <Inputs
              type="text"
              name='pob'
              value={formData.pob}
              placeholder='Place Of Birth'
              onChange={handleChange}
            />
            <Inputs
              type="text"
              name='address'
              value={formData.address}
              placeholder='Address'
              onChange={handleChange}
            />
          </div>


          <div className="form_group">
            <Inputs
              type="text"
              name='city'
              value={formData.city}
              placeholder='City Name'
              onChange={handleChange}
            />
            <Inputs
              type="number"
              name='postalCode'
              value={formData.postalCode}
              placeholder='Postal Code'
              onChange={handleChange}
            />
          </div>


          <div className="form_group">
            <Inputs
              type="email"
              name='email'
              value={formData.email}
              placeholder='Enter Your Email'
              onChange={handleChange}
            />
            <Inputs
              type="tel"
              name='phone'
              value={formData.phone}
              placeholder='Enter Your Phone Number'
              onChange={handleChange}
            />
          </div>

          <div className="form_group">
            <Inputs
              type="tel"
              name='emergencyContact'
              value={formData.emergencyContact}
              placeholder='Emergency Contact Number'
              onChange={handleChange}
            />
            <Select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              options={[
                "Select Blood Group",
                "A+",
                "A-",
                "B+",
                "B-",
                "AB+",
                "AB-",
                "O+",
                "O-"
              ]}
            />
          </div>

          <div className="form_group">
            <Inputs
              type="text"
              name='religion'
              value={formData.religion}
              placeholder='Your Religion'
              onChange={handleChange}
            />
            <Inputs
              type="text"
              name='guardianName'
              value={formData.guardianName}
              placeholder=' Guardian Name'
              onChange={handleChange}
            />
          </div>

          <div className="form_group">
            <Inputs
              type="text"
              name='relationWith'
              value={formData.relationWith}
              placeholder='Relation With Guardian'
              onChange={handleChange}
            />
            <Inputs
              type="text"
              name='relationContact'
              value={formData.relationContact}
              placeholder='Guardian Conact Number '
              onChange={handleChange}
            />
          </div>

          <div className="form_group">

            <Inputs
              type="text"
              name="occupation"
              value={formData.occupation}
              placeholder='Occupation of Guardian'
              onChange={handleChange}
            />

            <Select
              name="scholarship"
              value={formData.scholarship}
              onChange={handleChange}
              options={["Scholarship", "Yes", "No"]}
            />
          </div>

          <div className="form_group">
            <Inputs
              type="file"
              name='photo'
              placeholder='Enter Your Good Name'
              onChange={handleChange}
            />

          </div>

          <div className="form_btn_wrap">
            <button className='formBtn'>
              {isLoading ? <Spinner /> : "Add"}
              <MdAdd className='text-2xl' />
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}
