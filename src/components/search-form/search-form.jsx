import './search-form.css';
import searchIcon from '../../images/search.svg';

function SearchForm() {
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <form tabindex='0' className='search' onSubmit={handleSubmitForm}>
      <input className='search__input' placeholder="Фильм" required />
      <button className='search__button'>
        <img className='search__icon' src={searchIcon} alt='Иконка отправки формы поика фильмов' />
      </button>
    </form>
  )
}

export default SearchForm;
