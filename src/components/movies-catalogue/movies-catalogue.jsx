import './movies-catalogue.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppRoutes from '../../constants/constants';
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
    if (width > 768) {
      setCurrentMovies(movies.slice(0, 12));
      setRestMovies(movies.slice(12));
    } else if (width <= 768 && width > 480) {
      setCurrentMovies(movies.slice(0, 8));
      setRestMovies(movies.slice(8));
    } else {
      setCurrentMovies(movies.slice(0, 5));
      setRestMovies(movies.slice(5));
    }
  }, [width, movies]);

  const onClickShowMore = () => {
    if (!restMovies.length) {
      return;
    }
    if (width > 768) {
      setCurrentMovies([...currentMovies, ...restMovies.slice(0, 3)]);
      setRestMovies([...restMovies.slice(3)]);
    } else {
      setCurrentMovies([...currentMovies, ...restMovies.slice(0, 2)]);
      setRestMovies([...restMovies.slice(2)]);
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
