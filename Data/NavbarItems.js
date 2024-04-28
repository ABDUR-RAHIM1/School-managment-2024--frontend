import { MdHome, MdInfo, MdList, MdLogin, MdOutlineAddIcCall } from "react-icons/md";
import {HiAcademicCap} from "react-icons/hi"
import {AiOutlineNotification } from "react-icons/ai"
import {GrGallery  } from "react-icons/gr"

export const navbarItems = [
    {
        item: "হোম",
        link: "/",
        icon: <MdHome />
    },
    {
        item: "ইনস্টিটিউট তথা",
        icon: <MdInfo />,
        subItem: [
            {
                item: "আমাদের সম্পর্কে",
                link: "/about-us"
            },
            {
                item: "কমিটি ",
                link: "/comitte-list"
            },
            {
                item: "ডোনার ",
                link: "/donar-list"
            },
        ]
    },
    {
        item: "তালিকা",
        icon: <MdList />,
        subItem: [
            {
                item: "শিক্ষক ",
                link: "/teacher-list"
            },
            {
                item: "ছাত্রছাত্রী ",
                link: "/student-list"
            },
            {
                item: "কর্মী",
                link: "/staff-list"
            },
        ]
    },
    {
        item: "একাডেমিক তথা",
        icon: <HiAcademicCap />,
        subItem: [
            {
                item: "বইয়ের তালিকা ",
                link: "/book-list"
            },
            {
                item: "ক্লাস রুটিন ",
                link: "/class-routine"
            },
            {
                item: "পরীক্ষার রুটিন",
                link: "/exam-routine"
            },
        ]
    },
    {
        item: "নোটিশ বোর্ড",
        icon: <AiOutlineNotification />,
        link: "/notice-board"
    },
    {
        item: "গ্যালারি",
        icon: <GrGallery />,
        link: "/gallary"
    },
    {
        item: "যোগাযোগ ",
        icon: <MdOutlineAddIcCall />,
        link: "/contact-us"
    },
    {
        item: "লগইন",
        icon: <MdLogin />,
        subItem: [
            {
                item: "শিক্ষক ",
                link: "/teacher-login"
            },
            {
                item: "শিক্ষার্থী",
                link: "/student-login"
            },
        ]
    },
]