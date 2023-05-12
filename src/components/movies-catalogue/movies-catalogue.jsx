import './movies-catalogue.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  AppRoutes, DisplayedMovies, DisplayedRestMovies, ScreenWidthBreakpoints,
} from '../../constants/constants';
import useCurrentWidth from '../../hooks/useCurrentWidth';
import MovieCard from '../movie-card/movie-card.jsx';

function MoviesCatalogue({
  movies,
  onClickSaveMovie,
  onClickDeleteMovie,
  savedMovies,
}) {
  const location = useLocation();

  const [currentMovies, setCurrentMovies] = useState([]);
  const [restMovies, setRestMovies] = useState([]);
  const width = useCurrentWidth();

  useEffect(() => {
    if (width > ScreenWidthBreakpoints.mediumWidth) {
      setCurrentMovies(movies.slice(0, DisplayedMovies.fullWidth));
      setRestMovies(movies.slice(DisplayedMovies.fullWidth));
    } else if (width <= ScreenWidthBreakpoints.mediumWidth
        && width > ScreenWidthBreakpoints.smallWidth) {
      setCurrentMovies(movies.slice(0, DisplayedMovies.mediumWidth));
      setRestMovies(movies.slice(DisplayedMovies.mediumWidth));
    } else {
      setCurrentMovies(movies.slice(0, DisplayedMovies.smallWidth));
      setRestMovies(movies.slice(DisplayedMovies.smallWidth));
    }
  }, [width, movies]);

  const onClickShowMore = () => {
    if (!restMovies.length) {
      return;
    }
    if (width > ScreenWidthBreakpoints.mediumWidth) {
      setCurrentMovies([...currentMovies, ...restMovies.slice(0, DisplayedRestMovies.fullWidth)]);
      setRestMovies([...restMovies.slice(DisplayedRestMovies.fullWidth)]);
    } else {
      setCurrentMovies([...currentMovies, ...restMovies.slice(0, DisplayedRestMovies.mediumWidth)]);
      setRestMovies([...restMovies.slice(DisplayedRestMovies.mediumWidth)]);
    }
  };

  return (
    <div className="movies-сatalogue">
      <ul className="movies-сatalogue__list">
        {location.pathname === AppRoutes.Movies
          ? currentMovies
            && currentMovies.map((movie) => (
              <MovieCard
                movie={movie}
                onClickSaveMovie={onClickSaveMovie}
                onClickDeleteMovie={onClickDeleteMovie}
                savedMovies={savedMovies}
                key={movie.id}
              />
            ))
          : movies
            && movies.map((movie) => (
              <MovieCard
                movie={movie}
                onClickSaveMovie={onClickSaveMovie}
                onClickDeleteMovie={onClickDeleteMovie}
                savedMovies={movies}
                key={movie._id}
              />
            ))}
      </ul>
      {!!restMovies.length && (
        <button className="movies-сatalogue__button" onClick={onClickShowMore}>
          Еще
        </button>
      )}
    </div>
  );
}

export default MoviesCatalogue;
