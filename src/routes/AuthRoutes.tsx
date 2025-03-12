import { RouteObject } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

export const authRoutes: RouteObject[] = [
  {
    path: "/login",
    index: true,
    element: <LoginPage />,
    errorElement: <div>khattttaa</div>,
  },
];
