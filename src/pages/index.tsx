import Head from 'next/head';
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Github Explorer</title>
      </Head>
      
      <h1 className={styles.title}>
        Github Explorer
      </h1>
    </>
  );
}
