import { FC } from 'react';
import styles from '../styles/comps/footer.module.scss';

const Footer: FC = () => {
  return (
    <div className={`${styles.footer}`}>
      <p>
        Made with full focus by
      </p>
      <p>&copy; 2022 Benoit NDAGIJIMANA</p>
    </div>
  );
};

export default Footer;
