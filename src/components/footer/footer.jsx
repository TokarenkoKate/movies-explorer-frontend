import './footer.css';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { i18n, t } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__row footer__row_top'>
          <p className='footer__title'>
            {t('footer.project')}
          </p>
        </div>
        <div className='footer__row footer__row_bottom'>
          <p className='footer__text footer__text_date'>&#169; 2023</p>
          <div className='footer__links-container'>
            <a className='footer__text footer__text_link' href='https://practicum.yandex.ru/' target='_blank' rel='noopener noreferrer'>{t('footer.yandex')}</a>
            <a className='footer__text footer__text_link' href='https://github.com/TokarenkoKate' target='_blank' rel='noopener noreferrer'>Github</a>
            <button className={`footer__text footer__text_link ${i18n.language === 'en' ? 'footer__text_link_active' : ''}`} onClick={() => changeLanguage('en')}>EN</button>
            <button className={`footer__text footer__text_link ${i18n.language === 'ru' ? 'footer__text_link_active' : ''}`} onClick={() => changeLanguage('ru')}>RU</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
