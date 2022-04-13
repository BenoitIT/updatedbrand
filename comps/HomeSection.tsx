import { FC } from 'react';
import Image from 'next/image';
import PIC from '/public/resources/images/pic.png';
import DOWN from '/public/resources/icons/downIcon.svg';
import styles from '../styles/comps/HomeSection.module.scss';

const HomeSection: FC = () => {
  return (
    <div>
      <div className={`${styles.homeSection}`}>
        <div>
          <p>Hi 👋, I am </p>
          <h2 className='name'>NSABIMANA Issa</h2>
          <p>
            A passion driven and problem solving oriented sofware engineer (FE
            heavy) With 3+ years of experience working on different clients
            apps.
          </p>
          <button>Resume</button>
        </div>
        <div className={`${styles.imageContainer}`}>
          <div className={`${styles.image}`}>
            <Image src={PIC} alt='issa' />
          </div>
        </div>
      </div>
      <div className={`${styles.downIcon}`}>
        <Image src={DOWN} alt='issa' />
      </div>
    </div>
  );
};

export default HomeSection;
