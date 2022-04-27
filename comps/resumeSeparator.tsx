import { FC } from 'react';
import styles from '../styles/comps/resumeSeparator.module.scss';

const ResumeSeparator: FC = () => {
  return (
    <div className={`${styles.resumeSeparator}`}>
      <div className={styles.circle}></div>
    </div>
  );
};

export default ResumeSeparator;
