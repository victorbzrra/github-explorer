import { AiOutlineSearch } from "react-icons/ai";

import styles from './styles.module.scss';

export function SearchInput() {
  return (
    <div className={styles.searchInput}>
      <input type="text" className={styles.searchTextArea}/>
      <button type="button" className={styles.searchButton}>
        {<AiOutlineSearch />}
      </button>
    </div>
  )
}