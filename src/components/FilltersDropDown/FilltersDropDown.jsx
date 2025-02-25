import React from 'react';
import s from './FilltersDropDown.module.css';
import sprite from '../../icons/all-icons.svg';

const FilltersDropDown = () => {
  return (
    <>
      <div className={s.fillters}>
        <svg className={s.filltersIcon} width="16" height="16">
          <use href={`${sprite}#icon-fillters`} />
        </svg>
        <span className={s.filtersTitle}>Fillters</span>
      </div>
    </>
  );
};

export default FilltersDropDown;
