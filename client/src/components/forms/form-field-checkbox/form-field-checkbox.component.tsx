import "./form-field-checkbox.styles.scss";
import {FC} from "react";
import checkmarkIcon from "../../../assets/icons/check.svg";
import {FieldError, RegisterOptions, UseFormRegister, UseFormWatch} from "react-hook-form";

interface FormFieldCheckboxProps {
  name: string;
  text: string;
  register: UseFormRegister<any>;
  validation?: RegisterOptions;
  watch: UseFormWatch<any>;
  error?: FieldError;
}

export const FormFieldCheckbox: FC<FormFieldCheckboxProps> = ({name, text, register, validation, watch, error}) => {
  const isChecked = watch(name);

  return (
    <div className="form-field-checkbox">
      <label className="form-field-checkbox__wrapper" htmlFor={name}>
        <input
          id={name}
          className="form-field-checkbox__input"
          type="checkbox"
          {...register(name, validation)}
        />
        <span className={`checkmark ${isChecked ? "checkmark--checked" : ""} ${error ? "checkmark--focus" : ""}`}>
          {isChecked && <img src={checkmarkIcon} alt="Checked"/>}
        </span>
      </label>
      <p className="form-field-checkbox__text">{text}</p>
    </div>
  );
};
