import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { api } from '../../services/api';

import styles from './styles.module.scss';

export function SearchInput() {
  const router = useRouter();

  async function searchUser(event) {
    event.preventDefault();
    const userName = event.target.searchInput.value;

    if(userName !== "") {
      checkUser(userName);
    } else {
      toast.warning("Insira um nome de usuário!")
    }
  }

  async function checkUser(userName: string) {
    try {
      const { data: userData } = await api.get(`${userName}`);

      if(userData) {
        router.push(`/user/${userName}`);
      }

    } catch {
      toast.error("Usuário não encontrado!");
    }
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