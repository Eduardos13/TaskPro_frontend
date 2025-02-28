import React from 'react';
import s from './FilltersDropDown.module.css';
import sprite from '../../icons/all-icons.svg';

const FilltersDropDown = () => {
  return (
    <div className={s.dropDown}>
      <div className={s.container}>
        <p className={s.dropsTitle}>Filters</p>
        <button className={s.closeBtn}>
          <svg width="18" height="18">
            <use href={`${sprite}#icon-x-close`} />
          </svg>
        </button>
        <div className={s.filltersTop}>
          <p className={s.lablesTitle}>Label color</p>
          <span className={s.showAll}>Show all</span>
        </div>
        <ul className={s.lablesList}>
          <li className={`${s.lablesItem} ${s.noPriority}`}>
            <input type="checkbox" value="without" />
            Without priority
          </li>
          <li className={`${s.lablesItem} ${s.lowPriority}`}>
            <input type="checkbox" value="low" />
            Low
          </li>
          <li className={`${s.lablesItem} ${s.mediumPriority}`}>
            <input type="checkbox" value="medium" />
            Medium
          </li>
          <li className={`${s.lablesItem} ${s.highPriority}`}>
            <input type="checkbox" value="high" />
            High
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilltersDropDown;
