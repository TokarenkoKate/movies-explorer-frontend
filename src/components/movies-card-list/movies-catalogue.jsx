import './movies-catalogue.css';
import { useLocation } from 'react-router-dom';
import MovieCard from "../movie-card/movie-card";
import { AppRoutes } from '../../constants/constants';
// import Preloader from '../preloader/preloader';

function MoviesCatalogue() {
  const location = useLocation();

  return (
    <div className='movies-сatalogue'>
      {/* <Preloader /> */}
      <ul className='movies-сatalogue__list'>
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
        <button className='movies-сatalogue__button'>
          Еще
        </button>
      )}
    </div>
  )
}

export default MoviesCatalogue;
