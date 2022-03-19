import Head from 'next/head';
import Image from 'next/image';

import compassLogo from '../assets/compassLogo.svg'; 
import profileAnalysis from '../assets/profileAnalysis.svg';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Github Explorer</title>
      </Head>

      <main className={styles.container}>
        <Image src={compassLogo} alt="Compass logo" width={300} />

        <div className={styles.content}>
          <section className={styles.section}>
            <h1>
              Olá Recruiter, conecte-se para buscar por usuários do{" "}
              <span>Github</span>!
            </h1>

            <button>Entre com o Github</button>
          </section>

          <Image src={profileAnalysis} alt="Análise de perfil de candidato" />
        </div>
      </main>
    </>
  );
}
