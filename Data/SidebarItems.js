import { MdDashboard , MdDynamicFeed } from "react-icons/md"
import { PiStudent } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { CiViewTimeline } from "react-icons/ci";
import { MdMoreTime } from "react-icons/md";
import { RiAccountBoxLine } from "react-icons/ri";
import { PiNotificationThin } from "react-icons/pi";
import { CiSettings } from "react-icons/ci"; 
import { IoIosBook  } from "react-icons/io"; 
import { GiProgression } from "react-icons/gi";
import { FcBusinessman } from "react-icons/fc";
export const sidebarItems = [
    {
        icon: <MdDashboard />,
        item: "dashboard",
        subItems: [
            {
                item: "Dashboard",
                link: "/dashboard",
            },
            {
                item: "Add admin",
                link: "/dashboard/admin-add",
            },
            {
                item: "Admin list",
                link: "/dashboard/admin-list",
            },
            {
                item: "add Staff",
                link: "/dashboard/add-staff",
            },
            {
                item: "manage Staff",
                link: "/dashboard/manage-staff",
            },
            {
                item: "contact message",
                link: "/dashboard/contact-message",
            },
            {
                item: "reviews",
                link: "/dashboard/reviews",
            },
        ]
    },
    {
        icon: <PiStudent />,
        item: "students",
        subItems: [
            {
                item: "access student",
                link: "/dashboard/access-student",
            },
            {
                item: "manage Student",
                link: "/dashboard/manage-student",
            },

            {
                item: "complains",
                link: "/dashboard/complains",
            },
        ]
    },
    {
        icon: <FaChalkboardTeacher />,
        item: "teachers",
        subItems: [
            {
                item: "access teacher",
                link: "/dashboard/access-teacher",
            },
            {
                item: "manage teacher",
                link: "/dashboard/manage-teacher",
            },

            {
                item: "Gallary",
                link: "/dashboard/teacher-gallary",
            },
        ]
    },
    {
        icon: <CiViewTimeline />,
        item: "class routine",
        subItems: [
            {
                item: "Add Class routine",
                link: "/dashboard/add-class-routine",
            },
            {
                item: "Manage Class routine",
                link: "/dashboard/manage-class-routine",
            },
        ]
    },
    {
        icon: <MdMoreTime />,
        item: "exam routine",
        subItems: [
            {
                item: "Add exam routine",
                link: "/dashboard/add-exam-routine",
            },
            {
                item: "Manage exam routine",
                link: "/dashboard/manage-exam-routine",
            },
        ]
    },
    {
        icon: <RiAccountBoxLine />,
        item: "attendance",
        subItems: [
            {
                item: "add teacher",
                link: "/dashboard/add-teacher-attendance",
            },
            {
                item: "manage teacher",
                link: "/dashboard/manage-teacher-attendance",
            },
            {
                item: "add student",
                link: "/dashboard/add-student-attendance",
            },
            {
                item: "manage student",
                link: "/dashboard/manage-student-attendance",
            },
        ]
    },
    {
        icon: <PiNotificationThin />,
        item: "notice",
        subItems : [
            {
                item: "upload notice",
                link: "/dashboard/upload-notice",
            },
            {
                item: "manage notice",
                link: "/dashboard/manage-notice",
            },
        ]
    },
    {
        icon: <MdDynamicFeed />,
        item: "fee's",
        subItems : [
         
            {
                item: "add fee's",
                link: "/dashboard/add-fee",
            },
            {
                item: "manage fee's",
                link: "/dashboard/manage-fee",
            },
        ]
    },
    {
        icon: <IoIosBook  />,
        item: "book list",
        subItems : [
            {
                item: "add booklist",
                link: "/dashboard/add-booklist",
            },
            {
                item: "manage booklist",
                link: "/dashboard/manage-booklist",
            },
        ]
    },
    {
        icon: <GiProgression />,
        item: "results",
        subItems : [
            {
                item: "upload result",
                link: "/dashboard/add-results",
            },
            {
                item: "Manage results",
                link: "/dashboard/manage-results",
            },
        ]
    },
    {
        icon: <FcBusinessman />,
        item: "commitee",
        subItems : [
            {
                item: "add committee",
                link: "/dashboard/add-committee",
            },
            {
                item: "manage committee",
                link: "/dashboard/manage-committee",
            },
        ]
    },
    {
        icon: <CiSettings />,
        item: "settings",
        subItems: [
            {
                item: "manage content",
                link: "/dashboard/manage-content",
            },
        ]
    },

];
