import './menu.css';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AppRoutes } from '../../constants/constants';
import BurgerMenu from '../burger-menu/burger-menu.jsx';
import accountIcon from '../../images/account_icon.svg';

function Menu({ menuOpened, onMenuToggle, closeMenu }) {
  return (
    <>
      <BurgerMenu onMenuToggle={onMenuToggle} />
      <div className={`menu ${menuOpened ? 'menu_open' : ''}`}>
        <div className='menu__cross' onClick={closeMenu}>
          <div className='menu__cross-bar menu__cross-bar_1'></div>
          <div className='menu__cross-bar menu__cross-bar_2'></div>
        </div>
        <div className='menu__links-wrapper'>
          <NavLink
            to={AppRoutes.Main}
            onClick={closeMenu}
            className={({ isActive }) => `menu__link menu__link_main
              ${isActive ? 'menu__link_active' : ''}`}
          >
            Главная
          </NavLink>
          <NavLink
            to={AppRoutes.Movies}
            onClick={closeMenu}
            className={({ isActive }) => `menu__link
              ${isActive ? 'menu__link_active' : ''}`}
          >
            Фильмы
          </NavLink>
          <NavLink
            to={AppRoutes.SavedMovies}
            onClick={closeMenu}
            className={({ isActive }) => `menu__link
              ${isActive ? 'menu__link_active' : ''}`}
          >
            Сохранённые фильмы
          </NavLink>
        </div>
        <Link to={AppRoutes.Profile} onClick={closeMenu} className='menu__account-link'>
          <div className='menu__account-container'>
            <p className='menu__account-text'>
              Аккаунт
            </p>
            <div className='menu__account-icon-wrapper'>
              <img src={accountIcon} className='menu__acount-icon' alt='Иконка открытия страницы аккаунта пользователя' />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Menu;
