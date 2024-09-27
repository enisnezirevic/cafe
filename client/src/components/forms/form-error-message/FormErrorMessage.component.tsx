import styles from "./FormErrorMessage.module.scss";
import {FC} from "react";

interface FormErrorMessageProps {
  errorMessage: string;
}

export const FormErrorMessage: FC<FormErrorMessageProps> = ({errorMessage}) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{errorMessage}</p>
    </div>
  );
};