import './main.css';
import React from 'react';
import Promo from '../promo/promo.jsx';
import AboutProject from '../about-project/about-project.jsx';
import Techs from '../techs/techs.jsx';
import AboutMe from '../about-me/about-me.jsx';

function Main() {
  return (
    <main>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
    </main>
  );
}

export default Main;
