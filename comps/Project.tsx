import { FC } from 'react';
import styles from '../styles/comps/project.module.scss';
import Image from 'next/image';
import Github from '/public/resources/icons/socials/github.svg';
import LinkIcon from '/public/resources/icons/socials/link.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper';

interface props {
  image: string;
  title: string;
  desc: string;
  stacks: Array<String>;
}
const Project: FC<props> = ({ image, title, desc, stacks }) => {
  return (
    <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]}>
      <SwiperSlide>
        <div className={styles.project}>
          <div className={styles.left}>
            <Image src={image} />
          </div>
          <div className={styles.right}>
            <div className={styles.header}>
              <h2>{title}</h2>
              <div className={styles.icons}>
                <div className='icon'>
                  <Image src={Github} />
                </div>
                <div className='icon'>
                  <Image src={LinkIcon} />
                </div>
              </div>
            </div>
            <p>{desc}</p>
            <div className={styles.stacksContainer}>
              {stacks.map((stack, i) => (
                <div key={i} className={styles.stack}>
                  {stack}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.project}>
          <div className={styles.left}>
            <Image src={image} />
          </div>
          <div className={styles.right}>
            <div className={styles.header}>
              <h2>{title}</h2>
              <div className={styles.icons}>
                <div className='icon'>
                  <Image src={Github} />
                </div>
                <div className='icon'>
                  <Image src={LinkIcon} />
                </div>
              </div>
            </div>
            <p>{desc}</p>
            <div className={styles.stacksContainer}>
              {stacks.map((stack, i) => (
                <div key={i} className={styles.stack}>
                  {stack}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.project}>
          <div className={styles.left}>
            <Image src={image} />
          </div>
          <div className={styles.right}>
            <div className={styles.header}>
              <h2>{title}</h2>
              <div className={styles.icons}>
                <div className='icon'>
                  <Image src={Github} />
                </div>
                <div className='icon'>
                  <Image src={LinkIcon} />
                </div>
              </div>
            </div>
            <p>{desc}</p>
            <div className={styles.stacksContainer}>
              {stacks.map((stack, i) => (
                <div key={i} className={styles.stack}>
                  {stack}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Project;
