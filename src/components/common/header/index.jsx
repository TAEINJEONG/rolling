import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg';
import Button from '../button';

function Header() {
  const [isHasButton, setIsHasButton] = useState(true);

  useEffect(() => {
    const path = window.location.pathname;

    if (path !== '/' && path !== '/rolling-paper') {
      setIsHasButton(false);
    } else {
      setIsHasButton(true);
    }
  }, []);

  return (
    <header className="w-full flex justify-center py-2.5 border-b border-[#EDEDED] max-xl:px-6">
      <nav className="flex w-[1200px] justify-between items-center">
        <Link to="/" className="cursor-pointer">
          <img src={logo} alt="롤링 로고" />
        </Link>
        {isHasButton && (
          <Link to="/rolling-paper/new">
            <Button variant="outlined" size="md">
              롤링 페이퍼 만들기
            </Button>
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
