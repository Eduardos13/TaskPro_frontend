import React from 'react';
import s from './Modal.module.css';
import sprite from '../../icons/all-icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsModalOpen } from '../../redux/modal/selectors';
import { closeModal } from '../../redux/modal/slice';

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsModalOpen);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={s.modalOverlay} onClick={() => dispatch(closeModal())}>
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={s.closeBtn} onClick={() => dispatch(closeModal())}>
          <svg className={s.closeCross} width="18" height="18">
            <use href={`${sprite}#icon-x-close`} />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
