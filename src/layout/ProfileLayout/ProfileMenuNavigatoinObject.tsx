import { BiSolidDashboard } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { RiPagesLine } from "react-icons/ri";
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
  {
    id: 3,
    icon: <RiPagesLine />,
    path: "",
    title: "صفحه های من",
    children: [
      {
        id: 5,
        icon: <GoDotFill />,
        path: "",
        title: "My Pages",
        children: [
          {
            id: 6,
            icon: <GoDotFill />,
            path: "",
            title: "c",
          },
        ],
      },
    ],
  },
];
export { profileMenuObjects };
