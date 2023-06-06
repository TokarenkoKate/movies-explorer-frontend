import './auth-form.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoutes } from '../../constants/constants';
import { useFormWithValidation } from '../../hooks/useFormWithValidations';

function AuthForm({ onSubmit, buttonText, isLoading }) {
  const {
    values, handleChange, errors, isValid,
  } = useFormWithValidation();

  const location = useLocation();

  const handleSubmitForm = (e) => {
    e.preventDefault();

    onSubmit(values);
  };

  return (
    <form className='auth-form' onSubmit={handleSubmitForm}>
      <div className='auth-form__container'>
        {location.pathname === AppRoutes.SignUp && (
          <label htmlFor='authFormName' className='auth-form__input-label'>
            Имя
            <input
              className={`auth-form__input ${errors?.authFormName ? 'auth-form__input_state_error' : ''}`}
              id='authFormName'
              name='authFormName'
              placeholder='Имя'
              type='text'
              value={values?.authFormName || ''}
              onChange={handleChange}
              minLength={2}
              maxLength={30}
              disabled={isLoading}
              required
            />
            <span className='auth-form__input-error'>
              {errors?.authFormName && errors.authFormName}
            </span>
          </label>
        )}
        <label htmlFor='authFormEmail' className='auth-form__input-label'>
          E-mail
          <input
            className={`auth-form__input ${errors?.authFormEmail ? 'auth-form__input_state_error' : ''}`}
            id='authFormEmail'
            name='authFormEmail'
            type='email'
            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
            value={values?.authFormEmail || ''}
            onChange={handleChange}
            placeholder='E-mail'
            disabled={isLoading}
            required
          />
          <span className='auth-form__input-error'>
            {errors?.authFormEmail && errors.authFormEmail}
          </span>
        </label>
        <label htmlFor='authFormPassword' className='auth-form__input-label'>
          Пароль
          <input
            className={`auth-form__input ${errors?.authFormPassword ? 'auth-form__input_state_error' : ''}`}
            id='authFormPassword'
            name='authFormPassword'
            type='password'
            value={values?.authFormPassword || ''}
            onChange={handleChange}
            placeholder='Пароль'
            minLength={2}
            disabled={isLoading}
            required
          />
          <span className='auth-form__input-error'>
            {errors?.authFormPassword && errors.authFormPassword}
          </span>
        </label>
      </div>
      <button
        type='submit'
        className={`auth-form__submit-btn ${!isValid || isLoading ? 'auth-form__submit-btn_disabled' : ''}`}
        disabled={!isValid || isLoading}
        onSubmit={handleSubmitForm}
      >
        {buttonText}
      </button>
    </form>
  );
}

export default AuthForm;
