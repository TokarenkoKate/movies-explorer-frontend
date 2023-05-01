import './promo.css';
import heroImage from '../../images/hero_image.svg';

function Promo() {
  return (
    <section className='promo'>
      <h1 className='promo__heading'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
      <img src={heroImage} className='promo__image' alt='Заглавное изображение сайта' />
    </section>
  )
}

export default Promo;