import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/colors">컬러 팔레트</Link>
          <Link to="/typography">타이포그래피</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
