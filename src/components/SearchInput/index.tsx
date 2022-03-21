import { useRouter } from 'next/router';
import styles from './styles.module.scss';

export function SearchInput() {
  const router = useRouter();

  async function searchUser(event) {
    event.preventDefault();
    router.push(`/user/${event.target.searchInput.value}`);
  }

  return (
    <div className={styles.searchInput}>
      <form onSubmit={searchUser}>
        <input
          type="text"
          id="searchInput"
          placeholder="Busque por um usuário"
          className={styles.searchTextArea}
        />
        <button type="submit" className={styles.searchButton}>
          Pesquisar
        </button>
      </form>
    </div>
  );
}