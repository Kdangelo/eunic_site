import './MainLayout.scss';
import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <main className="layout-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
