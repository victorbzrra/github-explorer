import { AiOutlineGithub } from "react-icons/ai";

import styles from "./styles.module.scss";

export function SignInButton() {
  return (
    <button
      type="button"
      className={styles.signInButton}
    >
      <AiOutlineGithub />
      Entre com o Github
    </button>
  )
}