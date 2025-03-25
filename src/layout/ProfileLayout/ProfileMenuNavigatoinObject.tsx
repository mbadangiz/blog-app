import { FaRegUser } from "react-icons/fa";
import { In_ProfileMenuItems } from "src/core/types/interfaces";

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
];

export { profileMenuObjects };
