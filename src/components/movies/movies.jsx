import './movies.css';
import SearchForm from '../search-form/search-form';
import MoviesCatalogue from '../movies-card-list/movies-catalogue';
import FilterCheckbox from '../filter-checkbox/filter-checkbox';

function Movies() {
  return (
    <div className='movies'>
      <div className='movies__search-container'>
        <SearchForm />
        <FilterCheckbox />
      </div>
      <MoviesCatalogue />
    </div>
  )
}

export default Movies;