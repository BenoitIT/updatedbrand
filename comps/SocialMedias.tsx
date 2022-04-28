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
        <Image src={LINKEDIN} />
      </div>
      <div className={styles.left}>
        <Image src={TWITER} />
      </div>
      <div className={styles.left}>
        <Image src={IG} />
      </div>
      <div className={styles.left}>
        <Image src={Github} />
      </div>
    </div>
  );
};

export default SocialMedias;
