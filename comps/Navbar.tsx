import { FC } from 'react';
import Image from 'next/image';
import Burger from '/public/resources/icons/burger.svg';
import Logo from '/public/resources/logo.svg';
import styles from '../styles/comps/NavBar.module.scss';
import Link from 'next/link';

const NavBar: FC = () => {
  return (
    <div className={`${styles.topNav}`}>
      <div className={styles.nav}>
        <div className={`${styles.burger} burger`}>
          <Image src={Burger} />
        </div>
        <Link href='/'>
          <div className={`${styles.logo} logo`}>
            <Image src={Logo} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
