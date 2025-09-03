import Modal from '../../Modal/Modal.jsx';
import s from './Confirmation.module.css';

const ConfirmationModal = () => {
  return (
    <Modal>
      <div className={s.container}>
        <div className={s.confirmationContent}>
          <h2 className={s.confirmTitle}>
            Do you really want to take this action? You will not be able to
            cancel this action!
          </h2>
          <div className={s.confirmationBtns}>
            <button className={s.yesBtn}>Yes</button>
            <button className={s.noBtn}>No</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
