import { RouteObject } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage";
import EditProfilePage from "../pages/ProfilePage/EditProfilePage";
import MyProfilePage from "../pages/ProfilePage/MyProfilePage";
import Test from "./../Test/Test";

export const profileRoutes: RouteObject[] = [
  {
    path: "/profile",
    element: <ProfilePage />,
    errorElement: <div>khattttaa</div>,
    children: [
      { index: true, element: <MyProfilePage /> },
      {
        path: "/profile/personal-info",
        element: <MyProfilePage />,
      },
      {
        path: "/profile/personal-info/edit",
        element: <EditProfilePage />,
      },
      {
        path: "/profile/test",
        element: <Test />,
      },
    ],
  },
];
