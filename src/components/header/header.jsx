import './header.css';
import { useLocation } from 'react-router-dom';
import { AppRoutes } from '../../constants/constants';
import Logo from '../logo/logo';
import Menu from '../menu/menu';
import Navigation from '../navigation/navigation';

function Header({ menuOpened, onMenuToggle, closeMenu }) {
  const location = useLocation();

  return (
    <header className={`header ${location.pathname === AppRoutes.Main ? 'header_landing' : ''}`}>
      <nav className='header__nav'>
        <Logo />
        {
          location.pathname === AppRoutes.Main && (
            <Navigation />
          )}
        {
          (location.pathname === AppRoutes.Movies || 
            location.pathname === AppRoutes.SavedMovies || 
            location.pathname === AppRoutes.Profile) && (
            <Menu menuOpened={menuOpened} onMenuToggle={onMenuToggle} closeMenu={closeMenu} />
          )
        }
      </nav>
    </header>
  )
}

export default Header;