import React from 'react';
import s from './ScreenPage.module.css';
import sprite from '../../icons/all-icons.svg';
import FilltersDropDown from '../../components/FilltersDropDown/FilltersDropDown';
import { useDispatch } from 'react-redux';

const ScreenPage = () => {
  const dispatch = useDispatch();

  return (
    <section className={s.screenPage}>
      <div className={s.container}>
        {/* <FilltersDropDown /> */}
        <p className={s.welcomeText}>
          Before starting your project, it is essential
          <span className={s.createBoard} onClick={() => dispatch(openModal)}>
            to create a board
          </span>
          to visualize and track all the necessary tasks and milestones. This
          board serves as a powerful tool to organize the workflow and ensure
          effective collaboration among team members.
        </p>
      </div>
    </section>
  );
};

export default ScreenPage;
