import { MdDashboard } from "react-icons/md"
import { PiStudent } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { CiViewTimeline } from "react-icons/ci";
import { MdMoreTime } from "react-icons/md";
import { RiAccountBoxLine } from "react-icons/ri";
import { PiNotificationThin } from "react-icons/pi";

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
                item: "student lists",
                link: "/dashboard/student-lists",
            },
            {
                item: "teacher lists",
                link: "/dashboard/teacher-lists",
            },
            {
                item: "Add result",
                link: "/dashboard/add-results",
            },
            {
                item: "Manage results",
                link: "/dashboard/manage-results",
            },
            {
                item: "Add Class routine",
                link: "/dashboard/add-class-routine",
            },
            {
                item: "Manage Class routine",
                link: "/dashboard/manage-class-routine",
            },
            {
                item: "Add exam routine",
                link: "/dashboard/add-exam-routine",
            },
            {
                item: "Manage exam routine",
                link: "/dashboard/manage-exam-routine",
            },
            {
                item: "add booklist",
                link: "/dashboard/add-booklist",
            },
            {
                item: "manage booklist",
                link: "/dashboard/manage-booklist",
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
                item: "add committee",
                link: "/dashboard/add-committee",
            },
            {
                item: "manage committee",
                link: "/dashboard/manage-committee",
            },
            {
                item: "add fee's",
                link: "/dashboard/add-fee",
            },
            {
                item: "manage fee's",
                link: "/dashboard/manage-fee",
            },
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
        icon: <PiStudent />,
        item: "students",
        link: "/dashboard/students",
        subItems: [
            {
                item: "All Students",
                link: "/students/all",
            },
            {
                item: "Add Student",
                link: "/students/add",
            },
        ]
    },
    {
        icon: <FaChalkboardTeacher />,
        item: "teachers",
        link: "/dashboard/teachers"
    },
    {
        icon: <CiViewTimeline />,
        item: "class routine",
        link: "/dashboard/class-routine"
    },
    {
        icon: <MdMoreTime />,
        item: "exam routine",
        link: "/dashboard/exam-routine"
    },
    {
        icon: <RiAccountBoxLine />,
        item: "attendance",
        link: "/dashboard/attendance"
    },
    {
        icon: <PiNotificationThin />,
        item: "notice",
        link: "/dashboard/add-notice"
    },

];
