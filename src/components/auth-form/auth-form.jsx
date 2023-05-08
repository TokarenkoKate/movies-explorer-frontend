import './auth-form.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoutes } from '../../constants/constants';
import { useFormWithValidation } from '../../hooks/useFormWithValidations';

function AuthForm({ onSubmit, buttonText }) {
  const {
    values, handleChange, errors, isValid, resetForm,
  } = useFormWithValidation();

  const location = useLocation();

  const handleSubmitForm = (e) => {
    e.preventDefault();

    onSubmit(values);
    resetForm();
  };

  return (
    <form className='auth-form' onSubmit={handleSubmitForm}>
      <div className='auth-form__container'>
        {location.pathname === AppRoutes.SignUp && (
          <label htmlFor='auth_form_name' className='auth-form__input-label'>
            Имя
            <input
              className={`auth-form__input ${errors?.auth_form_name ? 'auth-form__input_state_error' : ''}`}
              id='auth_form_name'
              name='auth_form_name'
              placeholder='Имя'
              type='text'
              value={values?.auth_form_name || ''}
              onChange={handleChange}
              minLength={2}
              required
            />
            <span className='auth-form__input-error'>
              {errors?.auth_form_name && errors.auth_form_name}
            </span>
          </label>
        )}
        <label htmlFor='auth_form_email' className='auth-form__input-label'>
          E-mail
          <input
            className={`auth-form__input ${errors?.auth_form_email ? 'auth-form__input_state_error' : ''}`}
            id='auth_form_email'
            name='auth_form_email'
            type='email'
            value={values?.auth_form_email || ''}
            onChange={handleChange}
            placeholder='E-mail'
            required
          />
          <span className='auth-form__input-error'>
            {errors?.auth_form_email && errors.auth_form_email}
          </span>
        </label>
        <label htmlFor='auth_form_password' className='auth-form__input-label'>
          Пароль
          <input
            className={`auth-form__input ${errors?.auth_form_password ? 'auth-form__input_state_error' : ''}`}
            id='auth_form_password'
            name='auth_form_password'
            type='password'
            value={values?.auth_form_password || ''}
            onChange={handleChange}
            placeholder='Пароль'
            minLength={2}
            required
          />
          <span className='auth-form__input-error'>
            {errors?.auth_form_password && errors.auth_form_password}
          </span>
        </label>
      </div>
      <button
        type='submit'
        className={`auth-form__submit-btn ${!isValid ? 'auth-form__submit-btn_disabled' : ''}`}
        disabled={!isValid}
        onSubmit={handleSubmitForm}
      >
        {buttonText}
      </button>
    </form>
  );
}

export default AuthForm;
