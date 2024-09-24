import styles from "./auth.page.module.scss";
import logo from "../../assets/logo/logo-no-background.svg";
import {FC, ReactNode} from "react";

interface AuthPageTemplateProps {
  children: ReactNode;
}

export const AuthPageTemplate: FC<AuthPageTemplateProps> = ({children}) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.logo} src={logo} alt="logo"/>

      <div className={styles.content}>
        {children}
      </div>

    </div>
  );
};