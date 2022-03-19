import Head from "next/head";
import { Header } from "../../components/Header";
import { ProfileCard } from "../../components/ProfileCard";
import { SearchInput } from "../../components/SearchInput";

import styles from './styles.module.scss';

export default function SearchPage() {
  return (
    <>
      <Head>
        <title>Explorer User</title>
      </Head>
      <main>
        <Header />
        <div className={styles.searchContent}>
          <SearchInput />
          <ProfileCard />
        </div>
      </main>
    </>
  ) 
}