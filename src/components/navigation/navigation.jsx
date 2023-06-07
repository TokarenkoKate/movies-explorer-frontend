import './navigation.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../constants/constants';

function Navigation() {
  const { t } = useTranslation();
  return (
    <ul className='navigation'>
      <li className='navigation__link-wrapper'>
        <Link to={AppRoutes.SignUp} className='navigation__link navigation__link_signup'>{t('header.signup')}</Link>
      </li>
      <li className='navigation__link-wrapper navigation__link-wrapper_singin'>
        <Link to={AppRoutes.SignIn} className='navigation__link navigation__link_signin'>{t('header.signin')}</Link>
      </li>
    </ul>
  );
}

export default Navigation;
