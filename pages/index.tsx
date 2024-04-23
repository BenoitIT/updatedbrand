import type { NextPage } from 'next';
import Head from 'next/head';
import AboutSection from '../comps/AboutSection';
import ContactSection from '../comps/ContactSection';
import HomeSection from '../comps/HomeSection';
import PortfolioSection from '../comps/PortfolioSection';
import Separator from '../comps/separator';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Benoit NDAGIJIMANA</title>
        <meta
          name='Benoit NDAGIJIMANA portifolio website'
          content='Benoit NDAGIJIMANA'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='container'>
        <section id='home'>
          <Separator text='HOME' />
          <HomeSection />
        </section>
        <section id='about'>
          <Separator text='ABOUT ME' />
          <AboutSection />
        </section>
        <section id='portfolio'>
          <Separator text='MY WORKS' />
          <PortfolioSection />
        </section>
        <section id='contacts'>
          <Separator text='CONTACT ME' />
          <ContactSection />
        </section>
      </div>
    </>
  );
};

export default Home;
