import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg';
import Button from '../button';

function Header() {
  const location = useLocation();
  const isHasButton = location.pathname === '/' || location.pathname === '/list';

  return (
    <header className="w-full flex justify-center py-3 border-b border-[#EDEDED] max-xl:px-6">
      <nav className="flex w-[1200px] h-[40px] justify-between items-center">
        <Link to="/" className="cursor-pointer">
          <img src={logo} alt="롤링 로고" />
        </Link>
        {isHasButton && (
          <Link to="/post">
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
