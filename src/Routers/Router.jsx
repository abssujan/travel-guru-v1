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
                path: '/',
                element: <Home></Home>,
                children: [
                    {
                        path: '/news',
                        element: <News></News>
                    },
                    {
                        path: '/destination',
                        element: <Destination></Destination>
                    },
                    {
                        path: '/blog',
                        element: <Blog></Blog>
                    },
                    {
                        path: '/contact',
                        element: <Contact></Contact>
                    }
                ]
            }
        ]
    }
])

export default router;