import ComplainTable from "@/components/dashboard/ComplainTable"
import { handleAllGetMethod } from "@/fetchApi/GetMethod/handleAllGetMethod"


export default async function ManageComplains() {
  const route = "/complain/all"
  const data = await handleAllGetMethod(route)

  return (
    <div className='complain_page'>
      <div className='flex items-center justify-between my-3 font-medium capitalize'>
        <h2 className='text-2xl'>Complain of students</h2>
        <button className='py-2 px-3 text-white bg-red-600 rounded-md'>Delete</button>
      </div>

      <div className="complainsContainer">
        <table className="table">
          <thead>
            <tr>
              <th>select</th>
              <th>author</th>
              <th>email</th>
              <th>title</th>
              <th>Date</th>
              <th>Details</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              data && data.slice().reverse().map(complain => (
                <ComplainTable
                  key={complain._id}
                  complains={complain}
                />
              ))
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}
