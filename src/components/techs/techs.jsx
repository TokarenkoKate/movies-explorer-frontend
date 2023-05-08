import './techs.css';
import React from 'react';
import TechsList from '../techs-list/techs-list.jsx';

function Techs() {
  return (
    <section className='techs'>
      <h3 className='techs__subheading'>Технологии</h3>
      <div className='techs__horizontal-line'></div>
      <div className='techs__container'>
        <h2 className='techs__heading'>7 технологий</h2>
        <p className='techs__description'>
          На курсе веб-разработки мы освоили технологии,
          которые применили в дипломном проекте.
        </p>
        <TechsList />
      </div>
    </section>
  );
}

export default Techs;
