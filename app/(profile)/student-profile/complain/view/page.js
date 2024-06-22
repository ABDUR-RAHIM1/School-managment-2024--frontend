import React from 'react' 
import Complain from './Complain' 
import StudentToken from '@/app/actions/student/StudentToken'
import { getProfileDataWithToken } from '@/fetchApi/GetMethod/getDataWithToken'
import Heading from '@/components/Utils/Heading'


export default async function ViewComplain() {
    const token = StudentToken()
    const route = "/complain/user"
    const complain = await getProfileDataWithToken(route, token);
 
    return (
        <div className='adminPage'>
            <Heading text={"Your Complaints"} />
            <div>

                <Complain
                    complain={complain}
                />
            </div>
        </div>
    )
}
