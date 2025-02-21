import React from 'react';
import s from './Column.module.css';
import sprite from '../../icons/all-icons.svg';
import Card from '../Card/Card';

const Column = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.titleContainer}>
          <h2 className={s.columnTitle}>To Do</h2>
          <div className={s.iconsContainer}>
            <svg className={s.columnIcon} width="16" height="16">
              <use href={`${sprite}#icon-pencil`} />
            </svg>
            <svg className={s.columnIcon} width="16" height="16">
              <use href={`${sprite}#icon-trashsvg`} />
            </svg>
          </div>
        </div>
        <div className={s.cardsList}>
          <Card />
          <Card />
        </div>
        <button className={s.addCardBtn}>
          <span className={s.plusBox}>
            <svg className={s.plusBtn} width="14" height="14">
              <use href={`${sprite}#icon-plus`} />
            </svg>
          </span>
          Add another card
        </button>
      </div>
    </>
  );
};

export default Column;
