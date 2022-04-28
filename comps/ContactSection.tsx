import { FC } from 'react';
import styles from '../styles/comps/contactSection.module.scss';
import SocialMedias from './SocialMedias';

const ContactSection: FC = () => {
  return (
    <div className={styles.contactSection}>
      <div className={styles.left}>
        <h1>LET US TALK!</h1>
        <p>
          If you want us talk about something. A project, consultancy, a job
          opportunity or want talents link me just let me know.
        </p>
        <SocialMedias />
      </div>
      <div className={styles.right}>
        <div>
          <button>Let's talk</button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
