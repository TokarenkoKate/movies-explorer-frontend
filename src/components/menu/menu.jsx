import './menu.css';
import { NavLink, Link } from 'react-router-dom';
import { AppRoutes } from '../../constants/constants';
import BurgerMenu from "../burger-menu/burger-menu";
import accountIcon from '../../images/account_icon.svg';

function Menu({menuOpened, onMenuToggle}) {
  return (
    <>
      <BurgerMenu onMenuToggle={onMenuToggle} />
      <ul className={`menu ${menuOpened ? 'menu_open' : ''}`}>
        <div className='menu__cross' onClick={onMenuToggle}>
          <div className='menu__cross-bar menu__cross-bar_1'></div>
          <div className='menu__cross-bar menu__cross-bar_2'></div>
        </div>
        <div className='menu__links-wrapper'>
          <NavLink to={AppRoutes.Main} onClick={onMenuToggle} className={({ isActive }) => 
            `menu__link menu__link_main ${isActive ? "menu__link_active" : ""}`}>
            Главная
          </NavLink>
          <NavLink to={AppRoutes.Movies} onClick={onMenuToggle} className={({ isActive }) =>
            `menu__link ${isActive ? "menu__link_active" : ""}`}>
            Фильмы
          </NavLink>
          <NavLink to={AppRoutes.SavedMovies} onClick={onMenuToggle} className={({ isActive }) =>
            `menu__link ${isActive ? "menu__link_active" : ""}`}>
            Сохранённые фильмы
          </NavLink>
        </div>
        <Link to={AppRoutes.Profile} onClick={onMenuToggle} className='menu__link'>
          <div className='menu__account-container'>
            <p className='menu__account-link'>
              Аккаунт
            </p>
            <div className='menu__account-icon-wrapper'>
              <img src={accountIcon} className='menu__acount-icon' />
            </div>
          </div>
        </Link>
      </ul>
    </>
  )
}

export default Menu;