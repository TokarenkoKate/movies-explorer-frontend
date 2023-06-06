import './burger-menu.css';
import React from 'react';

function BurgerMenu({ onMenuToggle }) {
  return (
    <div className='burger' onClick={onMenuToggle}>
      <div className="burger__bar1"></div>
      <div className="burger__bar2"></div>
      <div className="burger__bar3"></div>
    </div>
  );
}

export default BurgerMenu;
