import './profile.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from "../../constants/constants";

function Profile() {
  const [formData, setFormData] = useState({ profile_name: 'Виталий', profile_email: 'pochta@yandex.ru' });

  const onChangeFormValue = (event) => {
    const target = event.target;
    const {name, value} = target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='profile'>
      <h1 className='profile__title'>Привет, Виталий!</h1>
      <form className='profile-form' id='profile-form' name='profile-form'>
        <label
          className='profile-form__label'
          htmlFor='profile_name'
        >
          Имя
          <input
            className='profile-form__input'
            id='profile_name'
            name='profile_name'
            type='text'
            value={formData.profile_name}
            onChange={onChangeFormValue}
          />
        </label>
        <label
          className='profile-form__label'
          htmlFor='profile_email'
        >
          Email
          <input
            className='profile-form__input'
            id='profile_email'
            name='profile_email'
            type='email'
            value={formData.profile_email}
            onChange={onChangeFormValue}
          />
        </label>
      </form>
      <div className='profile__buttons-container'>
        <button type='submit' form='profile-form' className='profile__submit-btn' onSubmit={handleSubmit}>Редактировать</button>
        <Link to={AppRoutes.Main} className='profile__signout-link'>Выйти из аккаунта</Link>
      </div>
    </div>
  )
}

export default Profile;
