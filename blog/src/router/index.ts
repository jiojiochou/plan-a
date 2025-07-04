import { createBrowserRouter, redirect } from "react-router";
import App from "../App";
import Me from "../pages/me";
import Component from "../pages/component";
import ThreeD from "../pages/3D";
import WebGIS from "../pages/WebGIS";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        element: null, // 保持element为null
        loader: () => redirect("/me"), // 现在可以正常使用redirect函数
      },
      {
        path: "me",
        Component: Me,
      },
      {
        path: "component",
        Component: Component,
      },
      {
        path: "3D",
        Component: ThreeD,
      },
      {
        path: "WebGIS",
        Component: WebGIS,
      },
    ],
  },
]);
