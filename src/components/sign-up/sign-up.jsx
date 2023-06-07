import './sign-up.css';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AppRoutes } from '../../constants/constants';
import { authorize, register } from '../../services/MainApi';
import Logo from '../logo/logo.jsx';
import AuthForm from '../auth-form/auth-form.jsx';
import Popup from '../popup/popup.jsx';

function SignUp({ isLoggedIn, onSignIn }) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  if (isLoggedIn) {
    navigate(AppRoutes.Movies, { replace: true });
  }

  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [buttonText, setButtonText] = useState(t('sign_up.sign_up'));
  const [isLoading, setIsLoading] = useState(false);
  const [submitResultMesssage, setSubmitResultMessage] = useState(t('sign_up.error'));

  const handleRegister = (values) => {
    setIsLoading(true);
    setButtonText(t('sign_up.loading'));

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
              setSubmitResultMessage(t('sign_up.error'));
              setIsPopupOpened(true);
              setIsLoading(false);
            });
        } else {
          setSubmitResultMessage(t('sign_up.user_exists_error'));
          setIsPopupOpened(true);
          setIsLoading(false);
        }
      })
      .catch(() => {
        setSubmitResultMessage(t('sign_up.error'));
        setIsPopupOpened(true);
        setIsLoading(false);
      })
      .finally(() => setButtonText(t('sign_up.sign_up')));
  };

  const closePopup = () => setIsPopupOpened(false);

  return !isLoggedIn && (<div className='sign-up'>
      <Logo />
      <h1 className='sign-up__title'>{t('sign_up.welcome')}</h1>
      <AuthForm
        onSubmit={handleRegister}
        buttonText={buttonText}
        isLoading={isLoading}
      />
      <div className='sign-up__link-container'>
        <p className='sign-up__text'>{t('sign_up.already_signed_up')}</p>
        <Link to={AppRoutes.SignIn} className='sign-up__text sign-up__text_link'>{t('sign_up.sign_in')}</Link>
      </div>
      <Popup
        message={submitResultMesssage}
        isOpen={isPopupOpened}
        onClose={closePopup}
      />
    </div>);
}

export default SignUp;
