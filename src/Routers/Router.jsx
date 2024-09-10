import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import News from "../pages/News/News";
import Destination from "../pages/Destination/Destination";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',  // Home route
                element: <Home></Home>,
            },
            {
                path: '/news',  // News route at root level
                element: <News></News>,
            },
            {
                path: '/destination',  // Destination route at root level
                element: <Destination></Destination>,
            },
            {
                path: '/blog',  // Blog route at root level
                element: <Blog></Blog>,
            },
            {
                path: '/contact',  // Contact route at root level
                element: <Contact></Contact>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;