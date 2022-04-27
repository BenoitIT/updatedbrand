import { FC } from 'react';
import styles from '../styles/comps/footer.module.scss';

const Footer: FC = () => {
  return (
    <div className={`${styles.footer}`}>
      <p>Made with full focus by Issa</p>
      <p>&copy; 2022 Issa NSABIMANA</p>
    </div>
  );
};

export default Footer;
