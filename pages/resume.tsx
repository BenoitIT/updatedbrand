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
            href='https://docs.google.com/document/d/1d9T4ZgURGXSYK7kd_X7cLPR73UNm_XxoiIv7Y7MkRcc/edit?usp=sharing'
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
              <h3>Codeland S.r.l (Milan , Italy)</h3>

              <div className={styles.role}>
                <h5>Frontend developer</h5>
                <small>02/2021 - Present</small>
                <p>
                  Worked on diffrent projects like iren, unicredit and martineri
                  gineto. Delivered pixel perfect UI components ready to be
                  intgrated with Adobe Experience manager as backend. Using
                  HTML, CSS, JS, JQuery, HTL
                </p>
              </div>
              <div className={styles.role}>
                <h5>AEM developer</h5>
                <small>12/2021 - 03/2022</small>
                <p>
                  Used Adobe experience manager to create different complex
                  components that adds to create websites and web applications.
                  Experienced servelts, XML, crone jobs, dialogs, wcmpojo and
                  mony more.
                </p>
              </div>
            </div>
            <div className={styles.resumeSec}>
              <div className={styles.resumeSeparator}>
                <ResumeSeparator />
              </div>
              <h3>Codity . rw (Kigali , Rwanda)</h3>
              <div className={styles.role}>
                <h5>Fullstack software engineer</h5>
                <small>01/2019 - 06/2022</small>
                <p>
                  Built and worked on more than 5 different client projects
                  including an eCommerce for a phone seller, a payment system,
                  and websites for individuals, and local and international
                  organizations.
                </p>
              </div>
            </div>
            <div className={styles.resumeSec}>
              <div className={styles.resumeSeparator}>
                <ResumeSeparator />
              </div>
              <h3>Andela (Kigali , Rwanda)</h3>
              <div className={styles.role}>
                <h5>Techinical team lead</h5>
                <small>06/2021 - 07/2022</small>
                <p>
                  Led and Worked with different teams with more than 10 members
                  learning web development using HTML, CSS, javascript, react,
                  and node js. Built a trainees management application.
                </p>
              </div>
              <div className={styles.role}>
                <h5>Software engineer</h5>
                <small>09/2020 - 06/2021</small>
                <p>
                  In a team of 7 people, we built a bus tracking application in
                  record time. The app allows users to get real time data of a
                  bus, seats status, location and many more and it saves time. I
                  worked on both frontend and backend features
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
                <small>04/2021 - Present</small>
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
              <h3>IPRC Kigali</h3>
              <div className={styles.role}></div>
              <h5>Technical secondary school</h5>
              <small>01/2017 - 11/2019</small>
              <p>
                Got skills in computer networking such as routing, switching,
                CCTV camera installations and maintenance, Computer maintenance,
                wireless networks installation and maintenance, server setup and
                configurations, remote site control and many more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
