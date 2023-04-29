import './filter-checkbox.css';

function FilterCheckbox() {
  return (
    <div className='filter-checkbox'>
      <p className='filter-checkbox__title'>
        Короткометражки
      </p>
      <label className="filter-checkbox__switch">
        <input className="filter-checkbox__input" type='checkbox' />
        <span className="filter-checkbox__slider"></span>
      </label>
    </div>
  )
}

export default FilterCheckbox;
