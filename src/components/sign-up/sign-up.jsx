import './sign-up.css';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AppRoutes } from '../../constants/constants';
import { authorize, register } from '../../services/MainApi';
import Logo from '../logo/logo.jsx';
import AuthForm from '../auth-form/auth-form.jsx';
import Popup from '../popup/popup.jsx';

function SignUp({ isLoggedIn, onSignIn }) {
  const navigate = useNavigate();

  if (isLoggedIn) {
    navigate(AppRoutes.Movies, { replace: true });
  }

  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [buttonText, setButtonText] = useState('Зарегистрироваться');
  const [isLoading, setIsLoading] = useState(false);
  const [submitResultMesssage, setSubmitResultMessage] = useState('Что-то пошло не так! Попробуйте ещё раз.');

  const handleRegister = (values) => {
    setIsLoading(true);
    setButtonText('Загрузка...');

    const { authFormName, authFormEmail, authFormPassword } = values;

    register(authFormName, authFormEmail, authFormPassword)
      .then((res) => {
        if (res.name && res.email) {
          authorize(authFormEmail, authFormPassword)
            .then(() => {
              onSignIn(true);
              navigate(AppRoutes.Movies, { replace: true });
            })
            .catch(() => {
              setSubmitResultMessage('Что-то пошло не так. Попробуйте еще раз');
              setIsPopupOpened(true);
              setIsLoading(false);
            });
        } else {
          setSubmitResultMessage('Пользователь с таким email уже существует.');
          setIsPopupOpened(true);
          setIsLoading(false);
        }
      })
      .catch(() => {
        setSubmitResultMessage('Что-то пошло не так. Попробуйте еще раз');
        setIsPopupOpened(true);
        setIsLoading(false);
      })
      .finally(() => setButtonText('Зарегистрироваться'));
  };

  const closePopup = () => setIsPopupOpened(false);

  return !isLoggedIn && (<div className='sign-up'>
      <Logo />
      <h1 className='sign-up__title'>Добро пожаловать!</h1>
      <AuthForm
        onSubmit={handleRegister}
        buttonText={buttonText}
        isLoading={isLoading}
      />
      <div className='sign-up__link-container'>
        <p className='sign-up__text'>Уже зарегистрированы?</p>
        <Link to={AppRoutes.SignIn} className='sign-up__text sign-up__text_link'>Войти</Link>
      </div>
      <Popup
        message={submitResultMesssage}
        isOpen={isPopupOpened}
        onClose={closePopup}
      />
    </div>);
}

export default SignUp;
