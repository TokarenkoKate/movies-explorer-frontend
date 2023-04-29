import './sign-in.css';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../constants/constants';
import Logo from '../logo/logo';
import AuthForm from '../auth-form/auth-form';

function SignIn() {
  return (
    <div className='sign-in'>
      <Logo />
      <h1 className='sign-in__title'>Рады видеть!</h1>
      <AuthForm
        buttonText={'Войти'}
      />
      <div className='sign-in__link-container'>
        <p className='sign-in__text'>Ещё не зарегистрированы?</p>
        <Link to={AppRoutes.SignUp} className='sign-in__text sign-in__text_link'>Регистрация</Link>
      </div>
    </div>
  )
}

export default SignIn;
