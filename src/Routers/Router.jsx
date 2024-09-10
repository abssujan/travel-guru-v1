import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import News from "../pages/News/News";
import Destination from "../pages/Destination/Destination";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";

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
            }
        ]
    }
])

export default router;