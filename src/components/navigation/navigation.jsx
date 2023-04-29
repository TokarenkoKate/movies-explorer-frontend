import './navigation.css';

function Navigation() {
  return (
    <ul className='navigation'>
      <li className='navigation__link-wrapper'>
        <a href='#' className='navigation__link navigation__link_signup'>Регистрация</a>
      </li>
      <li className='navigation__link-wrapper navigation__link-wrapper_singin'>
        <a href='#' className='navigation__link navigation__link_signin'>Войти</a>
      </li>
    </ul>
  )
}

export default Navigation;
