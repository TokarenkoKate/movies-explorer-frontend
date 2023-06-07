import './sign-in.css';
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AppRoutes } from '../../constants/constants';
import Logo from '../logo/logo.jsx';
import AuthForm from '../auth-form/auth-form.jsx';
import { authorize } from '../../services/MainApi';
import Popup from '../popup/popup.jsx';

function SignIn({ isLoggedIn, onSignIn }) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  if (isLoggedIn) {
    navigate(AppRoutes.Movies, { replace: true });
  }

  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [buttonText, setButtonText] = useState(t('sign_in.sign_in'));
  const [errorMessage, setErrorMessage] = useState(t('sign_in.server_error'));
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values) => {
    setIsLoading(true);
    setButtonText(t('sign_in.loading'));

    const { authFormEmail, authFormPassword } = values;

    authorize(authFormEmail, authFormPassword)
      .then((res) => {
        if (res.token) {
          onSignIn(true);
          navigate(AppRoutes.Movies, { replace: true });
        } else if (res instanceof TypeError) {
          setErrorMessage(t('sign_in.server_error'));
          setIsPopupOpened(true);
          setIsLoading(false);
        } else {
          setErrorMessage(t('sign_in.incorrect_login'));
          setIsPopupOpened(true);
          setIsLoading(false);
        }
      })
      .finally(() => { setButtonText(t('sign_in.sign_in')); });
  };

  const closePopup = () => setIsPopupOpened(false);

  useEffect(() => {
    setButtonText(t('sign_in.sign_in'));
  }, []);

  return !isLoggedIn && (
    <div className='sign-in'>
      <Logo />
      <h1 className='sign-in__title'>{t('sign_in.glad_to_see')}</h1>
      <AuthForm
        onSubmit={handleSubmit}
        buttonText={buttonText}
        isLoading={isLoading}
      />
      <div className='sign-in__link-container'>
        <p className='sign-in__text'>{t('sign_in.not_signed_up')}</p>
        <Link to={AppRoutes.SignUp} className='sign-in__text sign-in__text_link'>{t('sign_in.sign_up')}</Link>
      </div>
      <Popup message={errorMessage} isOpen={isPopupOpened} onClose={closePopup} />
    </div>
  );
}

export default SignIn;
