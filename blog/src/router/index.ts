import { createBrowserRouter } from "react-router";
import App from "../App";
import My from "../pages/my";
import About from "../pages/about";
import { Home } from "../pages/home";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "/home",
                Component: Home
            },
            {
                path: "my",
                Component: My
            },
            {
                path: "about",
                Component: About
            }
        ]
    }
])