import './sign-up.css';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../constants/constants';
import Logo from '../logo/logo';
import AuthForm from '../auth-form/auth-form';

function SignUp() {
  return (
    <div className='sign-up'>
      <Logo />
      <h1 className='sign-up__title'>Добро пожаловать!</h1>
      <AuthForm
        buttonText={'Зарегистрироваться'}
      />
      <div className='sign-up__link-container'>
        <p className='sign-up__text'>Уже зарегистрированы?</p>
        <Link to={AppRoutes.SignIn} className='sign-up__text sign-up__text_link'>Войти</Link>
      </div>
    </div>
  )
}

export default SignUp;