import { RouteObject } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

export const authRoutes: RouteObject[] = [
  {
    path: "/login",
    index: true,
    element: <LoginPage />,
    errorElement: <div>khattttaa</div>,
  },
  {
    path: "/sign-up",
    element: <RegisterPage />,
    errorElement: <div>Not Found</div>,
  },
];
