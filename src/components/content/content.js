import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/dist/styles.css';

import './content.scss';
import bg from './bg.png';
import carousel from './carousel-1.png';
import About from './about';

const Content = ({ glowsData, onToggleCheck, onToggleContent, logic } ) => {

  const item = glowsData.map((item) => {
    const { label, check, id } = item;
    let classNames = "glow-color-block__img";
    if (check) {
      classNames += ' check';
    }
    return (
      <div className='glow-color-block-item'
        key={id}
        onClick={() => onToggleCheck(id)}>
        <div className={classNames}>
          <img src={bg} alt="img" />
        </div>

        <span
          className="glow-color-block__text">
          {label}
        </span>
      </div>
    )
  })
  if (logic) {
    return <About logic={logic} onToggleContent={onToggleContent} />
  }
  return (
    <div className='section content'>
      <div className="content-l">
        <img src={carousel} alt="" />
        {/* <AwesomeSlider
          cssModule={AwsSliderStyles}
          organicArrows={false}
        >
          <div data-src={carousel} />
          <div data-src={carousel} />
          <div data-src={carousel} />
        </AwesomeSlider> */}
      </div>
      <div className="content-r">
        <div className="content-r-char">
          <ul className="content-list">
            <li className="char-row">
              <span className='char-row__title'>Класс:</span>
              <span className='char-row__value'>Standart</span>
            </li>
            <li className="char-row">
              <span className='char-row__title'>Потребляемая мощность:</span>
              <span className='char-row__value'>59 Вт</span>
            </li>
            <li className="char-row">
              <span className='char-row__title'>Сила света:</span>
              <span className='char-row__value'>3459 Люмен = 7,5 ламп <br /> накаливания по 40 Вт</span>
            </li>
            <li className="char-row">
              <span className='char-row__title'>Гарантия:</span>
              <span className='char-row__value'>3 года</span>
            </li>
            <li className="char-row">
              <span className='char-row__title'>Монтаж:</span>
              <span className='char-row__value'>да</span>
            </li>
            <li className="char-row">
              <span className='char-row__title'>Итого сумма:</span>
              <span className='char-row__value'>2594 рублей</span>
            </li>
          </ul>
          <div className="glow-color-choose">
            <button
              className="glow-color-choose-icon"
              onClick={() => onToggleContent(!logic)}
            >
              i
            </button>
            <div className="glow-color-choose-title">Выберите цвет свечения</div>
          </div>
          <div className="glow-color-block">
            {item}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content;