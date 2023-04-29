import './header.css';
import { useLocation } from 'react-router-dom';
import { AppRoutes } from '../../constants/constants';
import Logo from '../logo/logo';
import Menu from '../menu/menu';
import Navigation from '../navigation/navigation';

function Header({ menuOpened, onMenuToggle }) {
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
          (location.pathname === AppRoutes.Movies || location.pathname === AppRoutes.SavedMovies) && (
            <Menu menuOpened={menuOpened} onMenuToggle={onMenuToggle} />
          )
        }
      </nav>
    </header>
  )
}

export default Header;