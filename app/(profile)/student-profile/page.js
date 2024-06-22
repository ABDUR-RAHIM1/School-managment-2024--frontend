 
import StudentToken from '@/app/actions/student/StudentToken';
import { getProfileDataWithToken } from '@/fetchApi/GetMethod/getDataWithToken';

export default async function StudentProfilePage() {

    const token = StudentToken();
    const route = "/student/auth/user";
    const data = await getProfileDataWithToken(route, token)


    return (
        <div>
            Student profile dashboard
            <br /><br />


        </div >
    )
}


