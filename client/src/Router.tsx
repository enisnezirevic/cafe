import {createBrowserRouter} from "react-router-dom";
import {App} from "./App.tsx";
import {LoginPage} from "./pages/login/login.page.tsx";
import {RegisterPage} from "./pages/register/register.page.tsx";
import {ProfilePage} from "./pages/profile/ProfilePage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "login",
        element: <LoginPage/>
      },
      {
        path: "register",
        element: <RegisterPage/>
      },
      {
        path: "profile",
        element: <ProfilePage/>
      }
    ]
  }
]);