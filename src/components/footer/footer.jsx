import './footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__row footer__row_top'>
          <p className='footer__title'>
            Учебный проект Яндекс.Практикум х BeatFilm.
          </p>
        </div>
        <div className='footer__row footer__row_bottom'>
          <p className='footer__text footer__text_date'>&#169; 2020</p>
          <div className='footer__links-container'>
            <a className='footer__text footer__text_link' href='https://practicum.yandex.ru/'>Яндекс.Практикум</a>
            <a className='footer__text footer__text_link' href='https://github.com/TokarenkoKate'>Github</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;