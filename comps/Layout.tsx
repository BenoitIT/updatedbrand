import { FC } from 'react';
import NavBar from './Navbar';
import SideNav from './SideNav';

const Layout: FC = ({ children }) => {
  return (
    <div>
      <NavBar />
      <SideNav />
      {children}
    </div>
  );
};

export default Layout;
