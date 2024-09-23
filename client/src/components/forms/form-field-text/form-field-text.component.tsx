import {FieldError, RegisterOptions, UseFormRegister} from "react-hook-form";
import {FC} from "react";
import "./form-field-text.styles.scss";

interface FormFieldTextProps {
  label: string;
  type: "email" | "password" | "text";
  name: string;
  register: UseFormRegister<any>;
  validation?: RegisterOptions;
  error?: FieldError;
}


export const FormFieldText: FC<FormFieldTextProps> = (
  {
    label,
    type,
    name,
    register,
    validation,
    error,
  }) => {
  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={name}>
        {label}
      </label>
      <input
        className={`form-field__input ${error ? "form-field__input--has-error" : ""}`}
        type={type}
        id={name}
        {...register(name, validation)}
      />
      {error && <span className="form-field__error-message">{error.message}</span>}
    </div>

  );
};