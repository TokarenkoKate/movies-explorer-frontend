import './profile.css';
import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppRoutes from '../../constants/constants';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { editUserInfo } from '../../services/MainApi';
import { useFormWithValidation } from '../../hooks/useFormWithValidations';

function Profile({ setIsLoggedIn, setCurrentUser }) {
  const user = useContext(CurrentUserContext);
  const {
    values, handleChange, errors, isValid,
  } = useFormWithValidation({ profile_name: user.name, profile_email: user.email });
  const [submitResultMesssage, setSubmitResultMessage] = useState('');
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
  const [submitButtonText, setSubmitButtonText] = useState('Редактировать');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitButtonText('Редактирование...');
    editUserInfo({ name: values.profile_name, email: values.profile_email })
      .then((userData) => {
        if (userData.email && userData.name) {
          setSubmitResultMessage('Информация обновлена.');
          setCurrentUser(userData);
        } else {
          setSubmitResultMessage('Пользователь с таким email уже существует.');
        }
      })
      .catch(() => setSubmitResultMessage('Что-то пошло не так. Попробуйте еще раз'))
      .finally(() => {
        setTimeout(() => setSubmitResultMessage(''), 3000);
        setSubmitButtonText('Редактировать');
      });
  };

  const onClickSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('moviesResult');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if ((values.profile_name !== user.name
      || values.profile_email !== user.email) && isValid) {
      setSubmitButtonDisabled(false);
    } else {
      setSubmitButtonDisabled(true);
    }
  }, [values, isValid, user]);

  return (
    <div className='profile'>
      <h1 className='profile__title'>Привет, {user.name}</h1>
      <form className='profile-form' id='profile-form' name='profile-form' onSubmit={handleSubmit}>
        <label
          className='profile-form__label'
          htmlFor='profile_name'
        >
          Имя
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
        <Link to={AppRoutes.Main} className='profile__signout-link' onClick={onClickSignOut}>Выйти из аккаунта</Link>
      </div>
    </div>
  );
}

export default Profile;
