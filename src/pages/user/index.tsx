import Head from "next/head";
import { Header } from "../../components/Header";
import { ReposTable } from "../../components/ReposTable";
import { ProfileCard } from "../../components/ProfileCard";
import { ReposButton } from "../../components/ReposButton";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router";

import styles from './styles.module.scss';

export default function UserPage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Explorer User</title>
      </Head>
      <main>
        <Header />
        <div className={styles.userContainer}>
          <button 
            type="button"
            className={styles.buttonContent}
            onClick={router.back}
          >
            <AiOutlineArrowLeft /> Voltar
          </button>
          <ProfileCard />
          <ReposButton />
          <ReposTable />
        </div>
      </main>
    </>
  );
}