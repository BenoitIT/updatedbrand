import type { NextPage } from 'next';
import Head from 'next/head';
import AboutSection from '../comps/AboutSection';
import HomeSection from '../comps/HomeSection';
import NavBar from '../comps/Navbar';
import PortfolioSection from '../comps/PortfolioSection';
import Separator from '../comps/separator';
import SideNav from '../comps/SideNav';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Issa NSABIMANA</title>
        <meta
          name='NSABIMANA Issa portifolio website'
          content='Issa NSABIMANA'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <SideNav />
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
      </div>
    </>
  );
};

export default Home;
