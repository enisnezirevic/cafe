import styles from "./LoginForm.module.scss";
import {FormFieldText} from "../../../components/forms/form-field-text/form-field-text.component.tsx";
import {RegularButton} from "../../../components/buttons/regular-button/regular-button.component.tsx";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

interface FormValues {
  username: string;
  password: string;
}

export const LoginForm = () => {
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
    <form className={styles.form} onSubmit={handleSubmit(submitLogin)}>
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