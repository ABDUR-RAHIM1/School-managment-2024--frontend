import React from 'react'
import ProfileCard from './ProfileCard'
import StudentToken from '@/app/actions/student/StudentToken'
import { getProfileDataWithToken } from '@/fetchApi/GetMethod/getDataWithToken';
import ProfileInfo from './ProfileInfo';

export default async function ProiflePage() {
    const token = StudentToken();
    const route = "/student/auth/user";
    const data = await getProfileDataWithToken(route, token);

    return (
        <div className=' flex justify-between flex-wrap'>
            <ProfileCard profile={data} />
            <ProfileInfo profileData={data} />
        </div>
    )
}
