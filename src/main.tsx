import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from "./Page/Login";
import Otp from "./Page/Otp";
import MainPage from "./Page/MainPage";
import Change from "./Page/Change";
import Internet from "./Page/Internet";
import Services from "./Page/Services";
import Parse from "./Page/Parse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Otp",
    element: <Otp />,
  },
  {
    path: "/MainPage",
    element: <MainPage />,
  },
  {
    path: "/Change",
    element: <Change />,
  },
  {
    path: "/Internet",
    element: <Internet />,
  },
  {
    path: "/Services",
    element: <Services />,
  },
  {
    path: "/Parse",
    element: <Parse />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
