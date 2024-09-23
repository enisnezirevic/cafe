import "./login.page.styles.scss";
import logoNoBg from "../../assets/logo/logo-no-background.svg";
import {useForm} from "react-hook-form";
import {FormFieldText} from "../../components/forms/form-field-text/form-field-text.component.tsx";
import {RegularButton} from "../../components/buttons/regular-button/regular-button.component.tsx";
import {Link} from "react-router-dom";

interface FormValues {
  username: string;
  password: string;
}

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FormValues>();

  // #TODO Implement Login logic
  const submitLogin = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="login-page__wrapper">
      <img className="login-page__main-logo" src={logoNoBg} alt="logo"/>

      <div className="login-page__content">

        <div className="login-page__header">
          <img className="login-page__secondary-logo" src={logoNoBg} alt="logo"/>
          <h2 className="login-page__title">Welcome back!</h2>
          <p className="login-page__text">We're so excited to see you again!</p>
        </div>

        <form className="login-page__form" onSubmit={handleSubmit(submitLogin)}>
          <FormFieldText
            label="Username"
            type="text"
            name="username"
            register={register}
            validation={{required: "Username is required."}}
            error={errors.username}
          />

          <FormFieldText
            label="Password"
            type="password"
            name="password"
            register={register}
            validation={{required: "Password is required."}}
            error={errors.password}
          />

          <div className="login-page__actions">
            <RegularButton label="Log In" type="submit"/>
            <p className="login-page__account-info">
              Need an account?
              <Link className="login-page__link" to="/register">
                Register
              </Link>
            </p>
          </div>

        </form>

      </div>

    </div>
  );
};
