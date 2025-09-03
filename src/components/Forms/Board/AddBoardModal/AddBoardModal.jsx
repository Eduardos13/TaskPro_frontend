import { Field, Form, Formik } from 'formik';
import s from './AddBoardModal.module.css';
import sprite from '../../../../icons/all-icons.svg';
import { useDispatch } from 'react-redux';
import { createBoardThunk } from '../../../../redux/board/operations.js';
import CreateBtn from '../../../CreateBtn/CreateBtn.jsx';
import { closeModal } from '../../../../redux/modal/slice';
import Modal from '../../../Modal/Modal.jsx';

const AddBoardModal = () => {
  const dispatch = useDispatch();

  // const handleSubmit = (values, options) => {
  //   dispatch(createBoardThunk(values));
  //   options.resetForm();
  // };

  const handleSubmit = async (values, options) => {
    const payload = { title: values.boardTitle.trim() };
    if (!payload.title) return;

    const action = await dispatch(createBoardThunk(payload));
    if (createBoardThunk.fulfilled.match(action)) {
      dispatch(closeModal());
      options.resetForm();
    }
  };

  const initialValues = {
    boardTitle: '',
  };
  return (
    <Modal>
      <h2 className={s.boardFormTitle}>New board</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            className={s.formField}
            name="boardTitle"
            placeholder="Title"
          />

          <div>
            <p className={s.iconsTitle}>Icons</p>
            <ul className={s.iconsList}>
              <li className={s.iconItem}>
                <svg className={s.icon} width="18" height="18">
                  <use href={`${sprite}#icon-Project`} />
                </svg>
              </li>
              <li className={s.iconItem}>
                <svg className={s.icon} width="18" height="18">
                  <use href={`${sprite}#icon-star`} />
                </svg>
              </li>
              <li className={s.iconItem}>
                <svg className={s.icon} width="18" height="18">
                  <use href={`${sprite}#icon-loading`} />
                </svg>
              </li>
              <li className={s.iconItem}>
                <svg className={s.icon} width="18" height="18">
                  <use href={`${sprite}#icon-puzzle`} />
                </svg>
              </li>
              <li className={s.iconItem}>
                <svg className={s.icon} width="18" height="18">
                  <use href={`${sprite}#icon-container`} />
                </svg>
              </li>
              <li className={s.iconItem}>
                <svg className={s.icon} width="18" height="18">
                  <use href={`${sprite}#icon-lightning`} />
                </svg>
              </li>
              <li className={s.iconItem}>
                <svg className={s.icon} width="18" height="18">
                  <use href={`${sprite}#icon-colors`} />
                </svg>
              </li>
              <li className={s.iconItem}>
                <svg className={s.icon} width="18" height="18">
                  <use href={`${sprite}#icon-hexagon`} />
                </svg>
              </li>
            </ul>
          </div>
          <div>
            <p className={s.backgroundTitle}>Background</p>
            <ul className={s.backgroundsList}>
              <li className={s.backgroundsItem}>1</li>
              <li className={s.backgroundsItem}>2</li>
              <li className={s.backgroundsItem}>3</li>
              <li className={s.backgroundsItem}>4</li>
              <li className={s.backgroundsItem}>5</li>
              <li className={s.backgroundsItem}>6</li>
              <li className={s.backgroundsItem}>7</li>
              <li className={s.backgroundsItem}>8</li>
              <li className={s.backgroundsItem}>9</li>
              <li className={s.backgroundsItem}>10</li>
              <li className={s.backgroundsItem}>11</li>
              <li className={s.backgroundsItem}>12</li>
              <li className={s.backgroundsItem}>13</li>
              <li className={s.backgroundsItem}>14</li>
              <li className={s.backgroundsItem}>15</li>
              <li className={s.backgroundsItem}>16</li>
            </ul>
          </div>
          <CreateBtn />
        </Form>
      </Formik>
    </Modal>
  );
};

export default AddBoardModal;
