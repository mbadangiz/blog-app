import { createBrowserRouter, RouteObject } from "react-router-dom";
import CheckTokenExists from "../core/providers/CheckTokenExists";
import Page404 from "../pages/404Page";
import { authRoutes } from "./AuthRoutes";
import { homeRoutes } from "./HomeRoutes";
import { profileRoutes } from "./ProfileRoutes";
import Test from "./../Test/Test";

const routes: RouteObject[] = [...homeRoutes, ...authRoutes, ...profileRoutes];

const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <CheckTokenExists />,
    children: routes,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "*",
    element: <Page404 />,
    errorElement: <div>خطایی رخ داده است.</div>,
  },
]);

export { myRoutes };
