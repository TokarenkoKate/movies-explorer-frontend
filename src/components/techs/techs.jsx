import './techs.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import TechsList from '../techs-list/techs-list.jsx';

function Techs() {
  const { t } = useTranslation();
  return (
    <section className='techs'>
      <h3 className='techs__subheading'>{t('main.techs.title')}</h3>
      <div className='techs__horizontal-line'></div>
      <div className='techs__container'>
        <h2 className='techs__heading'>{t('main.techs.amount')}</h2>
        <p className='techs__description'>
          {t('main.techs.description')}
        </p>
        <TechsList />
      </div>
    </section>
  );
}

export default Techs;
