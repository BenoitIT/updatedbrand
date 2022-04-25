import { FC } from 'react';
import styles from '../styles/comps/skill.module.scss';
import Image from 'next/image';
import DOWN from '/public/resources/icons/downIcon.svg';

interface props {
  skill: string;
}

const Skill: FC<props> = ({ skill }) => {
  return (
    <div className={`${styles.skill}`}>
      <div className={styles.label}>
        <Image src={DOWN} alt='down icon' />
      </div>
      <p>{skill}</p>
    </div>
  );
};

export default Skill;
