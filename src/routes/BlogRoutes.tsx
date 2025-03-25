import { RouteObject } from "react-router-dom";
import BlogList from "../components/Blog/BlogList";
import HomePages from "./../layout/HomePages";

export const blogRoutes: RouteObject[] = [
  {
    path: "/",
    element: <HomePages />,
    children: [
      {
        index: true,
        element: <BlogList />,
      },
    ],
  },
];
