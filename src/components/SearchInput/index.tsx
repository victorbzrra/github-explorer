import { AiOutlineSearch } from "react-icons/ai";

import styles from './styles.module.scss';

export function SearchInput() {
  return (
    <div className={styles.searchInput}>
      <input
        type="text"
        placeholder="Busque por um usuário"
        className={styles.searchTextArea}
      />
      <button type="button" className={styles.searchButton}>
        Pesquisar
      </button>
    </div>
  );
}