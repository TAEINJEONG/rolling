import React from 'react';
import { Outlet } from 'react-router-dom';

// Header 컴포넌트 완료시 교체
const Layout = () => {
  return (
    <div>
      <header>헤더입니당</header>
      <main className="flex justify-center">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
