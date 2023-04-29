import './about-me.css';
import photo from '../../images/cat.avif';
import Portfolio from '../portfolio/portfolio';

function AboutMe() {
  return (
    <section className='about-me'>
      <h3 className='about-me__subheading'>Студент</h3>
      <div className='about-me__horizontal-line'></div>
      <div className='about-me__content-wrapper'>
        <div className='about-me__row'>
          <h2 className='about-me__name'>Екатерина</h2>
          <p className='about-me__occupation'>Фронтенд-разработчик, 26 лет</p>
          <p className='about-me__description'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
            начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a className='about-me__link' href='#'>Github</a>
        </div>
        <div className='about-me__row'>
          <img src={photo} className='about-me__photo' />
        </div>
      </div>
      <Portfolio />
    </section>
  )
}

export default AboutMe;
