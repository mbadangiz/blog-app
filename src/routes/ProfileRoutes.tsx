import { RouteObject } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage";
import ProfileDashboardPage from "../pages/ProfilePage/ProfileDashboardPage";
import Test from "./../Test/Test";
import MyProfilePage from "../pages/ProfilePage/MyProfilePage";
import EditProfilePage from "../pages/ProfilePage/EditProfilePage";

export const profileRoutes: RouteObject[] = [
  {
    path: "/profile",
    element: <ProfilePage />,
    errorElement: <div>khattttaa</div>,
    children: [
      { index: true, element: <ProfileDashboardPage /> },
      {
        path: "/profile/dashboard",
        element: <ProfileDashboardPage />,
      },
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
