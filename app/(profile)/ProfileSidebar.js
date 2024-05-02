import Image from 'next/image'

import avatar from "@/public/images/sd.png"
import Link from 'next/link'
import { MdAddToDrive, MdDashboard, MdPostAdd, MdPresentToAll, MdTroubleshoot, MdViewList, MdWatch } from 'react-icons/md'

export default function ProfileSidebar() {
    const items = [
        {
            item: "Dashboard",
            link: "/student-profile",
            icon: <MdDashboard />
        },
        {
            item: "Add Profile",
            link: "/student-profile",
            icon: <MdPostAdd />
        },
        {
            item: "Attendance",
            link: "/profile",
            icon: <MdPresentToAll />
        },
        {
            item: "Add Todo",
            link: "/profile",
            icon: <MdAddToDrive />
        },
        {
            item: "View Todo",
            link: "/profile",
            icon: <MdWatch />
        },
        {
            item: "Send Complain",
            link: "/profile",
            icon: <MdTroubleshoot />
        },
        {
            item: "View Complain",
            link: "/profile",
            icon: <MdViewList />
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
                <p>asadul islam c</p>
            </div>
            <hr />

            <div className='my-10'>
                {
                    items && items.map((item, i) => (
                        <div key={i} className=' flex items-center gap-2 w-full py-2 px-3 my-2  text-white'>
                            <span className='text-3xl'>
                                {item.icon}
                            </span>
                            <Link className='text-[18px] capitalize' href={item.link}>
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
