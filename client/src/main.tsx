import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import {router} from "./Router.tsx";
import "./styles/global.scss";
import {UserProvider} from "./contexts/user.context.tsx";

const root = document.getElementById("root");

createRoot(root!).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router}/>
    </UserProvider>
  </StrictMode>,
);
