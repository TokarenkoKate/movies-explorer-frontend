import './sign-up.css';
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AppRoutes } from '../../constants/constants';
import { register } from '../../services/MainApi';
import Logo from '../logo/logo.jsx';
import AuthForm from '../auth-form/auth-form.jsx';
import Popup from '../popup/popup.jsx';

function SignUp() {
  const navigate = useNavigate();

  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [buttonText, setButtonText] = useState('Зарегистрироваться');

  const handleRegister = (values) => {
    setButtonText('Загрузка...');

    const { auth_form_name, auth_form_email, auth_form_password } = values;

    register(auth_form_name, auth_form_email, auth_form_password)
      .then((res) => {
        if (res) {
          navigate(AppRoutes.SignIn, { replace: true });
        } else {
          setIsPopupOpened(true);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setButtonText('Зарегистрироваться'));
  };

  const closePopup = () => setIsPopupOpened(false);

  useEffect(() => {
    setButtonText('Зарегистрироваться');
  }, [handleRegister]);

  return (
    <div className='sign-up'>
      <Logo />
      <h1 className='sign-up__title'>Добро пожаловать!</h1>
      <AuthForm
        onSubmit={handleRegister}
        buttonText={buttonText}
      />
      <div className='sign-up__link-container'>
        <p className='sign-up__text'>Уже зарегистрированы?</p>
        <Link to={AppRoutes.SignIn} className='sign-up__text sign-up__text_link'>Войти</Link>
      </div>
      <Popup
        message={'Что-то пошло не так! Попробуйте ещё раз.'}
        isOpen={isPopupOpened}
        onClose={closePopup}
      />
    </div>
  );
}

export default SignUp;
