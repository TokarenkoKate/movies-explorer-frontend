import './profile.css';
import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AppRoutes } from '../../constants/constants';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { editUserInfo } from '../../services/MainApi';
import { useFormWithValidation } from '../../hooks/useFormWithValidations';

function Profile({ setIsLoggedIn, setCurrentUser }) {
  const { t } = useTranslation();
  const user = useContext(CurrentUserContext);
  const {
    values, handleChange, errors, isValid,
  } = useFormWithValidation({ profile_name: user.name, profile_email: user.email });
  const [submitResultMesssage, setSubmitResultMessage] = useState('');
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
  const [submitButtonText, setSubmitButtonText] = useState(t('profile.edit'));

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitButtonText(t('profile.edit'));
    setSubmitButtonDisabled(true);
    editUserInfo({ name: values.profile_name, email: values.profile_email })
      .then((userData) => {
        if (userData.email && userData.name) {
          setSubmitResultMessage(t('profile.data_updated'));
          setCurrentUser(userData);
        } else {
          setSubmitResultMessage(t('profile.user_exists_error'));
        }
      })
      .catch(() => setSubmitResultMessage(t('profile.error')))
      .finally(() => {
        setTimeout(() => setSubmitResultMessage(''), 3000);
        setSubmitButtonText(t('profile.edit'));
      });
  };

  const onClickSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('moviesResult');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if ((values.profile_name !== user.name
      || values.profile_email !== user.email)
      && isValid
      && submitButtonText !== t('profile.editing')) {
      setSubmitButtonDisabled(false);
    } else {
      setSubmitButtonDisabled(true);
    }
  }, [values, isValid, user]);

  return (
    <div className='profile'>
      <h1 className='profile__title'>{t('profile.greeting')}, {user.name}</h1>
      <form className='profile-form' id='profile-form' name='profile-form' onSubmit={handleSubmit}>
        <label
          className='profile-form__label'
          htmlFor='profile_name'
        >
          {t('profile.name')}
          <input
            className={`profile-form__input ${errors?.profile_name ? 'profile-form__input_state_error' : ''}`}
            id='profile_name'
            name='profile_name'
            type='text'
            minLength={2}
            maxLength={30}
            required
            value={values?.profile_name || ''}
            onChange={handleChange}
          />
        </label>
        <p className='profile-form__input-error'>
          {errors?.profile_name && errors.profile_name}
        </p>
        <label
          className='profile-form__label'
          htmlFor='profile_email'
        >
          Email
          <input
            className={`profile-form__input ${errors?.profile_email ? 'profile-form__input_state_error' : ''}`}
            id='profile_email'
            name='profile_email'
            type='email'
            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
            required
            value={values?.profile_email || ''}
            onChange={handleChange}
          />
        </label>
        <p className='profile-form__input-error'>
          {errors?.profile_email && errors.profile_email}
        </p>
        <p className='profile-form__result-message'>
          {submitResultMesssage}
        </p>
      </form>
      <div className='profile__buttons-container'>
        <button
          type='submit'
          form='profile-form'
          className={`profile__submit-btn ${submitButtonDisabled ? 'profile__submit-btn_disabled' : ''}`}
          disabled={submitButtonDisabled}
          onSubmit={handleSubmit}>
            {submitButtonText}
        </button>
        <Link to={AppRoutes.Main} className='profile__signout-link' onClick={onClickSignOut}>{t('profile.sign_out')}</Link>
      </div>
    </div>
  );
}

export default Profile;
