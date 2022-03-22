import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { signIn } from "next-auth/react";
import { Header } from "../../components/Header";
import { SearchInput } from "../../components/SearchInput";

import profileSearch from "../../assets/profileSearch.svg";

import styles from './styles.module.scss';

export default function SearchPage() {
  useEffect(() => {
    signIn("github", {callbackUrl: "/search"})
  })

  return (
    <>
      <Head>
        <title>Search User</title>
      </Head>
      <Header />
      <main className={styles.mainContainer}>
        <div className={styles.searchContainer}>
          <h1>Recrute um talento para sua empresa!</h1>
          <SearchInput />
        </div>
        <Image
          src={profileSearch}
          alt="Perfis de talentos"
          width={250}
          height={250}
        />
      </main>
    </>
  ); 
}