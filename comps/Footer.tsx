import { FC } from 'react';
import styles from '../styles/comps/footer.module.scss';

const Footer: FC = () => {
  return (
    <div className={`${styles.footer}`}>
      <p>
        Made with full focus and 💚 by
        <b>
          <a href='https://github.com/mansurissa'> Issa</a>
        </b>
      </p>
      <p>&copy; 2022 Issa NSABIMANA</p>
    </div>
  );
};

export default Footer;
