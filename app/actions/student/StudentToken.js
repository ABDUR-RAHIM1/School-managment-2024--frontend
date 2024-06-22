const { cookies } = require("next/headers");

const StudentToken = () => {

    const cookieStore = cookies()
    const token = cookieStore.get('student_token');
  
    return token.value
}


export default StudentToken;