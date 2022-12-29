import { createBrowserRouter } from "react-router-dom"
import About from "../Pages/About/About"
import Error from "../Pages/Error/Error"
import Home from "../Pages/Home/Home"
import Layout from "../Pages/Layout/Layout"
import Login from "../Pages/Login/Login"
import Message from "../Pages/Message/Message"
import Details_post from "../Pages/ShowAllPost/Details_post"
import ShowAllPost from "../Pages/ShowAllPost/ShowAllPost"
import Signup from "../Pages/Sign_up/Sign_up"
import Private_route from "../Private_route/Private_route"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/newsfeed",
                element: <Private_route><ShowAllPost /></Private_route>
            },
            {
                path: "/about",
                element: <Private_route><About /></Private_route>
            },
            {
                path: "/message",
                element: <Private_route><Message /></Private_route>
            },
            {
                path: "/details/:id",
                element: <Private_route><Details_post /></Private_route>
            },

            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/sign_up",
                element: <Signup />
            }
        ]
    }
])

export default router