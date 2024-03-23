
import { getDummyPosts } from "@/app/fetchApi"

export default async function HomePage() {

  const data = await getDummyPosts();

  return (
    <>
      <h2 className="text-3xl text-center my-5">Home page</h2>

      <div className="flex justify-between flex-wrap">
        {
          data.map(post => (
            <div key={post.id} className="w-[32%] my-3 border p-2">
              <h2 className="text-lg font-medium">{post.title + " " + post.id} </h2>
              <p>{post.body.slice(0, 100)}</p>
            </div>
          ))
        }
      </div>

    </>
  )
}
