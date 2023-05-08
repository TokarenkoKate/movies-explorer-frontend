import './techs-item.css';
import React from 'react';

function TechsItem({techItem}) {
  return (
    <li className='techs__item'>
      <p className='techs__item-title'>{techItem}</p>
    </li>
  );
}

export default TechsItem;
