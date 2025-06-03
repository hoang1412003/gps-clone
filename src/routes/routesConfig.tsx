import Monitor from "../pages/Monitor";
import Login from "../pages/Auth/index";
import MainLayout from "../layout/MainLayout";
import withAuthLayout from "../hoc/withAuthLayout";
import withGuestOnly from "../hoc/withGuestOnly";
import { Navigate } from "react-router-dom";

export const routes = [
  {
    path: "/",
    element: <Navigate to="/monitor" replace />,
  },
  {
    path: "/login",
    element: withGuestOnly(Login),
  },
  {
    path: "/monitor",
    element: withAuthLayout(Monitor, MainLayout),
  },

];
