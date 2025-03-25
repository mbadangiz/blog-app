import { FaRegUser } from "react-icons/fa";
import { In_ProfileMenuItems } from "src/core/types/interfaces";
import { FaBlogger } from "react-icons/fa";

const profileMenuObjects: In_ProfileMenuItems[] = [
  {
    id: 2,
    icon: <FaRegUser />,
    path: "/profile/personal-info",
    title: "Profile",
    children: [
      {
        id: 3,
        icon: <FaRegUser />,
        path: "/profile/personal-info/",
        title: "Personal Info",
        parentId: 2,
      },
      {
        id: 3,
        icon: <FaRegUser />,
        path: "/profile/personal-info/edit",
        title: "Edit Profile",
        parentId: 2,
      },
    ],
  },
  {
    icon: <FaBlogger />,
    id: 3,
    path: "/profile/create-blog",
    title: "New Blog",
  },
];

export { profileMenuObjects };
