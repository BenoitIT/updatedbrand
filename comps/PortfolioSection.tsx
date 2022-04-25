import { FC } from 'react';
import styles from '../styles/comps/portfolio.module.scss';
import Afrinet from '/public/resources/images/afrinet.svg';
import Project from './Project';

const PortfolioSection: FC = () => {
  const afrinetStacks = ['HTML', 'CSS', 'Nodejs', 'Postgres', 'Heroku'];
  const smartBrainStacks = ['React', 'CSS', 'Nodejs', 'Postgres', 'Heroku'];
  return (
    <div className={styles.portfolio}>
      <Project
        image={Afrinet}
        title='AFRINET'
        desc='Afrinet is a project for a consultant company in rwanda in Rwanda that
          provides network and computer maintenance, web development and design
          services. I build for them a website and a dashboard to handle clients
          requests, employees management and other company daily transactions'
        stacks={afrinetStacks}
      />
      <Project
        image={Afrinet}
        title='SMART BRAIN'
        desc='Afrinet is a project for a consultant company in rwanda in Rwanda that
          provides network and computer maintenance, web development and design
          services. I build for them a website and a dashboard to handle clients
          requests, employees management and other company daily transactions'
        stacks={smartBrainStacks}
      />
    </div>
  );
};

export default PortfolioSection;
