import React from 'react';
import s from './Card.module.css';
import sprite from '../../icons/all-icons.svg';

const Card = () => {
  return (
    <div className={s.taskCard}>
      <h2 className={s.cardTitle}>The Watch Spot Design</h2>
      <h5 className={s.cardDescription}>
        Create a visually stunning and eye-catching watch dial design that
        embodies our brand's essence of sleek aesthetics and modern elegance.
        Your design should be unique, innovative, and reflective of the latest
        trends in watch design.
      </h5>
      <div className={s.cardsBottom}>
        <div className={s.priorityBlock}>
          <p className={s.priorityTitle}>Priority</p>
          <div className={s.prior}>
            <svg className={s.priorityIcon} width="12" height="12">
              <use href={`${sprite}#icon-priority-sign`} />
            </svg>
            <p className={s.cardPriority}>Low</p>
          </div>
        </div>
        <div className={s.deadlineBlock}>
          <p className={s.deadlineTitle}>Deadline</p>
          <p className={s.deadlineDate}>12/05/2023</p>
        </div>
        <div className={s.iconsBlock}>
          <svg className={s.transferIcon} width="16" height="16">
            <use href={`${sprite}#icon-arrow-circle`} />
          </svg>
          <svg className={s.editIcon} width="16" height="16">
            <use href={`${sprite}#icon-pencil`} />
          </svg>
          <svg className={s.deleteIcon} width="16" height="16">
            <use href={`${sprite}#icon-trashsvg`} />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Card;
