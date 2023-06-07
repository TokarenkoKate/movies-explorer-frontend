import './promo.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import heroImage from '../../images/hero_image.svg';

function Promo() {
  const { t } = useTranslation();
  return (
    <section className='promo'>
      <h1 className='promo__heading'>{t('main.promo.header')}</h1>
      <img src={heroImage} className='promo__image' alt={t('main.promo.promo_image_alt')} />
    </section>
  );
}

export default Promo;
