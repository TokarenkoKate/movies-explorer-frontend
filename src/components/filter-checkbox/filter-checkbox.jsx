import './filter-checkbox.css';
import React from 'react';

function FilterCheckbox({ checkboxActive, setCheckboxActive }) {
  const onToggleCheckbox = () => setCheckboxActive(!checkboxActive);

  return (
    <div className='filter-checkbox'>
      <p className='filter-checkbox__title'>
        Короткометражки
      </p>
      <label className="filter-checkbox__switch">
        <input
          className="filter-checkbox__input"
          type='checkbox'
          checked={checkboxActive}
          onChange={onToggleCheckbox}
        />
        <span className="filter-checkbox__slider"></span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
