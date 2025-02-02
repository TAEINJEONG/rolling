import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg';
// import Button from '../button';

function Header() {
  return (
    <header className="py-2.5 px-6 border-b border-[#EDEDED]">
      <nav className="flex items-center">
        <Link to="/" className="cursor-pointer">
          <img src={logo} alt="롤링 로고" />
        </Link>
        {/* <Button variant="outlined" size="md">롤링 페이퍼 만들기</Button> */}
      </nav>
    </header>
  );
}

export default Header;
