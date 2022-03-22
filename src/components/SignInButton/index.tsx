import { signIn } from 'next-auth/react';
import { AiOutlineGithub } from "react-icons/ai";
import { toast } from 'react-toastify';

import styles from "./styles.module.scss";

export function SignInButton() {
  return (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => {
        signIn("github", { callbackUrl: "/search" }).then(() => {
          localStorage.setItem("session", JSON.stringify(true))
        }).catch(() => {
          toast.error("Não foi possível realizar login!")
        })
      }}
    >
      <AiOutlineGithub />
      Entre com o Github
    </button>
  )
}