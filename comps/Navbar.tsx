import { FC, useState } from 'react';
import Image from 'next/image';
import Home from '/public/resources/icons/home.svg';
import Skills from '/public/resources/icons/skills.svg';
import Cv from '/public/resources/icons/cv.svg';
import Portfolio from '/public/resources/icons/portfolio.svg';
import Blog from '/public/resources/icons/blog.svg';
import Message from '/public/resources/icons/message.svg';
import Burger from '/public/resources/icons/burger.svg';
import Logo from '/public/resources/logo.svg';
import styles from '../styles/comps/NavBar.module.scss';
import Link from 'next/link';
import LINKEDIN from '/public/resources/icons/socials/linkedin.svg';

const NavBar: FC = () => {
  const [responsive, setResponsive] = useState('hidden');

  const [activeTab, setActiveTab] = useState('home');

  return (
    <>
      <div className={`${styles.topNav} `}>
        <div className={styles.nav}>
          <Link href='/'>
            <div className={`${styles.logo} logo`}>
            </div>
          </Link>
          <div className={`${styles.burgerDk}`}>
            <Link href='https://www.linkedin.com/in/benoit-ndagijimana-4aa202240/'>
              <Image src={LINKEDIN} />
            </Link>
          </div>
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
              <div
                className={`${styles.navItem} ${
                  activeTab === 'home' ? styles.active : ''
                }`}
                onClick={() => {
                  setResponsive('hidden');
                  setActiveTab('home');
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
                className={`${styles.navItem} ${
                  activeTab === 'about' ? styles.active : ''
                }`}
                onClick={() => {
                  setResponsive('hidden');
                  setActiveTab('about');
                }}
              >
                <div className={`${styles.navIcon}`}>
                  <Image src={Skills} />
                </div>
                <p>About</p>
              </div>
            </Link>
            <Link href='/#portfolio'>
              <div
                className={`${styles.navItem} ${
                  activeTab === 'portfolio' ? styles.active : ''
                }`}
                onClick={() => {
                  setResponsive('hidden');
                  setActiveTab('portfolio');
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
                className={`${styles.navItem} ${
                  activeTab === 'message' ? styles.active : ''
                }`}
                onClick={() => {
                  setResponsive('hidden');
                  setActiveTab('message');
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
                className={`${styles.navItem} ${
                  activeTab === 'cv' ? styles.active : ''
                }`}
                onClick={() => {
                  setResponsive('hidden');
                  setActiveTab('cv');
                }}
              >
                <div className={`${styles.navIcon}`}>
                  <Image src={Cv} />
                </div>
                <p>Resume</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* MOBILE NAV */}
      <div className={`${styles.sideNavMob} ${responsive}`}>
        <div>
          <div className={styles.navItems}>
            <Link href='/'>
              <div
                className={`${styles.navItem}`}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
