import { FaSadTear } from "react-icons/fa";
import { MdAdd, MdAddModerator, MdCoPresent, MdDashboard, MdViewDay, MdViewQuilt } from "react-icons/md";

const studentSidebarItems = [
    {
        item: "Dashboard",
        icon: <MdDashboard />,
        path: "/student-profile"
    },
    {
        item: "Add Profile",
        icon: <MdAddModerator />,
        path: "/student-profile/add-profile"
    },
    {
        item: "Attendance",
        icon: <MdCoPresent />,
        path: "/student-profile/attendance"
    },
    {
        item: "Add Todo",
        icon: <MdAdd />,
        path: "/student-profile/todo/add"
    },
    {
        item: "View Todo",
        icon: <MdViewDay />,
        path: "/student-profile/todo/view"
    },
    {
        item: "Send Complain",
        icon: <FaSadTear />,
        path: "/student-profile/complain/add"
    },
    {
        item: "View Complain",
        icon: <MdViewQuilt />,
        path: "/student-profile/complain/view"
    },
]

export default studentSidebarItems;