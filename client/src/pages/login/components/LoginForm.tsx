import styles from "./LoginForm.module.scss";
import {FormFieldText} from "../../../components/forms/form-field-text/form-field-text.component.tsx";
import {RegularButton} from "../../../components/buttons/regular-button/regular-button.component.tsx";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useContext} from "react";
import {UserContext} from "../../../contexts/user.context.tsx";
import {FormErrorMessage} from "../../../components/forms/form-error-message/FormErrorMessage.component.tsx";
import {useError} from "../../../hooks/useError.ts";

interface FormValues {
  username: string;
  password: string;
}

export const LoginForm = () => {
  const {login} = useContext(UserContext);
  const {error: loginError, setError: setLoginError, clearError: clearLoginError} = useError();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FormValues>();

  const submitLogin = async (data: FormValues) => {
    clearLoginError();

    try {
      await login(data.username, data.password);
      navigate("/home", {replace: true});
    } catch (e: any) {
      setLoginError(e.message);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submitLogin)}>
      {loginError && <FormErrorMessage errorMessage={loginError}/>}

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

      <div className={styles.actions}>
        <RegularButton label="Log In" type="submit"/>
        <p className={styles.account_info}>
          Need an account?
          <Link className={styles.link} to="/register">
            Register
          </Link>
        </p>
      </div>
    </form>
  );
};