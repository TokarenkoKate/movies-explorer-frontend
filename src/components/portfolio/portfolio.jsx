import './portfolio.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../constants/constants';
import arrow from '../../images/arrow.svg';

function Portfolio({ isLoggedIn }) {
  const { t } = useTranslation();
  return (
    <div className='portfolio'>
      <p className='portfolio__heading'>{t('main.about_me.portfolio')}</p>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <a className='portfolio__link' href='https://tokarenkokate.github.io/russian-travel/' target='_blank' rel='noopener noreferrer'>
            <p className='portfolio__link-title'>{t('main.about_me.static_site')}</p>
            <img src={arrow} className='portfolio__arrow-icon' alt={t('main.about_me.static_site_alt')} />
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a className='portfolio__link' href='https://tokarenko.nomoredomains.work/signin' target='_blank' rel='noopener noreferrer'>
            <p className='portfolio__link-title'>{t('main.about_me.adaptive_site')}</p>
            <img src={arrow} className='portfolio__arrow-icon' alt={t('main.about_me.adaptive_site_alt')} />
          </a>
        </li>
        <li className='portfolio__list-item'>
          <Link className='portfolio__link' to={isLoggedIn ? AppRoutes.Movies : AppRoutes.SignIn} target='_blank' rel='noopener noreferrer'>
            <p className='portfolio__link-title'>{t('main.about_me.single_page')}</p>
            <img src={arrow} className='portfolio__arrow-icon' alt={t('main.about_me.single_page_alt')} />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
