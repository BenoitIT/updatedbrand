import { FC } from 'react';
import styles from '../styles/comps/portfolio.module.scss';
import Project from './Project';

const PortfolioSection: FC = () => {
  const afrinet = {
    image: "/resources/images/urpic.jpg",
    name: 'UR Huye Campus website',
    desc: 'UR Huye Campus website is for Huye campus which is a multi-college campus. It is hosting students from 3 colleges: College of arts and social sciences(CASS), college of Business and Economics (CBE) and College of Medicine and Health sciences(CHMS). Administration of CASS and CBE are based here while administration of CHMS is based in Remera Campus.',
    stacks: ['HTML', 'CSS', 'Nodejs', 'Postgres', 'Next js'],
    link: 'https://ur-huye-web.vercel.app/',
    github: ''
  };

  const smartBrain = {
    image: '/resources/images/timeline.png',
    name: 'Timeline Travels and Tours',
    desc: 'Timeline Travels and Tours is a web application that helps the travelers to search for the tours and place their booking orders on real time',
    stacks: ['laravel', 'CSS', 'Vue js', 'mysql'],
    link: 'https://www.timelinetraveltour.com/',
    github: ''
  };

  const kigaliPhones = {
    image: '/resources/images/xana.png',
    name: 'Xana health',
    desc: 'Xana health is platform that monitor patient information and patient treatment process accross health facility',
    stacks: ['HTML', 'Tailwind css', 'Ruby', 'MySQL','Next js'],
    link: 'https://xanahealth.online/',
    github: ''
  };

  return (
    <div className={styles.portfolio}>
      <Project projects={[afrinet, smartBrain, kigaliPhones]} />
    </div>
  );
};

export default PortfolioSection;
