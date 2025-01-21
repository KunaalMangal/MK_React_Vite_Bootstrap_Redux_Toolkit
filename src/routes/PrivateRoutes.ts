import { Dashboard, Settings, Users } from "../pages";

export const PrivateRoutes = [
    {
        index: true,
        path: '/',
        element: Dashboard,
    },
    {
        path: 'users',
        element: Users,
    },
    {
        path: 'settings',
        element: Settings,
    },
]