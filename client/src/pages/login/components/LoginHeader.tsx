import styles from "./LoginHeader.module.scss";
import logo from "../../../assets/logo/logo-no-background.svg";

export const LoginHeader = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="Logo"/>
      <h2 className={styles.title}>Welcome back!</h2>
      <p className={styles.subtitle}>We're excited to see you again!</p>
    </header>
  );
};