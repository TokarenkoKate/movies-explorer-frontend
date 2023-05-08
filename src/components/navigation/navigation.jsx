import './navigation.css';
import React from 'react';
import { Link } from 'react-router-dom';
import AppRoutes from '../../constants/constants';

function Navigation() {
  return (
    <ul className='navigation'>
      <li className='navigation__link-wrapper'>
        <Link to={AppRoutes.SignUp} className='navigation__link navigation__link_signup'>Регистрация</Link>
      </li>
      <li className='navigation__link-wrapper navigation__link-wrapper_singin'>
        <Link to={AppRoutes.SignIn} className='navigation__link navigation__link_signin'>Войти</Link>
      </li>
    </ul>
  );
}

export default Navigation;
