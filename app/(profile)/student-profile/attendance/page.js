
import PageHeader from '@/components/Utils/PageHeader';
import React from 'react'
import Attendance from './Attendance';
import { getProfileDataWithToken } from '@/fetchApi/GetMethod/getDataWithToken';
import StudentToken from '@/app/actions/student/StudentToken';

export default async function ViewAttendance() {
    const token = StudentToken()
    let route = `/attendence/login-student`;
    const attendance = await getProfileDataWithToken(route, token);


    const handleSearchValue = async (text) => {
        "use server"
        const searchValue = text;
        const route = `/attendence/login-student?search=${searchValue}`
        return route
    }

    return (
        <div className='adminPage'>
            <PageHeader text={"Your Attendance"} />

            <div>
                <Attendance
                    attendance={attendance}
                    handleSearchValue={handleSearchValue}
                />
            </div>
        </div>
    )
}
