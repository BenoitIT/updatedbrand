import { FC } from 'react';
import Github from '/public/resources/icons/socials/github.svg';
import IG from '/public/resources/icons/socials/ig.svg';
import TWITER from '/public/resources/icons/socials/twitter.svg';
import LINKEDIN from '/public/resources/icons/socials/linkedin.svg';
import Image from 'next/image';
import styles from '../styles/comps/socialMedias.module.scss';

const SocialMedias: FC = () => {
  return (
    <div className={`${styles.socialMedias}`}>
      <div className={styles.left}>
        <a href='https://www.linkedin.com/in/issansabimana/'>
          <Image src={LINKEDIN} />
        </a>
      </div>
      <div className={styles.left}>
        <a href='https://github.com/mansurissa'>
          <Image src={Github} />
        </a>
      </div>
      <div className={styles.left}>
        <a href='https://twitter.com/webdev_issa'>
          <Image src={TWITER} />
        </a>
      </div>
      {/* <div className={styles.left}>
        <a href=''>
          <Image src={IG} />
        </a>
      </div> */}
    </div>
  );
};

export default SocialMedias;
