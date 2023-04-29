import './movies-card-list.css';
import { useLocation } from 'react-router-dom';
import MovieCard from "../movie-card/movie-card";
import { AppRoutes } from '../../constants/constants';

function MoviesCardList() {
  const location = useLocation();

  return (
    <div className='movies-card-list__container'>
      <ul className='movies-card-list'>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </ul>
      {location.pathname === AppRoutes.Main && (
        <button className='movies-card-list__button'>
          Еще
        </button>
      )}
    </div>
  )
}

export default MoviesCardList;
