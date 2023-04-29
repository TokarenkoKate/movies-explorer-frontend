import './movies.css';
import SearchForm from '../search-form/search-form';
import MoviesCardList from '../movies-card-list/movies-card-list';
import FilterCheckbox from '../filter-checkbox/filter-checkbox';

function Movies() {
  return (
    <div className='movies'>
      <div className='movies__search-container'>
        <SearchForm />
        <FilterCheckbox />
      </div>
      <MoviesCardList />
    </div>
  )
}

export default Movies;