import './movies.css';
import React, { useContext, useState, useEffect } from 'react';
import { getAllMovies } from '../../services/MoviesApi';
import MoviesContext from '../../contexts/MoviesContext';
import SearchForm from '../search-form/search-form.jsx';
import MoviesCatalogue from '../movies-catalogue/movies-catalogue.jsx';
import FilterCheckbox from '../filter-checkbox/filter-checkbox.jsx';
import Preloader from '../preloader/preloader.jsx';
import { filterMoviesToSearchValue, filterMoviesToDuration } from '../../utils/utils';

function Movies({
  setMoviesContextValues, onClickSaveMovie, onClickDeleteMovie, savedMovies,
}) {
  const currentMoviesContext = useContext(MoviesContext);

  const [allMovies, setAllMovies] = useState([]);
  const [searchValue, setSearchValue] = useState(currentMoviesContext.previousSearchedValue);
  const [filteredMovies, setFilteredMovies] = useState(currentMoviesContext.previousFoundMovies);
  const [checkboxActive, setCheckboxActive] = useState(currentMoviesContext.previoudCheckboxState);
  const [notFoundError, setNotFoundError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const filterMovies = (movies) => {
    let currentMovies = filterMoviesToSearchValue(movies, searchValue);

    if (checkboxActive) {
      currentMovies = filterMoviesToDuration(currentMovies);
    }

    if (!currentMovies.length) {
      setNotFoundError(true);
    } else {
      setNotFoundError(false);
    }

    setMoviesContextValues({
      ...currentMoviesContext,
      previousSearchedValue: searchValue,
      previousFoundMovies: currentMovies,
      previoudCheckboxState: checkboxActive,
    });
    setFilteredMovies(currentMovies);
  };

  const handleSubmit = () => {
    if (allMovies.length === 0) {
      setIsLoading(true);
      getAllMovies()
        .then((result) => {
          setAllMovies(result);
          filterMovies(result);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    } else {
      filterMovies(allMovies);
    }
  };

  useEffect(() => {
    if (allMovies.length) {
      filterMovies(allMovies);
    }
  }, [checkboxActive]);

  return (
    <div className='movies'>
      <div className='movies__search-container'>
        <SearchForm
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onSubmit={handleSubmit}
        />
        <FilterCheckbox checkboxActive={checkboxActive} setCheckboxActive={setCheckboxActive} />
      </div>
      {(notFoundError && !filteredMovies.length) && (
        <div className='movies__not-found'>
          <p className='movies__not-found-err'>Ничего не найдено</p>
        </div>
      )}
      {isLoading && <Preloader />}
      {filterMovies.length && (
        <MoviesCatalogue
          movies={filteredMovies}
          onClickSaveMovie={onClickSaveMovie}
          onClickDeleteMovie={onClickDeleteMovie}
          savedMovies={savedMovies}
        />
      )}
    </div>
  );
}

export default Movies;
