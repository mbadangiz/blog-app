import { RouteObject } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Register_Step_1 from "../components/Register/register-step-1";
import Register_Step_2 from "../components/Register/register-step-2";
import Register_Step_3 from "../components/Register/register-step-3";
import { RegisterProvider } from "../core/providers/RegisterProvider";

export const authRoutes: RouteObject[] = [
  {
    path: "/login",
    index: true,
    element: <LoginPage />,
    errorElement: <div>Error</div>,
  },
  {
    path: "/sign-up",
    element: (
      <RegisterProvider>
        <Register_Step_1 />
      </RegisterProvider>
    ),
    errorElement: <div>Not Found</div>,
  },
  {
    path: "/sign-up/verify",
    element: (
      <RegisterProvider>
        <Register_Step_2 />
      </RegisterProvider>
    ),
    errorElement: <div>Not Found</div>,
  },
  {
    path: "/sign-up/complete",
    element: (
      <RegisterProvider>
        <Register_Step_3 />
      </RegisterProvider>
    ),
    errorElement: <div>Not Found</div>,
  },
];
