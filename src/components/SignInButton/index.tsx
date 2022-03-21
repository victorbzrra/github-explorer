import { signIn } from 'next-auth/react';
import { AiOutlineGithub } from "react-icons/ai";

import styles from "./styles.module.scss";

export function SignInButton() {
  return (
    <button
      type="button"
      className={styles.signInButton}
      onClick={async () => {
        signIn("github", {callbackUrl: "/search"})
      }}
    >
      <AiOutlineGithub />
      Entre com o Github
    </button>
  )
}