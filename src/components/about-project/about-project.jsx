import './about-project.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Duration from '../duration/duration.jsx';

function AboutProject() {
  const { t } = useTranslation();
  return (
    <section className='about'>
      <h2 className='about__heading'>{t('main.about_project.header')}</h2>
      <div className='about__horizontal-line'></div>
      <div className='about__table'>
        <div className='about__table-row'>
          <h3 className='about__table-heading'>
            {t('main.about_project.diploma_included')}
          </h3>
          <p className='about__table-description'>
            {t('main.about_project.description')}
          </p>
        </div>
        <div className='about__table-row'>
          <h3 className='about__table-heading'>
            {t('main.about_project.duration')}
          </h3>
          <p className='about__table-description'>
            {t('main.about_project.duration_description')}
          </p>
        </div>
      </div>
      <Duration />
    </section>
  );
}

export default AboutProject;
