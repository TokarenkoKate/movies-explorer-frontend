import './about-project.css';
import Duration from '../duration/duration';

function AboutProject() {
  return (
    <section className='about'>
      <h2 className='about__heading'>О проекте</h2>
      <div className='about__horizontal-line'></div>
      <div className='about__table'>
        <div className='about__table-row'>
          <h3 className='about__table-heading'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about__table-description'>
            Составление плана, работу над бэкендом, вёрстку, 
            добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className='about__table-row'>
          <h3 className='about__table-heading'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about__table-description'>
            У каждого этапа был мягкий и жёсткий дедлайн, 
            которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <Duration />
    </section>
  )
}

export default AboutProject;
