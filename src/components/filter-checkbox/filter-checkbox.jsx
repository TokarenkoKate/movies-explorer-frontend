import './filter-checkbox.css';
import React from 'react';
import { useTranslation } from 'react-i18next';

function FilterCheckbox({ checkboxActive, setCheckboxActive }) {
  const { t } = useTranslation();
  const onToggleCheckbox = () => setCheckboxActive(!checkboxActive);

  return (
    <div className='filter-checkbox'>
      <p className='filter-checkbox__title'>
        {t('movies.short_movies')}
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
