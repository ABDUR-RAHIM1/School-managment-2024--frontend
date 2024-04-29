import Title from '@/components/Utils/Title'
import React from 'react'

export default function Facilities() {


    const data = [
        {
            title: "অনলাইন  অ্যাটেনডেন্স সিস্টেম ",
            desc: "অনলাইনের  মাধ্যমে শিক্ষার্থীদের উপস্থিতি পর্যবেক্ষণ করা হয়।  যা শিক্ষক এবং অভিভাবক গণ দেখতে পারবে। "
        },
        {
            title: "অনলাইনে রেজাল্ট দেখার সুবিধা",
            desc: "অনলাইনে রেজাল্ট দেখাও ফিডব্যাক সহকারে অনলাইনে রেজাল্ট দেখার সুবিধা ডাউনলোড করতে পারবেন।"
        },
        {
            title: "অনলাইন  ফিস ম্যানেজমেন্ট ",
            desc: "অনলাইনের মাধ্যমে বিভিন্ন ফিস প্রদান এবং পর্যালোচনার পদ্ধতি। "
        },
        {
            title: "উন্নত মানের শিক্ষা ব্যবস্থা দেওয়া হবে",
            desc: "দক্ষ শিক্ষক দ্বারা শিক্ষার্থীদের উন্নতমানের শিক্ষা দেওয়া হবে এবং উন্নত মানের শিক্ষাব্যবস্থা থাকবে।"
        },
        {
            title: "পরীক্ষার মাধ্যমে শিক্ষার মান যাচাই",
            desc: "পরীক্ষার মাধ্যমে শিক্ষার্থীদের প্রতিষ্ঠানের নির্দিষ্ট পাঠ্যক্রমে উন্নয়নের মান যাচাই করা হয়।"
        },
        {
            title: "মনস্তাত্বিক  বিকাশ ",
            desc: "খেলাধুলা ও সাংস্কৃতিক কর্মকান্ডের মাদ্ধমে শিক্ষার্থীদের মানসিক বিকাশে গুরুত্ত্ব দেওয়া হয়।"
        },
    ]

    return (
        <div className='card'>
            <Title text={"স্কুলের সুবিধা সমূহ"} />
            <div className='flex  justify-between flex-wrap'>
                {
                    data.map((each, i) => (
                        <div key={i} className=' w-[48%] md:w-[32%] my-4 border p-2 rounded-md hover:shadow-md hover:border-green-300 duration-200'>
                            <h2 className=' my-3 font-bold'>{each.title}</h2>
                            <p>{each.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
