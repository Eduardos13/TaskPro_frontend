import React from 'react';
import s from './ScreenPage.module.css';
import sprite from '../../icons/all-icons.svg';
import FilltersDropDown from '../../components/FilltersDropDown/FilltersDropDown';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsOpen } from '../../redux/modal/selectors.js';
import { openModal } from '../../redux/modal/slice.js';

const ScreenPage = () => {
  const dispatch = useDispatch(openModal);
  const handleOpenModal = () => {
    dispatch(openModal());
  };
  return (
    <section className={s.screenPage}>
      <div className={s.container}>
        {/* <FilltersDropDown /> */}
        <p className={s.welcomeText}>
          Before starting your project, it is essential
          <span className={s.createBoard} onClick={handleOpenModal}>
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
