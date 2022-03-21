import { signOut, useSession } from "next-auth/react";
import { AiOutlineClose, AiOutlineGithub } from "react-icons/ai";

import styles from "./styles.module.scss";

export function SignOutButton() {
  const { data: session } = useSession();
  
  return (
    <button
      type="button"
      className={styles.signOutButton}
      onClick={() => {
        signOut({callbackUrl: "/"});
      }}
    >
      <AiOutlineGithub />
      {session?.user?.name}
      <AiOutlineClose />
    </button>
  )
}