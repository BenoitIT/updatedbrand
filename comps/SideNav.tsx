import { FC } from 'react';
import Image from 'next/image';
import Home from '/public/resources/icons/home.svg';
import Skills from '/public/resources/icons/skills.svg';
import Cv from '/public/resources/icons/cv.svg';
import Portfolio from '/public/resources/icons/portfolio.svg';
import Blog from '/public/resources/icons/Blog.svg';
import Message from '/public/resources/icons/message.svg';
import styles from '../styles/comps/SideNav.module.scss';

const SideNav: FC = () => {
  return (
    <div className={styles.sideNav}>
      <div>
        <div className={styles.navItems}>
          <div className={`${styles.navItem} ${styles.active}`}>
            <div className={`${styles.navIcon}`}>
              <Image src={Home} />
            </div>
            <p>Home</p>
          </div>
          <div className={`${styles.navItem}`}>
            <div className={`${styles.navIcon}`}>
              <Image src={Skills} />
            </div>
            <p>Skills</p>
          </div>
          <div className={`${styles.navItem}`}>
            <div className={`${styles.navIcon}`}>
              <Image src={Cv} />
            </div>
            <p>CV</p>
          </div>
          <div className={`${styles.navItem}`}>
            <div className={`${styles.navIcon}`}>
              <Image src={Portfolio} />
            </div>
            <p>Portifolio</p>
          </div>
          <div className={`${styles.navItem}`}>
            <div className={`${styles.navIcon}`}>
              <Image src={Blog} />
            </div>
            <p>Blog</p>
          </div>
          <div className={`${styles.navItem}`}>
            <div className={`${styles.navIcon}`}>
              <Image src={Message} />
            </div>
            <p>Contacts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
