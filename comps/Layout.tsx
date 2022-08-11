import { FC } from 'react';
import Footer from './Footer';
import NavBar from './Navbar';

const Layout: FC = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <div className='container'>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
