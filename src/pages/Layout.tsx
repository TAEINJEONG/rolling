import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Card2 from './Card2';
import HeaderService from './HeaderService';

const Layout = () => {
  return (
    <div className="bg-beige-200 h-full">
      <div className="m-auto h-full">
        <div>
          <header className="bg-green-100">
            <nav>
              <Link to="/colors">컬러 팔레트</Link>
              <Link to="/typography">타이포그래피</Link>
            </nav>
          </header>
          <main className="bg-beige-200 h-full">
            <HeaderService />
            <Card2 />
            <Outlet />
          </main>
          <footer></footer>
        </div>
      </div>
    </div>
  );
};

export default Layout;
