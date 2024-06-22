import { cookies } from 'next/headers'

const StudentInfo = () => {
    const cookieStore = cookies()
    const info = cookieStore.get('student_Info');
    let data = {}
    if (info) {
        data = JSON.parse(info.value);

    }

    return data;

}

export default StudentInfo;