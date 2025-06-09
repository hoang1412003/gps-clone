import Monitor from "../pages/Monitor";
import Login from "../pages/Auth/index";
import MainLayout from "../layout/MainLayout";
import withAuthLayout from "../hoc/withAuthLayout";
import withGuestOnly from "../hoc/withGuestOnly";
import { Navigate } from "react-router-dom";
import ROUTE_PATHS from "../constants/routePaths"

export const routes = [
  {
    path: ROUTE_PATHS.ROOT,
    element: <Navigate to="/monitor" replace />,
  },
  {
    path: ROUTE_PATHS.LOGIN,
    element: withGuestOnly(Login),
  },
  {
    path: ROUTE_PATHS.MONITOR,
    element: withAuthLayout(Monitor, MainLayout),
  },
  {
    path: ROUTE_PATHS.NOT_FOUND,
    element: <Navigate to="/monitor" replace />
  }

];
