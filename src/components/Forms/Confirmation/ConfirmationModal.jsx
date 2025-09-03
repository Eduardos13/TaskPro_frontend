import { useDispatch } from 'react-redux';
import Modal from '../../Modal/Modal.jsx';
import s from './Confirmation.module.css';
import { deleteBoardThunk } from '../../../redux/board/operations.js';
import { closeModal } from '../../../redux/modal/slice.js';

const ConfirmationModal = () => {
  const dispatch = useDispatch();

  //   const handleDeleteBoard = (_id) => {
  //     dispatch(deleteBoardThunk(_id));
  //   };

  return (
    <Modal>
      <div className={s.container}>
        <div className={s.confirmationContent}>
          <h2 className={s.confirmTitle}>
            Do you really want to take this action? You will not be able to
            cancel this action!
          </h2>
          <div className={s.confirmationBtns}>
            <button
              className={s.yesBtn}
              //   onSubmit={handleDeleteBoard(board._id)}
            >
              Yes
            </button>
            <button className={s.noBtn} onClick={() => dispatch(closeModal())}>
              No
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
