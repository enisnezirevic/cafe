import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import {router} from "./pages/routing.ts";

const root: HTMLElement = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
);
