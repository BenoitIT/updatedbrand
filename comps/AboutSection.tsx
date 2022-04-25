import { FC } from 'react';
import Skill from './Skill';
import Image from 'next/image';
import ArrowRight from '/public/resources/icons/arrowRight.svg';
import styles from '../styles/comps/AboutSection.module.scss';

const AboutSection: FC = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.desc}>
        Hello my name is <span>NSABIMANA Issa</span>, I love solving complex
        problems using my skills in programming. I have been in this industry
        since 2018 and have worked with different companies and clients. I love
        working in a team of people who love what they do and in my freetime I
        do travling as my number one hobby.
        <div className='keySkills'>
          <h2>
            Key skills{' '}
            <span>
              <Image src={ArrowRight} alt='down icon' />
            </span>
          </h2>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightContainer}>
          <div>
            <Skill skill='Javascript' />
            <Skill skill='React' />
            <Skill skill='Nodejs' />
            <Skill skill='Typescript' />
            <Skill skill='Java' />
            <Skill skill='AEM' />
          </div>
          <div>
            <Skill skill='HTML' />
            <Skill skill='CSS/Sass/SCSS' />
            <Skill skill='Figma/Adobe Xd' />
            <Skill skill='Tailwind/Material ui' />
            <Skill skill='Php/Laravel' />
            <Skill skill='Web3' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
