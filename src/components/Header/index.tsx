import Image from 'next/image';

import { SignOutButton } from '../SignOutButton';
import compassLogo from '../../assets/compassLogo.svg';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={compassLogo} alt="Compass logo" width={250}/>
        <SignOutButton />
      </div>
    </header>
  )
}