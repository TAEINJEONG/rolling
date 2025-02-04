import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="h-full">
      <div className="m-auto h-screen">
        <div>
          <header className="bg-green-100">
            <nav>
              <Link to="/colors">컬러 팔레트</Link>
              <Link to="/typography">타이포그래피</Link>
            </nav>
          </header>
          <main className="h-screen">
            <Outlet />
          </main>
          <footer></footer>
        </div>
      </div>
    </div>
  );
};

export default Layout;
