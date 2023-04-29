import './movie-card.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoutes } from '../../constants/constants';
import movieImage from '../../images/example.jpg';

function MovieCard() {
  const location = useLocation();
  const [activeLike, setActiveLike] = useState(false);

  const toggleLikeCard = () => setActiveLike(!activeLike);

  return (
    <li className='movie-card'>
      <img src={movieImage} className='movie-card__image' />
      <div className='movie-card__content'>
        <div className='movie-card__row'>
          <p className='movie-card__title'>33 слова о дизайне</p>
          {location.pathname === AppRoutes.Movies && (
            <button className={
              `movie-card__like-btn ${activeLike ? 'movie-card__like-btn_active' : ''}`} onClick={toggleLikeCard
            } />
          )}
          {location.pathname === AppRoutes.SavedMovies && <button className='movies-card__delete-btn' />}
        </div>
        <p className='movie-card__duration'>1ч 47м</p>
      </div>
    </li>
  )
}

export default MovieCard;
