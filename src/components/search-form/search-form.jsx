import './search-form.css';
import React from 'react';
import searchIcon from '../../images/search.svg';

function SearchForm({ searchValue, setSearchValue, onSubmit }) {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    onSubmit(e.target.value);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <form tabIndex='0' className='search' onSubmit={handleSubmitForm}>
      <input className='search__input' placeholder="Фильм" value={searchValue} onChange={handleChange} required />
      <button className='search__button'>
        <img className='search__icon' src={searchIcon} alt='Иконка отправки формы поика фильмов' />
      </button>
    </form>
  );
}

export default SearchForm;
