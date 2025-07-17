import { createBrowserRouter, redirect } from "react-router";
import Me from "../pages/me"
import App from "../App";
import Component from "../pages/component";
import WebGIS from "../pages/webGIS";
import ThreeD from "../pages/ThreeD";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                index: true,
                Component: Me,
                loader: () => redirect('/me'),
            },
            {
                path: '/me',
                Component: Me,
            },
            {
                path: '/component',
                Component: Component
            },
            {
                path: '/WebGIS',
                Component: WebGIS
            },
            {
                path: '/3D',
                Component: ThreeD
            }
        ]
    }
])