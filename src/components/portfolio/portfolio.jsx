import './portfolio.css';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../constants/constants';
import arrow from '../../images/arrow.svg';

function Portfolio() {
  return (
    <div className='portfolio'>
      <p className='portfolio__heading'>Портфолио</p>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <a className='portfolio__link' href='https://tokarenkokate.github.io/russian-travel/'>
            <p className='portfolio__link-title'>Статичный сайт</p>
            <img src={arrow} className='portfolio__arrow-icon' alt='Иконка перехода по ссылке на статичный сайт из портфолио' />
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a className='portfolio__link' href='https://tokarenko.nomoredomains.work/signin'>
            <p className='portfolio__link-title'>Адаптивный сайт</p>
            <img src={arrow} className='portfolio__arrow-icon' alt='Иконка перехода по ссылке на адаптивный сайт из портфолио' />
          </a>
        </li>
        <li className='portfolio__list-item'>
          <Link className='portfolio__link' to={AppRoutes.Movies} >
            <p className='portfolio__link-title'>Одностраничное приложение</p>
            <img src={arrow} className='portfolio__arrow-icon' alt='Иконка перехода по ссылке на одностраничное приложение из портфолио' />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Portfolio;
