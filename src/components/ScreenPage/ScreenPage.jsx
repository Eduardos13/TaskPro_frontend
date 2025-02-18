import React from 'react';
import s from './ScreenPage.module.css';
import sprite from '../../icons/all-icons.svg';

const ScreenPage = () => {
  return (
    <section className={s.screenPage}>
      <div className={s.container}>
        <div className={s.fillters}>
          <svg className={s.filltersIcon} width="16" height="16">
            <use href={`${sprite}#icon-fillters`} />
          </svg>
          <span>Fillters</span>
        </div>
        <p className={s.welcomeText}>
          Before starting your project, it is essential{' '}
          <span className={s.createBoard}>to create a board</span> to visualize
          and track all the necessary tasks and milestones. This board serves as
          a powerful tool to organize the workflow and ensure effective
          collaboration among team members.
        </p>
      </div>
    </section>
  );
};

export default ScreenPage;
