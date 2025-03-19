import React from 'react';
import s from './FilltersDropDown.module.css';
import sprite from '../../icons/all-icons.svg';
import clsx from 'clsx';

const FilltersDropDown = () => {
  return (
    <div className={s.dropDown}>
      <div className={s.container}>
        <h4 className={s.dropsTitle}>Filters</h4>
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
          <li className={clsx(s.lablesItem, s.withoutPriority)}>
            <svg className={s.priorityLable} width="14" height="14">
              <use href={`${sprite}#icon-priority-sign`} />
            </svg>
            Without priority
          </li>
          <li className={clsx(s.lablesItem, s.lowPriority)}>
            <svg className={s.priorityLable} width="14" height="14">
              <use href={`${sprite}#icon-priority-sign`} />
            </svg>
            Low
          </li>
          <li className={clsx(s.lablesItem, s.mediumPriority)}>
            <svg className={s.priorityLable} width="14" height="14">
              <use href={`${sprite}#icon-priority-sign`} />
            </svg>
            Medium
          </li>
          <li className={clsx(s.lablesItem, s.highPriority)}>
            <svg className={s.priorityLable} width="14" height="14">
              <use href={`${sprite}#icon-priority-sign`} />
            </svg>
            High
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilltersDropDown;
