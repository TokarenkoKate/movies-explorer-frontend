import './movies.css';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getAllMovies } from '../../services/MoviesApi';
import SearchForm from '../search-form/search-form.jsx';
import MoviesCatalogue from '../movies-catalogue/movies-catalogue.jsx';
import FilterCheckbox from '../filter-checkbox/filter-checkbox.jsx';
import Preloader from '../preloader/preloader.jsx';
import { filterMoviesToSearchValue, filterMoviesToDuration } from '../../utils/utils';

function Movies({
  onClickSaveMovie, onClickDeleteMovie, savedMovies, setIsPopupOpened,
}) {
  const [allMovies, setAllMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [checkboxActive, setCheckboxActive] = useState(false);
  const [notFoundError, setNotFoundError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const filterMovies = (movies) => {
    if (movies.length) {
      let currentMovies = filterMoviesToSearchValue(movies, searchValue);

      if (checkboxActive) {
        currentMovies = filterMoviesToDuration(currentMovies);
      }

      if (!currentMovies.length) {
        setNotFoundError(true);
      } else {
        setNotFoundError(false);
      }

      localStorage.setItem('moviesResult', JSON.stringify({
        searchValue,
        currentMovies,
        checkboxActive,
      }));
      setFilteredMovies(currentMovies);
    }
  };

  const handleSubmit = () => {
    setFilteredMovies([]);
    if (allMovies.length === 0) {
      setIsLoading(true);
      getAllMovies()
        .then((result) => {
          if (Array.isArray(result)) {
            setAllMovies(result);
            filterMovies(result);
          } else {
            setIsPopupOpened(true);
          }
        })
        .catch(() => setIsPopupOpened(true))
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

  useEffect(() => {
    const moviesResult = JSON.parse(localStorage.getItem('moviesResult'));

    if (moviesResult) {
      setSearchValue(moviesResult.searchValue);
      setFilteredMovies(moviesResult.currentMovies);
      setCheckboxActive(moviesResult.checkboxActive);
    }
  }, []);

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
          <p className='movies__not-found-err'>{t('movies.nothing_found')}</p>
        </div>
      )}
      {isLoading && <Preloader />}
      {!!filteredMovies.length && (
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
