import { FC, useState } from 'react';
import Image from 'next/image';
import Home from '/public/resources/icons/home.svg';
import Skills from '/public/resources/icons/skills.svg';
import Cv from '/public/resources/icons/cv.svg';
import Portfolio from '/public/resources/icons/portfolio.svg';
import Blog from '/public/resources/icons/Blog.svg';
import Message from '/public/resources/icons/message.svg';
import Burger from '/public/resources/icons/burger.svg';
import Logo from '/public/resources/logo.svg';
import styles from '../styles/comps/NavBar.module.scss';
import Link from 'next/link';

const SideNav: FC = () => {
  const [responsive, setResponsive] = useState('');

  return (
    <>
      <div className={`${styles.topNav}`}>
        <div className={styles.nav}>
          <Link href='/'>
            <div className={`${styles.logo} logo`}>
              <Image src={Logo} />
            </div>
          </Link>{' '}
          <div className={styles.responsiveController}>
            {responsive === 'hidden' ? (
              <div
                className={`${styles.burger} burger`}
                onClick={() => {
                  setResponsive('');
                }}
              >
                <Image src={Burger} />
              </div>
            ) : (
              <div
                className={styles.closeBtn}
                onClick={() => {
                  setResponsive('hidden');
                }}
              >
                X
              </div>
            )}
          </div>
        </div>
      </div>

      {/* SIDE BAR */}
      <div className={styles.sideNav}>
        <div>
          <div className={styles.navItems}>
            <Link href='/'>
              <div className={`${styles.navItem} ${styles.active}`}>
                <div className={`${styles.navIcon}`}>
                  <Image src={Home} />
                </div>
                <p>Home</p>
              </div>
            </Link>
            <Link href='/#about'>
              <div className={`${styles.navItem}`}>
                <div className={`${styles.navIcon}`}>
                  <Image src={Skills} />
                </div>
                <p>Skills</p>
              </div>
            </Link>
            <Link href='/#portfolio'>
              <div className={`${styles.navItem}`}>
                <div className={`${styles.navIcon}`}>
                  <Image src={Portfolio} />
                </div>
                <p>Portifolio</p>
              </div>
            </Link>
            <Link href='/#contacts'>
              <div className={`${styles.navItem}`}>
                <div className={`${styles.navIcon}`}>
                  <Image src={Message} />
                </div>
                <p>Contacts</p>
              </div>
            </Link>
            <Link href='/resume'>
              <div className={`${styles.navItem}`}>
                <div className={`${styles.navIcon}`}>
                  <Image src={Cv} />
                </div>
                <p>Resume</p>
              </div>
            </Link>
            <a href='https://devissa.com/' target='_blank'>
              <div className={`${styles.navItem}`}>
                <div className={`${styles.navIcon}`}>
                  <Image src={Blog} />
                </div>
                <p>Blog</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* MOBILE NAV */}
      <div className={`${styles.sideNavMob} ${responsive}`}>
        <div>
          <div className={styles.navItems}>
            <Link href='/'>
              <div
                className={`${styles.navItem} ${styles.active}`}
                onClick={() => {
                  setResponsive('hidden');
                }}
              >
                <div className={`${styles.navIcon}`}>
                  <Image src={Home} />
                </div>
                <p>Home</p>
              </div>
            </Link>

            <Link href='/#about'>
              <div
                className={`${styles.navItem}`}
                onClick={() => {
                  setResponsive('hidden');
                }}
              >
                <div className={`${styles.navIcon}`}>
                  <Image src={Skills} />
                </div>
                <p>Skills</p>
              </div>
            </Link>

            <Link href='/#portfolio'>
              <div
                className={`${styles.navItem}`}
                onClick={() => {
                  setResponsive('hidden');
                }}
              >
                <div className={`${styles.navIcon}`}>
                  <Image src={Portfolio} />
                </div>
                <p>Portifolio</p>
              </div>
            </Link>

            <Link href='/#contacts'>
              <div
                className={`${styles.navItem}`}
                onClick={() => {
                  setResponsive('hidden');
                }}
              >
                <div className={`${styles.navIcon}`}>
                  <Image src={Message} />
                </div>
                <p>Contacts</p>
              </div>
            </Link>

            <Link href='/resume'>
              <div
                className={`${styles.navItem}`}
                onClick={() => {
                  setResponsive('hidden');
                }}
              >
                <div className={`${styles.navIcon}`}>
                  <Image src={Cv} />
                </div>
                <p>Resume</p>
              </div>
            </Link>

            <a href='https://devissa.com/' target='_blank'>
              <div
                className={`${styles.navItem}`}
                onClick={() => {
                  setResponsive('hidden');
                }}
              >
                <div className={`${styles.navIcon}`}>
                  <Image src={Blog} />
                </div>
                <p>Blog</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
