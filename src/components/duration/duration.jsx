import './duration.css';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Duration() {
  const { t } = useTranslation();
  return (
    <div className='duration'>
      <div className='duration__section duration__section_one-week'>
        <div className='duration__line duration__line_one-week'>
          <p className="duration__description">{t('main.about_project.one_week')}</p>
        </div>
        <div className='duration__subheading'>{t('main.about_project.back_end')}</div>
      </div>
      <div className='duration__section duration__section_four-weeks'>
        <div className='duration__line duration__line_four-weeks'>
          <p className="duration__description">{t('main.about_project.four_weeks')}</p>
        </div>
        <div className='duration__subheading'>{t('main.about_project.front_end')}</div>
      </div>
    </div>
  );
}

export default Duration;
