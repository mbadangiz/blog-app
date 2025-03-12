import { RouteObject } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage";
import ProfileDashboardPage from "../pages/ProfilePage/ProfileDashboardPage";
import Test from "./../Test/Test";

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
        path: "/profile/test",
        element: <Test />,
      },
    ],
  },
];
