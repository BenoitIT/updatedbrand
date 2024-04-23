import { FC } from 'react';
import Image from 'next/image';
import PIC from '/public/resources/images/Benn.png';
import DOWN from '/public/resources/icons/downIcon.svg';
import styles from '../styles/comps/HomeSection.module.scss';
import Link from 'next/link';

const HomeSection: FC = () => {
  return (
    <div>
      <div className={`${styles.homeSection}`}>
        <div>
          <p>Hi 👋, I am </p>
          <h2 className='name'>Benoit NDAGIJIMANA</h2>
          <p>
            A passion driven and problem solving oriented sofware engineer (FE
            heavy) With 3+ years of experience working on different clients
            apps.
          </p>
          <Link href='/resume'>
            <button>Resume</button>
          </Link>
        </div>
        <div className={`${styles.imageContainer}`}>
          <div className={`${styles.image}`}>
            <Image src={PIC} alt='Benn Dev' />
          </div>
        </div>
      </div>
      <Link href='/#contacts'>
        <div className={`${styles.downIcon}`}>
          <Image src={DOWN} alt='down icon' />
        </div>
      </Link>
    </div>
  );
};

export default HomeSection;
