import './search-form.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import searchIcon from '../../images/search.svg';

function SearchForm({ searchValue, setSearchValue, onSubmit }) {
  const { t } = useTranslation();
  const handleSubmitForm = (e) => {
    e.preventDefault();
    onSubmit(e.target.value);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <form tabIndex='0' className='search' onSubmit={handleSubmitForm}>
      <input className='search__input' placeholder={t('movies.movie')} value={searchValue} onChange={handleChange} required />
      <button className='search__button'>
        <img className='search__icon' src={searchIcon} alt={t('movies.search_icon_alt')} />
      </button>
    </form>
  );
}

export default SearchForm;
