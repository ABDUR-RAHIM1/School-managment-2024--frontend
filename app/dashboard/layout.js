"use client"

import { sidebarItems } from '@/Data/SidebarItems';
import Sidebar from '@/components/Sidebar'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React, { useLayoutEffect, useState } from 'react'
import { FaSchool } from 'react-icons/fa';
import { IoMdMenu, IoIosSearch } from "react-icons/io";

export default function DashboardLayout({ children }) {

    const router = useRouter();
    const [menuClick, setMenuClick] = useState(false) 
    const [search , setSearch] = useState("")
    const [items, setItems] = useState([])

    useLayoutEffect(() => {
        const isAdmin = localStorage.getItem("isAdmin");
        if (!isAdmin) {
            router.push("/admin-auth")
        }
    }, [])
    const handleMenuCLick = () => {
        setMenuClick(!menuClick)
    };


    const handleSearch = (e) => {
        const text = e.target.value.toLowerCase();
        setSearch(text)
        const search = sidebarItems.filter(f => {

            const words = f.item.toLowerCase().split(' ');

            return words.some(word => word.includes(text));
        });
        if (text.length <= 0) {
            setItems([]);
            return
        } 
        setItems(search);
    }
 
   const clickSearchItems = ()=>{
    setItems([])
    setSearch("") 
   } 

    return (
        <>

            <div className="dashboardHeader">
                <div className="logo">
                    <h4 className='text-xl font-medium capitalize flex items-center gap-2'>
                        <span className='text-3xl'> <FaSchool /> </span>    School managment
                    </h4>
                    <span onClick={handleMenuCLick} className='text-4xl cursor-pointer'><IoMdMenu /> </span>
                </div>
                <div className="w-[350px] relative">
                    <input onChange={handleSearch}  type="search" className='searchInput' placeholder='search here' />
                    <span className='text-3xl absolute top-3 left-2'> <IoIosSearch /> </span>
               

                    {/* search results area */}
                    <div className={`searchResultArea ${search.length<=0 ? "hidden" :"block"}`}>
                        <h4 className='text-center mb-5 text-xl'>Relavent Items</h4>
                        {

                          items &&  items.length <= 0 ? <p className='my-3 text-center text-red-500'>No item found !</p> : items.map(i => {
                                return i.subItems.map((s , i) => {
                                    return (
                                        <div key={i} onClick={clickSearchItems} className='my-3 font-medium text-center underline'>
                                            <Link key={s.link} href={s.link}>{s.item}  </Link>
                                        </div>
                                    );
                                });
                            })
                        }
                    </div>
                    {/* search results area  end here*/}

                </div>
            </div>
            <div className='dashboard'>

                <div className={`dashboardSidebar ${menuClick ? "w-16  overflow-x-hidden" : "w-[300px]"}`}>
                    <Sidebar />
                </div>
                <div className='dashboardMain'>
                    {children}

                </div>
            </div>

        </>
    )
}
