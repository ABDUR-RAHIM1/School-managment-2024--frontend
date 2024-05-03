import Title from '@/components/Utils/Title'
import { handleAllGetMethod } from '@/fetchApi/GetMethod/handleAllGetMethod'
import Image from 'next/image'
import defaultImg from "@/public/images/no-image.jpg"
import Link from 'next/link'

export default async function BlogPage() {
    const blogs = await handleAllGetMethod("/posts/all")

    return (
        <div className='py-3'>
            <Title text={"All Blogs"} />

            <div className='listCardWrapper'>
                {
                    blogs && blogs.slice().reverse().map(bl => (
                        <div key={bl._id} className='listCard'>
                            <Image
                                src={bl.photo || defaultImg}
                                width={1000}
                                height={1000}
                                alt='blogs'
                                className='listCardPhoto'
                            />
                            <div className="text">
                                <div className='flex items-center justify-between my-3'>
                                    <span>{new Date(bl.createdAt).toLocaleDateString("en-US")}</span>
                                    <span title='Post Auhtor' className=' underline'>
                                        {bl.creator}
                                    </span>
                                </div>
                                <h3 className='text-xl font-medium my-2 capitalize'>{
                                    bl.title.length > 20 ? bl.title.slice(0, 20) + " . . ." : bl.title
                                }</h3>
                                <p>{bl.content.length > 40 ? bl.content.slice(0, 40) + " . . ." : bl.content}</p>
                            </div>
                            <div className="btn_wrap ">
                                <Link href={`/blogs/${bl._id}`} className='myBtn'>Read More</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
