import React from 'react';
import s from './ScreenPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/modal/slice.js';
import Modal from '../../components/Modal/Modal.jsx';
import { selectIsModalOpen } from '../../redux/modal/selectors.js';
import AddBoardModal from '../../components/Forms/Board/AddBoardModal/AddBoardModal.jsx';

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

        <AddBoardModal />
      </div>

      {isModalOpen && (
        <Modal>
          <AddBoardModal />
        </Modal>
      )}
    </section>
  );
};

export default ScreenPage;
