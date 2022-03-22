import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Header } from "../../components/Header";
import { SearchInput } from "../../components/SearchInput";

import profileSearch from "../../assets/profileSearch.svg";

import styles from './styles.module.scss';
import { toast } from "react-toastify";

export default function SearchPage() {
  const router = useRouter(); 

  useEffect(() => {
    if(!JSON.parse(localStorage.getItem('session'))){
      router.push("/");
      toast.warning("Faça login com o github!")
    }
  }, [])

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