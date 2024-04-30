import { detailsHandler } from '@/fetchApi/detailsHandler/detailsHandler'
import dummyImg from "@/public/images/no-image.jpg"
import Image from 'next/image';
import Link from 'next/link';

export default async function PostsDetails({ params }) {
    const { id } = params

    const route = `/posts/all`
    const post = await detailsHandler(id, route);
    
    return (
        <div className='adminPage'>
            <div className='w-full md:w-[60%] m-auto h-[550px]'>
                <Image
                    src={post.photo || dummyImg}
                    width={1000}
                    height={1000}
                    className='w-full h-full rounded-md'
                    alt='post details photo'
                />
            </div>

            <div className='my-5 '>
                <p className='text-sm font-medium capitalize'>Author - 
                    <Link href={`/dashboard/profile/${post.teacherId}`} className='underline text-blue-600'>
                        {post.creator}
                    </Link>
                </p>
                <p>Date - {new Date(post.createdAt).toLocaleDateString("en-US")} </p>
            </div>

            <div className='my-5'>
                <h1 className='text-2xl font-medium my-3'>{post.title}</h1>
                <p>{post.content}</p>
            </div>

        </div>
    )
}
