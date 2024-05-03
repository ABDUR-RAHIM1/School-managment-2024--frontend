
import { detailsHandler } from '@/fetchApi/detailsHandler/detailsHandler';
import Image from 'next/image';
import defaultImg from "@/public/images/no-image.jpg";

export default async function BlogDetails({ params }) {
    const { id } = params;

    const blog = await detailsHandler(id, "/posts/all");
     
    return (
        <div className='py-3'>
            <div>
                <Image
                    src={blog.photo || defaultImg}
                    width={1000}
                    height={1000}
                    alt='blog details'
                    className='w-full rounded-md my-2 h-[50vh] md:h-[500px]'
                />
                <div className='flex items-center justify-between my-3'>
                    <p>Posted : {new Date(blog.createdAt).toLocaleDateString("en-US")} </p>

                    <p className='underline capitalize'>Auhtor : {blog.creator}</p>

                </div>

                <div className='my-10'>
                    <h4 className='text-3xl font-medium my-2 capitalize'>{blog.title}</h4>
                    <p className=' whitespace-pre-line'>{blog.content}</p>
                </div>
            </div>
        </div>
    )
}
