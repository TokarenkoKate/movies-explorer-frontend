import './duration.css';

function Duration() {
  return (
    <div className='duration'>
      <div className='duration__section duration__section_one-week'>
        <div className='duration__line duration__line_one-week'>
          <p className="duration__description">1 неделя</p>
        </div>
        <div className='duration__subheading'>Back-end</div>
      </div>
      <div className='duration__section duration__section_four-weeks'>
        <div className='duration__line duration__line_four-weeks'>
          <p className="duration__description">4 недели</p>
        </div>
        <div className='duration__subheading'>Front-end</div>
      </div>
    </div>
  )
}

export default Duration;
