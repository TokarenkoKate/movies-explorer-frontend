import './techs-list.css';
import React from 'react';
import TechsItem from '../techs-item/techs-item.jsx';

function TechsList() {
  const technologies = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];

  return (
    <ul className='techs-list'>
      {technologies.map((techItem) => <TechsItem techItem={techItem} key={techItem} />)}
    </ul>
  );
}

export default TechsList;
