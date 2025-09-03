import React from 'react';
import s from './ScreenPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/modal/slice.js';
import { selectIsModalOpen } from '../../redux/modal/selectors.js';
import AddBoardModal from '../../components/Forms/Board/AddBoardModal/AddBoardModal.jsx';
import ConfirmationModal from '../../components/Forms/Confirmation/ConfirmationModal.jsx';

const ScreenPage = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsModalOpen);

  return (
    <section className={s.screenPage}>
      <div className={s.container}>
        {/* <FilltersDropDown /> */}
        <p className={s.welcomeText}>
          Before starting your project, it is essential
          <span className={s.createBoard} onClick={() => dispatch(openModal())}>
            {' '}
            to create a board
          </span>
          to visualize and track all the necessary tasks and milestones. This
          board serves as a powerful tool to organize the workflow and ensure
          effective collaboration among team members.
        </p>
      </div>

      {isModalOpen && <AddBoardModal />}
    </section>
  );
};

export default ScreenPage;
