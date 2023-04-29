import './movies-card-list.css';
import { useLocation } from 'react-router-dom';
import MovieCard from "../movie-card/movie-card";
import { AppRoutes } from '../../constants/constants';
// import Preloader from '../preloader/preloader';

function MoviesCardList() {
  const location = useLocation();

  return (
    <div className='movies-card-list__container'>
      {/* <Preloader /> */}
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
      {location.pathname === AppRoutes.Movies && (
        <button className='movies-card-list__button'>
          Еще
        </button>
      )}
    </div>
  )
}

export default MoviesCardList;
