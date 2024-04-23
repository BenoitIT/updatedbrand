import type { NextPage } from 'next';
import ResumeSeparator from '../comps/resumeSeparator';
import Separator from '../comps/separator';
import styles from './../styles/pages/Resume.module.scss';

const Resume: NextPage = () => {
  return (
    <>
      <section className='container'>
        <Separator text='Resume' />
        <div className={styles.resumeBtn}>
          <h2>Click Get resume button to get my full CV</h2>
          <a
            href='https://docs.google.com/document/d/1ueUn_dOeEWzaLszZlQY_SJEnDcsDajFLSfF0Oifebbw'
            target='_blank'
            rel='noreferrer'
          >
            Get resume
          </a>
        </div>
        <div className={styles.resumePage}>
          <h2>Profesional Experience</h2>
          {/* Onecategory */}
          <div className={styles.resumeSecContainer}>
            {/* One company */}
            <div className={styles.resumeSec}>
              <div className={styles.resumeSeparator}>
                <ResumeSeparator />
              </div>
              <h3>Karisimbi Technology solutions</h3>

              <div className={styles.role}>
                <h5>Frontend developer</h5>
                <small>06/2023 - 2024</small>
                <p>
                  Worked on xanahealth project. Delivered perfect UI components ready to be
                  integrated with real time records from backend. Using
                  Next JS
                </p>
              </div>

            </div>

            <div className={styles.resumeSec}>
              <div className={styles.resumeSeparator}>
                <ResumeSeparator />
              </div>
              <h3>Andela (Kigali , Rwanda)</h3>
              <div className={styles.role}>
                <h5>Apprenticeship</h5>
                <small>06/2021 - 07/2022</small>
                <p>
                  Worked with different teams with more than 10 members
                  learning web development using HTML, CSS, javascript, react,
                  and node js. Built an ecommerce web application.
                </p>
              </div>
            </div>
          </div>

          <h2>Education</h2>
          {/* Onecategory */}
          <div className={styles.resumeSecContainer}>
            {/* One company */}
            <div className={styles.resumeSec}>
              <div className={styles.resumeSeparator}>
                <ResumeSeparator />
              </div>
              <h3>Univeristy of Rwanda</h3>

              <div className={styles.role}>
                <h5>
                  Bachelor of Science in Business and Information Technology
                </h5>
                <small>2020 - 2023</small>
                <p>
                  In business information technology I got skills in accounting,
                  economics, web technologies, java, ecomerce, business
                  management and functions etc..
                </p>
              </div>
            </div>
            <div className={styles.resumeSec}>
              <div className={styles.resumeSeparator}>
                <ResumeSeparator />
              </div>
              <h3>TSS B.T.R</h3>
              <div className={styles.role}></div>
              <h5>Technical secondary school</h5>
              <small>01/2016 - 11/2018</small>
              <p>
                Got skills in software development such as programming in PHP, HTML,
                Basics of CSS, Algolithm and data structure and system analysis,
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
