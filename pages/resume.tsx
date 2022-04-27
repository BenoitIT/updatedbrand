import type { NextPage } from 'next';
import ResumeSeparator from '../comps/resumeSeparator';
import Separator from '../comps/separator';
import styles from './../styles/pages/Resume.module.scss';

const Resume: NextPage = () => {
  return (
    <>
      <section className='container'>
        <Separator text='Resume' />
        <div className={styles.resumePage}>
          <h2>Profesional Experience</h2>
          {/* Onecategory */}
          <div className={styles.resumeSecContainer}>
            {/* One company */}
            <div className={styles.resumeSec}>
              <div className={styles.resumeSeparator}>
                <ResumeSeparator />
              </div>
              <h3>Codeland S.r.l</h3>

              <div className={styles.role}>
                <h5>Frontend developer</h5>
                <small>12/2021 - Present</small>
                <p>
                  Worked on diffrent projects, delivered pixel perfect UI
                  components readt to be intgrated with Adobe Experience manager
                  as backend. Using HTML, CSS, JS, JQuery, HTL
                </p>
              </div>
              <div className={styles.role}>
                <h5>Frontend developer</h5>
                <small>12/2021 - Present</small>
                <p>
                  Worked on diffrent projects, delivered pixel perfect UI
                  components readt to be intgrated with Adobe Experience manager
                  as backend. Using HTML, CSS, JS, JQuery, HTL
                </p>
              </div>
            </div>
            <div className={styles.resumeSec}>
              <div className={styles.resumeSeparator}>
                <ResumeSeparator />
              </div>
              <h3>Codeland S.r.l</h3>
              <div className={styles.role}></div>
              <h5>Frontend developer</h5>
              <small>12/2021 - Present</small>
              <p>
                Worked on diffrent projects, delivered pixel perfect UI
                components readt to be intgrated with Adobe Experience manager
                as backend. Using HTML, CSS, JS, JQuery, HTL
              </p>
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
              <h3>Codeland S.r.l</h3>

              <div className={styles.role}>
                <h5>Frontend developer</h5>
                <small>12/2021 - Present</small>
                <p>
                  Worked on diffrent projects, delivered pixel perfect UI
                  components readt to be intgrated with Adobe Experience manager
                  as backend. Using HTML, CSS, JS, JQuery, HTL
                </p>
              </div>
              <div className={styles.role}>
                <h5>Frontend developer</h5>
                <small>12/2021 - Present</small>
                <p>
                  Worked on diffrent projects, delivered pixel perfect UI
                  components readt to be intgrated with Adobe Experience manager
                  as backend. Using HTML, CSS, JS, JQuery, HTL
                </p>
              </div>
            </div>
            <div className={styles.resumeSec}>
              <div className={styles.resumeSeparator}>
                <ResumeSeparator />
              </div>
              <h3>Codeland S.r.l</h3>
              <div className={styles.role}></div>
              <h5>Frontend developer</h5>
              <small>12/2021 - Present</small>
              <p>
                Worked on diffrent projects, delivered pixel perfect UI
                components readt to be intgrated with Adobe Experience manager
                as backend. Using HTML, CSS, JS, JQuery, HTL
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
