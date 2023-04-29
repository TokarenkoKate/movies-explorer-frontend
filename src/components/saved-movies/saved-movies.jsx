import './saved-movies.css';
import SearchForm from '../search-form/search-form';
import FilterCheckbox from '../filter-checkbox/filter-checkbox';
import MoviesCardList from '../movies-card-list/movies-card-list';

function SavedMovies() {
  return (
    <div className="saved-movies">
      <div className='saved-movies__search-container'>
        <SearchForm />
        <FilterCheckbox />
      </div>
      <MoviesCardList />
    </div>
  )
}

export default SavedMovies;
