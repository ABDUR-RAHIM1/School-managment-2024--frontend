import Title from '@/components/Utils/Title'
import { handleAllGetMethod } from '@/fetchApi/GetMethod/handleAllGetMethod'
import Image from 'next/image'
import dummyImg from "@/public/images/sd.png"
import Link from 'next/link'

export default async function TeacherList() {
    const teacher = await handleAllGetMethod("/teachers/profile/all")

    return (
        <div className='my-3'>
            <Title text={'Teachers list'} />

            <div className='listCardWrapper'>
                {
                    teacher && teacher.map(teacher => (
                        <div key={teacher._id}
                            className='listCard'>
                            <div>
                                <Image
                                    src={teacher.photo || dummyImg}
                                    width={1000}
                                    height={1000}
                                    alt='teachers photo'
                                    className='w-full h-[50vh] md:h-[250px] rounded-md'
                                />
                                <small >Profile Created - {new Date(teacher.createdAt).toLocaleDateString("en-US")} </small>
                            </div>

                            <div className='text'>
                                <p>Name :
                                    <Link className='link' href={`/profile/;d;d;d`}>
                                        {teacher.name}
                                    </Link>
                                </p>
                                <p>Email : <span> {teacher.email}</span> </p>
                                <p>Email : {teacher.qualification}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
