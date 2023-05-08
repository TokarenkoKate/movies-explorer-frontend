import './about-me.css';
import React from 'react';
import profileImage from '../../images/profile-image.jpg';
import Portfolio from '../portfolio/portfolio.jsx';

function AboutMe() {
  return (
    <section className='about-me'>
      <h3 className='about-me__subheading'>Студент</h3>
      <div className='about-me__horizontal-line'></div>
      <div className='about-me__content-wrapper'>
        <div className='about-me__row'>
          <h2 className='about-me__name'>Екатерина</h2>
          <p className='about-me__occupation'>Фронтенд-разработчик, 26 лет</p>
          <p className='about-me__description'>
            Я родилась в городе Ростов-на-Дону, сейчас проживаю в Израиле, город Хайфа.
            По образованию я переводчик английского и немецкого языков.
            В 2022г. я решила сменить специальность и
            начала изучать веб-разработку. Так же, мне нравится мобильная
            разработка на React Native. В свободное время еще увлекаюсь
            3D моделированием и скульптингом.
          </p>
          <a className='about-me__link' href='https://github.com/TokarenkoKate'>Github</a>
        </div>
        <div className='about-me__row'>
          <img src={profileImage} className='about-me__photo' alt='Фото профиля' />
        </div>
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
