import {AuthPageTemplate} from "../templates/auth.page.tsx";
import {LoginHeader} from "./components/LoginHeader.tsx";
import {LoginForm} from "./components/LoginForm.tsx";

export const LoginPage = () => {
  return (
    <AuthPageTemplate>
      <LoginHeader/>
      <LoginForm/>
    </AuthPageTemplate>
  );
};
