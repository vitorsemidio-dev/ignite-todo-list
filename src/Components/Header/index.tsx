import styles from "./Header.module.css";
import logoImg from "../../assets/logo-ignite-todo-list.svg";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img
        className={styles.imgLogo}
        src={logoImg}
        alt="Foguete com texto 'todo'"
      />
    </header>
  );
}
