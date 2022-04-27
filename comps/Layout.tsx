import { FC } from 'react';
import Footer from './Footer';
import NavBar from './Navbar';
import SideNav from './SideNav';

const Layout: FC = ({ children }) => {
  return (
    <div>
      <NavBar />
      <SideNav />
      {children}
      <div className='container'>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
