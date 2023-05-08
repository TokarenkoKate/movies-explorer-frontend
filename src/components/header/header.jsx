import './header.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoutes } from '../../constants/constants';
import Logo from '../logo/logo.jsx';
import Menu from '../menu/menu.jsx';
import Navigation from '../navigation/navigation.jsx';

function Header({
  menuOpened, onMenuToggle, closeMenu, isLoggedIn,
}) {
  const location = useLocation();

  return (
    <header className={`header ${location.pathname === AppRoutes.Main ? 'header_landing' : ''}`}>
      <nav className='header__nav'>
        <Logo />
        {
          (!isLoggedIn) && (
            <Navigation />
          )}
        {
          (isLoggedIn) && (
            <Menu menuOpened={menuOpened} onMenuToggle={onMenuToggle} closeMenu={closeMenu} />
          )
        }
      </nav>
    </header>
  );
}

export default Header;
