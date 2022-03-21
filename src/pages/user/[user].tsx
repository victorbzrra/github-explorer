import Head from "next/head";
import { useRouter } from "next/router";
import { api } from "../../services/api";
import { GetServerSideProps } from "next";
import { Header } from "../../components/Header";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { ReposTable } from "../../components/ReposTable";
import { ProfileCard } from "../../components/ProfileCard";
import { ReposButton } from "../../components/ReposButton";
import { UserProps } from "../../interfaces/interfaces";

import styles from './styles.module.scss';
import { useState } from "react";

export default function UserPage({ user, publicRepos, starredRepos }: UserProps) {
  const router = useRouter();
  const { query } = useRouter();

  const [option, setOption] = useState(true);

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
          <ProfileCard user={user} />
          <ReposButton option={option} setOption={setOption} />
          <ReposTable option={option} publicRepos={publicRepos} starredRepos={starredRepos}/>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user } = context.params;
  const { data: userData } = await api.get(`${user}`);
  const { data: publicRepos } = await api.get(`${user}/repos`);
  const { data: starredRepos } = await api.get(`${user}/starred`);


  return {
    props: {
      user: userData,
      publicRepos: publicRepos,
      starredRepos: starredRepos
    }
  }
}