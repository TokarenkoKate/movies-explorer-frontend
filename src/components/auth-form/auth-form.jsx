import './auth-form.css';
import { useLocation } from 'react-router-dom';
import { AppRoutes } from '../../constants/constants';

function AuthForm({ buttonText }) {
  const location = useLocation();

  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <form className='auth-form' onSubmit={handleSubmitForm}>
      <div className='auth-form__container'>
        {location.pathname === AppRoutes.SignUp && (
          <label htmlFor='auth-form-name' className='auth-form__input-label'>
            Имя
            <input
              className='auth-form__input'
              id='auth-form-name'
              name='auth-form-name'
              placeholder='Имя'
              type='text'
            />
            <span className='auth-form__input-error'>some error</span>
          </label>
        )}
        <label htmlFor='auth-form-name' className='auth-form__input-label'>
          E-mail
          <input
            className='auth-form__input'
            id='auth-form-email'
            name='auth-form-email'
            placeholder='E-mail'
            type='email'
          />
          <span className='auth-form__input-error'></span>
        </label>
        <label htmlFor='auth-form-name' className='auth-form__input-label'>
          Пароль
          <input
            className='auth-form__input'
            id='auth-form-password'
            name='auth-form-password'
            placeholder='Пароль'
            type='password'
          />
          <span className='auth-form__input-error'></span>
        </label>
      </div>
      <button
        type='submit'
        className='auth-form__submit-btn'
        onSubmit={handleSubmitForm}
      >
        {buttonText}
      </button>
    </form>
  )
}

export default AuthForm;
