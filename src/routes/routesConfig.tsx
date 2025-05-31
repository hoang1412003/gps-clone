import Monitor from "../pages/Monitor";

export type LayoutType = "main";

export const routes = [
  {
    path: "/monitor",
    element: <Monitor />,
    layout: "main" as LayoutType,
  },
 
];
