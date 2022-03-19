import { AiOutlineClose, AiOutlineGithub } from "react-icons/ai";

import styles from "./styles.module.scss";

export function SignOutButton() {
  return (
    <button
      type="button"
      className={styles.signOutButton}
    >
      <AiOutlineGithub />
      Victor Bezerra
      <AiOutlineClose />
    </button>
  )
}