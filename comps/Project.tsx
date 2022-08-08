/* eslint-disable jsx-a11y/alt-text */
import { FC } from 'react';
import styles from '../styles/comps/project.module.scss';
import Image from 'next/image';
import Github from '/public/resources/icons/socials/github.svg';
import LinkIcon from '/public/resources/icons/socials/link.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper';
import Link from 'next/link';

interface props {
  projects: Array<Object>;
}
const Project: FC<props> = ({ projects }) => {
  return (
    <Swiper
      pagination={{
        type: 'progressbar'
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className='mySwiper'
    >
      {projects.map((project) => {
        return (
          <div key={project.name}>
            <SwiperSlide>
              <div className={styles.project}>
                <div className={styles.left}>
                  <Image src={project.image} />
                </div>
                <div className={styles.right}>
                  <div className={styles.header}>
                    <h2>{project.name}</h2>
                    <div className={styles.icons}>
                      {project.github && (
                        <div className='icon'>
                          <a href={project.github}>
                            <Image src={Github} />
                          </a>
                        </div>
                      )}
                      <div className='icon'>
                        <a href={project.link}>
                          <Image src={LinkIcon} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <p>{project.desc}</p>
                  <div className={styles.stacksContainer}>
                    {project.stacks.map((stack, i) => (
                      <div key={i} className={styles.stack}>
                        {stack}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        );
      })}
    </Swiper>
  );
};

export default Project;
