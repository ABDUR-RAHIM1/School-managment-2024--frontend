import Title from '@/components/Utils/Title'
import { handleAllGetMethod } from '@/fetchApi/GetMethod/handleAllGetMethod'
import Image from 'next/image'
import dummyImg from "@/public/images/sd.png"

export default async function CommitteList() {
    const committe = await handleAllGetMethod("/comitee/all")

    return (
        <div className='my-5'>
            <Title text={"Committe list"} />

            <div className='listCardWrapper'>
                {
                    committe.map(committe => (
                        <div
                            key={committe._id}
                            className='listCard'
                        >
                            <div>

                                <Image
                                    src={committe.photo || dummyImg}
                                    width={500}
                                    height={500}
                                    alt='committe photo'
                                    className='w-full h-[50vh] md:h-[200px] rounded-md'
                                />
                                <small >Joined - {new Date(committe.createdAt).toLocaleDateString("en-US")} </small>
                            </div>
                            <div className='text'>
                                <p>Name : {committe.name}</p>
                                <p>Email : <span>{committe.email}</span> </p>
                                <p>Phone : {committe.phone}</p>
                                <p>Title : {committe.title}</p>
                                <p>Position : {committe.position}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
