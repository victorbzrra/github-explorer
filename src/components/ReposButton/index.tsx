import { useState } from 'react';
import styles from './styles.module.scss';

export function ReposButton() {
  const [option, setOption] = useState(true);

  function handleOption(option: boolean) {
    setOption(option);
  }

  return (
    <div className={styles.buttonsContainer}>
      <button
        className={option ? styles.buttonActive : styles.buttonInactive}
        onClick={() => handleOption(true)}
      >
        Repositórios do usuário
      </button>
      <button
        className={!option ? styles.buttonActive : styles.buttonInactive}
        onClick={() => handleOption(false)}
      >
        Repositórios marcados
      </button>
    </div>
  );
}