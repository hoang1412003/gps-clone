import Monitor from "../pages/Monitor";
import Login from "../pages/Auth/index";
import MainLayout from "../layout/MainLayout";

export const routes = [
  {
    path: "/login",
    element: < Login/>,
  },
  {
    path: "/monitor",
    element: <Monitor />,
    layout: MainLayout
  },
 
];
