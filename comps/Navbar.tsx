import { FC } from 'react';
import Image from 'next/image';
import Burger from '/public/resources/icons/burger.svg';
import Logo from '/public/resources/logo.svg';
import styles from '../styles/comps/NavBar.module.scss';

const NavBar: FC = () => {
  return (
    <div className={`${styles.topNav}`}>
      <div className={styles.nav}>
        <div className={`${styles.burger} burger`}>
          <Image src={Burger} />
        </div>
        <div className={`${styles.logo} logo`}>
          <Image src={Logo} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
