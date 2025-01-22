import { Dashboard, Settings, Users } from "../pages";

export const PrivateRoutes = [
  {
    index: true,
    path: "/",
    element: Dashboard,
  },
  {
    path: "users",
    element: Users,
    children: [
      {
        path: "view",
        element: Users,
        children: [
          {
            path: "friends",
            element: Users,
          },
        ],
      },
      {
        path: "edit",
        element: Users,
      },
    ],
  },
  {
    path: "settings",
    element: Settings,
  },
];
