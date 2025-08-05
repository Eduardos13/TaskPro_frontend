import { Field, Form, Formik } from 'formik';
import s from './AddBoardForm.module.css';
import sprite from '../../../../icons/all-icons.svg';

const AddBoardForm = () => {
  return (
    <>
      <h2 className={s.boardFormTitle}>New board</h2>
      <Formik>
        <Form>
          <Field
            className={s.formField}
            name="boardTitle"
            placeholder="Title"
          />
        </Form>
      </Formik>
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
      <button type="submit" className={s.submitAddBoard}>
        <span className={s.submitIcon}>
          <svg width="14" height="14">
            <use href={`${sprite}#icon-plus`} />
          </svg>
        </span>
        Create
      </button>
    </>
  );
};

export default AddBoardForm;
