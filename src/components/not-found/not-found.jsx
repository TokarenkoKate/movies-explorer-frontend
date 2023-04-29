import './not-found.css';
import { Link } from 'react-router-dom';
import { AppRoutes } from "../../constants/constants";

function NotFound() {
  return (
    <div className='not-found'>
      <div>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__text'>Страница не найдена</p>
      </div>
      <Link to={AppRoutes.Main} className='not-found__back-link'>Назад</Link>
    </div>
  )
}

export default NotFound;
