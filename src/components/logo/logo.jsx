import './logo.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../constants/constants';

function Logo() {
  return (
    <Link to={AppRoutes.Main} tabIndex='1'>
      <div className='logo'>
        <img src={logo} alt="Логотип" className='logo__icon' />
      </div>
    </Link>
  )
}

export default Logo;