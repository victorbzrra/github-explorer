import Image from 'next/image';
import styles from './styles.module.scss';


export function ProfileCard() {
  return (
    <header className={styles.profileContainer}>
      <Image
        width={150}
        height={150}
        className={styles.profileImage}
        src="https://avatars.githubusercontent.com/u/56418569?v=4"
      />
      <div className={styles.profileContent}>
        <a href="#" target="_blank" rel="noreferrer">
          <h1>Victor Bezerra</h1>
        </a>
        <p>
          Computer Science Student @ UFC - Brazil; Front-end Develop - Fortaleza
          - Ceará.
        </p>
        <section className={styles.profileSocial}>
          <p>
            <strong>7</strong> Repositórios
          </p>
          <p>
            <strong>25</strong> Seguidores
          </p>
          <p>
            <strong>29</strong> Seguindo
          </p>
        </section>
      </div>
    </header>
  );
}