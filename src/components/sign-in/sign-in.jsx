import './sign-in.css';
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AppRoutes } from '../../constants/constants';
import Logo from '../logo/logo.jsx';
import AuthForm from '../auth-form/auth-form.jsx';
import { authorize } from '../../services/MainApi';
import Popup from '../popup/popup.jsx';

function SignIn({ isLoggedIn, onSignIn }) {
  const navigate = useNavigate();

  if (isLoggedIn) {
    navigate(AppRoutes.Movies, { replace: true });
  }

  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [buttonText, setButtonText] = useState('Войти');
  const [errorMessage, setErrorMessage] = useState('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values) => {
    setIsLoading(true);
    setButtonText('Загрузка...');

    const { authFormEmail, authFormPassword } = values;

    authorize(authFormEmail, authFormPassword)
      .then((res) => {
        if (res.token) {
          onSignIn(true);
          navigate(AppRoutes.Movies, { replace: true });
        } else if (res instanceof TypeError) {
          setErrorMessage(`Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.
          Подождите немного и попробуйте ещё раз.`);
          setIsPopupOpened(true);
          setIsLoading(false);
        } else {
          setErrorMessage('Неверный логин или пароль, попробуйте еще раз.');
          setIsPopupOpened(true);
          setIsLoading(false);
        }
      })
      .finally(() => { setButtonText('Войти'); });
  };

  const closePopup = () => setIsPopupOpened(false);

  useEffect(() => {
    setButtonText('Войти');
  }, []);

  return !isLoggedIn && (
    <div className='sign-in'>
      <Logo />
      <h1 className='sign-in__title'>Рады видеть!</h1>
      <AuthForm
        onSubmit={handleSubmit}
        buttonText={buttonText}
        isLoading={isLoading}
      />
      <div className='sign-in__link-container'>
        <p className='sign-in__text'>Ещё не зарегистрированы?</p>
        <Link to={AppRoutes.SignUp} className='sign-in__text sign-in__text_link'>Регистрация</Link>
      </div>
      <Popup message={errorMessage} isOpen={isPopupOpened} onClose={closePopup} />
    </div>
  );
}

export default SignIn;
