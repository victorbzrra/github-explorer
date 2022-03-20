import { useState } from 'react';
import { AiOutlineUser, AiTwotoneStar } from 'react-icons/ai';
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
        <AiOutlineUser />
        Repositórios do usuário
      </button>
      <button
        className={!option ? styles.buttonActive : styles.buttonInactive}
        onClick={() => handleOption(false)}
      >
        <AiTwotoneStar />
        Repositórios marcados
      </button>
    </div>
  );
}