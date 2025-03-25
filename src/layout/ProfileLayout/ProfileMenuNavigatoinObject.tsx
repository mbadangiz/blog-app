import { BiSolidDashboard } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { In_ProfileMenuItems } from "src/core/types/interfaces";

const profileMenuObjects: In_ProfileMenuItems[] = [
  {
    id: 1,
    icon: <BiSolidDashboard />,
    path: "/profile/dashboard",
    title: "Dashboard",
  },
  {
    id: 2,
    icon: <FaRegUser />,
    path: "/profile/personal-info",
    title: "My Profile",
  },
];
export { profileMenuObjects };
