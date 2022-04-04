import { FC } from 'react';
import styles from '../styles/comps/Separator.module.scss';

interface props {
  text: string;
}

const Separator: FC<props> = ({ text }) => {
  return (
    <div className={`${styles.separator}`}>
      <h1>{text}</h1>
    </div>
  );
};

export default Separator;
