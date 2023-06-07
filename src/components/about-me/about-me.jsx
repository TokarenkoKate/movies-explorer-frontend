import './about-me.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import profileImage from '../../images/profile-image.jpg';
import Portfolio from '../portfolio/portfolio.jsx';

function AboutMe({ isLoggedIn }) {
  const { t } = useTranslation();
  return (
    <section className='about-me'>
      <h3 className='about-me__subheading'>{t('main.about_me.student')}</h3>
      <div className='about-me__horizontal-line'></div>
      <div className='about-me__content-wrapper'>
        <div className='about-me__row'>
          <h2 className='about-me__name'>{t('main.about_me.name')}</h2>
          <p className='about-me__occupation'>{t('main.about_me.occupation')}</p>
          <p className='about-me__description'>
            {t('main.about_me.description')}
          </p>
          <a className='about-me__link' href='https://github.com/TokarenkoKate'>Github</a>
        </div>
        <div className='about-me__row'>
          <img src={profileImage} className='about-me__photo' alt={t('main.about_me.profile_pic_alt')} />
        </div>
      </div>
      <Portfolio isLoggedIn={isLoggedIn}/>
    </section>
  );
}

export default AboutMe;
