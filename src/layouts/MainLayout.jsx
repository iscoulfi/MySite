import { Outlet } from 'react-router-dom';
import Menu from '../components/UI/Menu';

const MainLayout = ({ t }) => {
  return (
    <>
      <Menu t={t} />
      <Outlet />
    </>
  );
};

export default MainLayout;
