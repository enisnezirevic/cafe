import styles from "./RegisterForm.module.scss";
import {FormFieldText} from "../../../components/forms/form-field-text/form-field-text.component.tsx";
import * as vr from "../../../settings/auth-validation.settings.ts";
import {FormFieldCheckbox} from "../../../components/forms/form-field-checkbox/form-field-checkbox.component.tsx";
import {RegularButton} from "../../../components/buttons/regular-button/regular-button.component.tsx";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

interface FormValues {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  ageAgreement: boolean;
}

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch
  } = useForm<FormValues>();

  // TODO: Implement registration logic
  const submitRegister = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submitRegister)}>
      <FormFieldText
        label="First Name"
        type="text"
        name="firstName"
        register={register}
        validation={
          {
            required: "First name is required.",
            minLength: {
              value: vr.FIRST_NAME_MIN_LENGTH,
              message: `First name must be between ${vr.FIRST_NAME_MIN_LENGTH} - ${vr.FIRST_NAME_MAX_LENGTH} characters long.`
            },
            maxLength: {
              value: vr.FIRST_NAME_MAX_LENGTH,
              message: `First name must be between ${vr.FIRST_NAME_MIN_LENGTH} - ${vr.FIRST_NAME_MAX_LENGTH} characters long.`
            }
          }}
        error={errors.firstName}
      />

      <FormFieldText
        label="Last Name"
        type="text"
        name="lastName"
        register={register}
        validation={
          {
            required: "Last name is required.",
            minLength: {
              value: vr.LAST_NAME_MIN_LENGTH,
              message: `Last name must be between ${vr.LAST_NAME_MIN_LENGTH} - ${vr.LAST_NAME_MAX_LENGTH} characters long.`
            },
            maxLength: {
              value: vr.LAST_NAME_MAX_LENGTH,
              message: `Last name must be between ${vr.LAST_NAME_MIN_LENGTH} - ${vr.LAST_NAME_MAX_LENGTH} characters long.`
            }
          }}
        error={errors.lastName}
      />

      <FormFieldText
        label="Username"
        type="text"
        name="username"
        register={register}
        validation={
          {
            required: "Username is required.",
            pattern: {
              value: vr.USERNAME_REGEX,
              message: `Username must be ${vr.MIN_USERNAME_LENGTH}-${vr.MAX_USERNAME_LENGTH} characters long, start with a letter, and can contain letters, numbers, and underscores only.`,
            }
          }}
        error={errors.username}
      />

      <FormFieldText
        label="Email"
        type="email"
        name="email"
        register={register}
        validation={
          {
            required: "Email is required.",
            pattern: {
              value: vr.EMAIL_REGEX,
              message: "Please enter a valid email address."
            }
          }}
        error={errors.email}
      />

      <FormFieldText
        label="Password"
        type="password"
        name="password"
        register={register}
        validation={
          {
            required: "Password is required.",
            pattern: {
              value: vr.PASSWORD_REGEX,
              message: "Password must be at least 8 characters long, contain at least one letter (both uppercase and lowercase), one number, and one special character."
            }
          }}
        error={errors.password}
      />

      <FormFieldCheckbox
        name="ageAgreement"
        text="You are over 18 year's old."
        register={register}
        watch={watch}
        validation={{required: true}}
        error={errors.ageAgreement}
      />

      <div className={styles.actions}>
        <RegularButton label="Register" type="submit"/>
        <Link className={styles.link} to="/login">Already have an account?</Link>
      </div>

    </form>
  );
};