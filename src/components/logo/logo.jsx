import './logo.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../constants/constants';

function Logo() {
  return (
    <Link to={AppRoutes.Main}>
      <img src={logo} alt="Логотип" className='logo' />
    </Link>
  )
}

export default Logo;