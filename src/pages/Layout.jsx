import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/common/header';

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="flex justify-center max-xl:px-[24px] max-md:px-[20px]">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
