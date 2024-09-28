import styles from "./FormSuccessMessage.module.scss";
import {FC} from "react";

interface FormSuccessMessageProps {
  successMessage: string;
}

export const FormSuccessMessage: FC<FormSuccessMessageProps> = ({successMessage}) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{successMessage}</p>
    </div>
  );
};