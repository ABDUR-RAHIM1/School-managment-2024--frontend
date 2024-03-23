import {MdDashboard} from "react-icons/md"
import { PiStudent } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { CiViewTimeline } from "react-icons/ci";
import { MdMoreTime } from "react-icons/md";
import { RiAccountBoxLine } from "react-icons/ri";
import { PiNotificationThin } from "react-icons/pi";

export const sidebarItems = [
    {
        icon : <MdDashboard/>,
        item :"dashboard",
        link:"/dashboard"
    },
    {
        icon : <PiStudent/>,
        item :"students",
        link:"/dashboard/students"
    },
    {
        icon :<FaChalkboardTeacher />,
        item :"teachers",
        link:"/dashboard/teachers"
    },
    {
        icon : <CiViewTimeline/>,
        item :"class routine",
        link:"/dashboard/class-routine"
    },
    {
        icon : <MdMoreTime/>,
        item :"exam routine",
        link:"/dashboard/exam-routine"
    },
    {
        icon : <RiAccountBoxLine/>,
        item :"attendance",
        link:"/dashboard/attendance"
    },
    {
        icon : <PiNotificationThin/>,
        item :"notice",
        link:"/dashboard/add-notice"
    },
    
];
