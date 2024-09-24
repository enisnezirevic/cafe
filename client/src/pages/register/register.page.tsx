import {AuthPageTemplate} from "../templates/auth.page.tsx";
import {RegisterHeader} from "./components/RegisterHeader.tsx";
import {RegisterForm} from "./components/RegisterForm.tsx";

export const RegisterPage = () => {
  return (
    <AuthPageTemplate>
      <RegisterHeader/>
      <RegisterForm/>
    </AuthPageTemplate>
  );
};