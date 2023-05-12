import './sign-up.css';
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AppRoutes } from '../../constants/constants';
import { authorize, register } from '../../services/MainApi';
import Logo from '../logo/logo.jsx';
import AuthForm from '../auth-form/auth-form.jsx';
import Popup from '../popup/popup.jsx';

function SignUp({ onSignIn }) {
  const navigate = useNavigate();

  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [buttonText, setButtonText] = useState('Зарегистрироваться');

  const handleRegister = (values) => {
    setButtonText('Загрузка...');

    const { authFormName, authFormEmail, authFormPassword } = values;

    register(authFormName, authFormEmail, authFormPassword)
      .then((res) => {
        if (res) {
          authorize(authFormEmail, authFormPassword)
            .then(() => {
              onSignIn(true);
              navigate(AppRoutes.Movies, { replace: true });
            })
            .catch(() => setIsPopupOpened(true));
        } else {
          setIsPopupOpened(true);
        }
      })
      .catch(() => setIsPopupOpened(true))
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
