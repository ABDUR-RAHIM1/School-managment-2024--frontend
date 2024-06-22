
import FetchDataStudent from '@/app/actions/student/FetchDataStudent'
import PageHeader from '@/components/Utils/PageHeader';
import Todo from './Todo';
import StudentToken from '@/app/actions/student/StudentToken';
import { getProfileDataWithToken } from '@/fetchApi/GetMethod/getDataWithToken';
export default async function ViewTodos() {

    const token = StudentToken()
    const route = "/todos/users"
    const todos = await getProfileDataWithToken(route, token);



    return (
        <div className='adminPage'>
            <PageHeader text={"Todos"} />

            <div className="listCardWrapper">
                {
                    todos && todos.map(todo => (
                        <Todo
                            key={todo._id}
                            todo={todo} 
                        />
                    ))
                }
            </div>
        </div>
    )
}
