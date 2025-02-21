import React from 'react';
import s from './Modal.module.css';
import sprite from '../../icons/all-icons.svg';

const Modal = ({ children }) => {
  return (
    <div className={s.modalOverlay}>
      <div className={s.modalContent}>
        <button className={s.closeBtn}>
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
