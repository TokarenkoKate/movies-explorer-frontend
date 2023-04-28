import Navigation from '../navigation/navigation';
import Logo from '../logo/logo';
import './header.css';

function Header() {
  return (
    <header className='header header_landing'>
      <nav className='header__nav'>
        <Logo />
        <Navigation />
      </nav>
    </header>
  )
}

export default Header;