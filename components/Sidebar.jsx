'use client'
import { sidebarItems } from '@/Data/SidebarItems'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
    const path = usePathname()
    const items = sidebarItems
    return (
        <ul className='px-5 py-10'>
            {
                items.map((item, i) => (
                    <li className={`sidebarItem ${path === item.link ? " bg-purple-100 text-purple-500" : ""}`} key={i}>
                        <span className='text-2xl'>{item.icon}</span>
                        <Link href={item.link}>{item.item}</Link>
                    </li>
                ))
            }

        </ul>
    )
}
