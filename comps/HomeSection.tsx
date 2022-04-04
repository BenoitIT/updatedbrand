import { FC } from 'react';
import Image from 'next/image';
import Burger from '/public/resources/icons/burger.svg';
import Logo from '/public/resources/logo.svg';
import styles from '../styles/comps/NavBar.module.scss';

const HomeSection: FC = () => {
  return (
    <div className={`${styles.homeSection}`}>
      <div>
        <p>Hi 👋, I am </p>
        <h2 className='name'>NSABIMANA Issa</h2>
        <p>
          A passion driven and problem solving oriented sofware engineer (FE
          heavy) With 3+ years of experience working on different clients apps.
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default HomeSection;
