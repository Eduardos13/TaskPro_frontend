import React from 'react';
import s from './Board.module.css';
import sprite from '../icons/all-icons.svg';
import FilltersDropDown from '../components/FilltersDropDown/FilltersDropDown.jsx';

const Board = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.boardTop}>
          <h2 className={s.boardTitle}>Project office</h2>
          <button className={s.fillters}>
            <svg className={s.filltersIcon} width="16" height="16">
              <use href={`${sprite}#icon-fillters`} />
            </svg>
            <span className={s.filtersTitle}>Fillters</span>
          </button>
        </div>
        <button className={s.addColumnBtn}>
          <span className={s.plusBox}>
            <svg className={s.plusBtn} width="14" height="14">
              <use href={`${sprite}#icon-plus`} />
            </svg>
          </span>
          Add another column
        </button>
      </div>
    </>
  );
};

export default Board;
