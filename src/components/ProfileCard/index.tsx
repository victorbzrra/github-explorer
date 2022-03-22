import Image from 'next/image';
import { UserDataProps } from './interface';

import styles from './styles.module.scss';

export function ProfileCard({ user }: UserDataProps) {
  return (
    <header className={styles.profileContainer}>
      <Image
        width={150}
        height={150}
        className={styles.profileImage}
        src={user.avatar_url}
        alt="Foto de perfil do usuário"
      />
      <div className={styles.profileContent}>
        <a href={user.html_url} target="_blank" rel="noreferrer">
          <h1>{user.name}</h1>
        </a>
        <p>{user.bio}</p>
        <section className={styles.profileSocial}>
          <p>
            <strong>{user.public_repos}</strong> Repositórios
          </p>
          <p>
            <strong>{user.followers}</strong> Seguidores
          </p>
          <p>
            <strong>{user.following}</strong> Seguindo
          </p>
        </section>
      </div>
    </header>
  );
}