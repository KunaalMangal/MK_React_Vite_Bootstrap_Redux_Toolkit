import { Login, Signin } from "../pages";

export const PublicRoutes = [
    {
        index: true,
        path: '/',
        element: Login,
    },
    {
        path: 'signin',
        element: Signin,
    },
]