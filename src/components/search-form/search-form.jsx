import './search-form.css';
import searchIcon from '../../images/search.svg';

function SearchForm() {
  return (
    <div className='search'>
      <input className='search__input' placeholder="Фильм" />
      <button className='search__button'>
        <img className='search__icon' src={searchIcon} />
      </button>
    </div>
  )
}

export default SearchForm;
