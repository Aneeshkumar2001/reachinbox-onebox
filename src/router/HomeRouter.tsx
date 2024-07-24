import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/public/ErrorPage";
import OneBox from "@/pages/OneBox";
import SignUp from "@/pages/SignUp";
import Home from "./pages/private/Home";
import Inbox from "./pages/private/Inbox";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <OneBox />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/search",
        element: <Home />,
      },
      {
        path: "/mail",
        element: <Home />,
      },
      {
        path: "/send",
        element: <Home />,
      },
      {
        path: "/stack",
        element: <Home />,
      },
      {
        path: "/inbox",
        element: <Inbox />,
      },
      {
        path: "/stacks",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Home />,
      },
    ],
  },
]);
const HomeRouter = () => {
  return <RouterProvider router={router} />;
};

export default HomeRouter;
