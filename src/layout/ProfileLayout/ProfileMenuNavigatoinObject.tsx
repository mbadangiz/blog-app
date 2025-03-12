import { BiSolidDashboard } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { RiPagesLine } from "react-icons/ri";
import { In_ProfileMenuItems } from "src/core/types/interfaces";

const profileMenuObjects: In_ProfileMenuItems[] = [
  {
    id: 1,
    icon: <BiSolidDashboard />,
    path: "/profile/dashboard",
    title: "داشبورد",
  },
  {
    id: 2,
    icon: <RiPagesLine />,
    path: "",
    title: "صفحه های من",
    children: [
      {
        id: 5,
        icon: <GoDotFill />,
        path: "/profile/test",
        title: "c",
      },
    ],
  },
];
export { profileMenuObjects };
