import './saved-movies.css';
import React, { useState, useEffect } from 'react';
import SearchForm from '../search-form/search-form.jsx';
import FilterCheckbox from '../filter-checkbox/filter-checkbox.jsx';
import MoviesCatalogue from '../movies-catalogue/movies-catalogue.jsx';
import { filterMoviesToSearchValue, filterMoviesToDuration } from '../../utils/utils';

function SavedMovies({ savedMovies, onClickSaveMovie, onClickDeleteMovie }) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [checkboxActive, setCheckboxActive] = useState(false);
  const [notFoundError, setNotFoundError] = useState(false);

  const filterSavedMovies = (movies) => {
    let currentMovies = filterMoviesToSearchValue(movies, searchValue);

    if (checkboxActive) {
      currentMovies = filterMoviesToDuration(currentMovies);
    }

    if (!currentMovies.length) {
      setNotFoundError(true);
    } else {
      setNotFoundError(false);
    }

    setFilteredMovies(currentMovies);
  };

  const handleSubmit = () => {
    filterSavedMovies(savedMovies);
  };

  useEffect(() => {
    if (savedMovies.length) {
      filterSavedMovies(savedMovies);
    }
  }, [checkboxActive, savedMovies]);

  useEffect(() => {
    setFilteredMovies(savedMovies);
  }, [savedMovies]);

  return (
    <div className="saved-movies">
      <div className='saved-movies__search-container'>
        <SearchForm
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onSubmit={handleSubmit}
        />
        <FilterCheckbox
          checkboxActive={checkboxActive}
          setCheckboxActive={setCheckboxActive}
        />
      </div>
      {notFoundError && (
        <div className='saved-movies__not-found'>
          <p className='saved-movies__not-found-err'>Ничего не найдено</p>
        </div>
      )}
      <MoviesCatalogue
        movies={filteredMovies}
        onClickSaveMovie={onClickSaveMovie}
        onClickDeleteMovie={onClickDeleteMovie}
      />
    </div>
  );
}

export default SavedMovies;
