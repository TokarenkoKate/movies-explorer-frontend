import './movie-card.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoutes } from '../../constants/constants';
import { BASE_URL } from '../../services/MoviesApi';
import Spinner from '../spinner/spinner.jsx';

function MovieCard({
  movie, onClickSaveMovie, onClickDeleteMovie, savedMovies,
}) {
  const location = useLocation();
  const [activeLike, setActiveLike] = useState(false);
  const [savedMovieId, setSavedMovieId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const toggleLikeCard = () => {
    setIsLoading(true);
    if (!activeLike) {
      onClickSaveMovie(movie)
        .then((currentSavedMovie) => {
          setActiveLike(true);
          setIsLoading(false);
          setSavedMovieId(currentSavedMovie._id);
        });
    } else {
      onClickDeleteMovie(savedMovieId)
        .then(() => {
          setActiveLike(false);
          setIsLoading(false);
        });
    }
  };

  const deleteCurrentMovie = () => {
    setIsLoading(true);
    onClickDeleteMovie(movie._id)
      .then(() => setIsLoading(true));
  };

  const countDuration = () => {
    const minutes = movie.duration % 60;
    const hours = Math.floor(movie.duration / 60);

    if (hours !== 0) {
      return `${hours}ч ${minutes}м`;
    }
    return `${minutes}м`;
  };

  useEffect(() => {
    const savedMovie = savedMovies.filter(
      (currentSavedMovie) => currentSavedMovie.movieId === movie.id,
    );
    if (savedMovie.length) {
      setActiveLike(true);
      setSavedMovieId(savedMovie[0]._id);
    } else {
      setActiveLike(false);
    }
  }, [savedMovies]);

  return (
    <li className='movie-card'>
      <a href={movie.trailerLink} target='_blank' rel='noopener noreferrer' className='movie-card__link'>
        <img
          src={typeof (movie.image) === 'string'
            ? movie.image
            : BASE_URL + movie.image.url}
          className='movie-card__image' alt={movie.nameRU}
        />
      </a>
        <div className='movie-card__content'>
          <div className='movie-card__row'>
            <p className='movie-card__title'>{movie.nameRU}</p>
            {location.pathname === AppRoutes.Movies && (
              <button className={
                `movie-card__like-btn ${activeLike ? 'movie-card__like-btn_active' : ''}`}
                onClick={toggleLikeCard}
              />
            )}
            {location.pathname === AppRoutes.SavedMovies
              && <button className='movie-card__delete-btn' onClick={deleteCurrentMovie} />
            }
          </div>
          <p className='movie-card__duration'>{countDuration()}</p>
        </div>
        {isLoading && (
          <div className='movie-card__loading-overlay'>
            <Spinner />
          </div>
        )}
    </li>
  );
}

export default MovieCard;
