import { FC } from 'react';
import styles from '../styles/comps/portfolio.module.scss';
import Afrinet from '/public/resources/images/afrinet.svg';
import Project from './Project';

const PortfolioSection: FC = () => {
  const afrinet = {
    image: Afrinet,
    name: 'AFRINET',
    desc: 'Afrinet is a project for a consultant company in rwanda in Rwanda that provides network and computer maintenance, web development and design services. I build for them a website and a dashboard to handle clients requests, employees management and other company daily transactions',
    stacks: ['HTML', 'CSS', 'Nodejs', 'Postgres', 'Netlify'],
    link: 'https://afrinet.netlify.app/',
    github: ''
  };
  const smartBrain = {
    image: Afrinet,
    name: 'Smart Brain',
    desc: 'Smart brain is a web application that takes image, detect face and locate it, it also keeps history for the users',
    stacks: ['React', 'CSS', 'Nodejs', 'Postgres', 'Heroku'],
    link: 'https://mansurissa.github.io/smart-brain/',
    github: 'https://github.com/mansurissa/smart-brain'
  };
  const kokoMarket = {
    image: Afrinet,
    name: 'Koko market',
    desc: 'Koko market is an online shop that allows users and sellers to buy and sell their products easily',
    stacks: ['React', 'Tailwind', 'Nodejs', 'Postgres', 'Heroku'],
    link: 'https://kigaliphone.com/',
    github: ''
  };

  return (
    <div className={styles.portfolio}>
      <Project projects={[afrinet, smartBrain, kokoMarket]} />
    </div>
  );
};

export default PortfolioSection;
