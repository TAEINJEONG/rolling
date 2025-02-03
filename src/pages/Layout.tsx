import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Card from './Card';
import HeaderService from './HeaderService';

const Layout = () => {
  return (
    <div className="bg-beige-200 h-full">
      <div className="m-auto h-screen">
        <div>
          <header className="bg-green-100">
            <nav>
              <Link to="/colors">컬러 팔레트</Link>
              <Link to="/typography">타이포그래피</Link>
            </nav>
          </header>
          <main className="bg-beige-200">
            <HeaderService />
            <Card />
            <Outlet />
          </main>
          <footer></footer>
        </div>
      </div>
    </div>
  );
};

export default Layout;
