
import TeacherGallaryAdmin from '@/components/profile/TeacherGallaryAdmin';
import TeacherPostsAdmin from '@/components/profile/TeacherPostsAdmin';
import TeacherProfileAdmin from '@/components/profile/TeacherProfileAdmin';
import TeahcerClassAdmin from '@/components/profile/TeahcerClassAdmin';
import { handleGetProfile } from '@/fetchApi/getProifle/handleGetProfile'
import dummyImg from "@/public/images/sd.png"
import Image from 'next/image';
import React from 'react'

//  teacher  profile all details using ID
export default async function Profile({ params }) {
  const { id } = params
  const route = `/teachers/auth/${id}/profile`
  const profile = await handleGetProfile(route, id);
 

  return (
    <div className='profileContainer adminPage'>
      <div className="profileCard">
        <div className='w-[100px] m-auto h-[100px] rounded-full overflow-hidden'>
          <Image
            src={profile.photo || dummyImg}
            width={1000}
            height={1000}
            className='w-full h-full'
            alt='teachers profile'
          />

        </div>
        <div className=' my-2 text-center capitalize border-b border-gray-200'>
          <h5 className='text-xl my-1 '>{profile.username}</h5>
          <p className=' text-sm'>{profile.role}</p>
          <button className={` ${profile.status === "active" ? " border-blue-500 text-blue-700" : " border-red-500 text-red-700"} iconBtn border capitalize text-sm my-3`}>
            {profile.status}
          </button>
        </div>

        <div className='flex justify-between'>
          {/* subject lists */}
          <div className='px-3 my-3'>
            <h2 className=' font-medium underline'>Subjects</h2>
            {
              profile && profile.profile.map(sb => (
                sb.subjects.map((s, i) => (
                  <p> {i + 1 + ". " + s}</p>
                ))
              ))
            }
          </div>
          {/* subject lists end */}

          {/* short info  */}
          <div className='px-2 pb-2'>
            <h2 className='font-medium capitalize my-2 underline'>Info</h2>
            <p>  {profile.profile.length} Profile</p>
            <p>  {profile.routine.length} Classes (Routine)</p>
            <p> {profile.gallary.length} Gallary </p>
            <p> {profile.posts.length} Posts</p>
          </div>
          {/* short info  end */}
        </div>

        <div className='px-2 leading-7'>
          <h2 className='font-medium capitalize'>Bio</h2>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis facilis illo delectus ad id omnis incidunt veniam. Dolores totam quo nemo, similique velit.
          </p>
        </div>

      </div>

      <div className="profileDetails">
        <div>
          <h1>Profile</h1>
          <TeacherProfileAdmin
            info={profile.profile}
          />
        </div>

        <div className='my-5'>
          <h1>Classes</h1>
          <TeahcerClassAdmin
            info={profile.routine}
          />
        </div>

        <div className='my-5'>
          <h1>Posts</h1>
          <TeacherPostsAdmin
            info={profile.posts}
          />
        </div>

        <div className='my-5 px-2'>
          <h1>Gallary</h1>
          <div className='flex items-center justify-between flex-wrap'>
            {
              profile && profile.gallary.map(gl => (
                <TeacherGallaryAdmin
                  key={gl._id}
                  gallary={gl}
                />
              ))
            }
          </div>
        </div>

      </div>


    </div>
  )
}
