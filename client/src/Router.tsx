import {createBrowserRouter} from "react-router-dom";
import {App} from "./App.tsx";
import {LoginPage} from "./pages/login/login.page.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "login",
        element: <LoginPage/>
      }
    ]
  }
]);