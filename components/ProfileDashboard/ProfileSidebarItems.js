import Image from 'next/image'

import avatar from "@/public/images/sd.png"
import Link from 'next/link'

export default function ProfileSidebarItems() {
    const items = [
        {
            item: "home",
            link: "/profile"
        },
        {
            item: "home",
            link: "/profile"
        },
        {
            item: "home",
            link: "/profile"
        },
        {
            item: "home",
            link: "/profile"
        },
        {
            item: "home",
            link: "/profile"
        },
    ]
    return (
        <div className='px-5'>
            <div className='flex items-center gap-3 my-10'>
                <Image
                    src={avatar}
                    width={500}
                    height={500}
                    alt='profile photo'
                    className='w-12 h-12 rounded-full '
                />
                <p>asadul islam</p>
            </div>
            <hr />

            <div className='my-10'>
                {
                    items && items.map((item, i) => (
                        <div key={i} className='w-full py-2 px-3 my-2 bg-blue-700 text-white'>
                            <Link className='text-xl font-medium capitalize' href={item.link}>
                                {item.item}
                            </Link>
                        </div>
                    ))
                }
            </div>


            <div style={{ height: "1000vh" }}>ggg</div>
        </div>
    )
}
