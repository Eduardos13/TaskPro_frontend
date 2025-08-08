import s from './EditBtn.module.css';
import sprite from '../../icons/all-icons.svg';

const EditeBtn = () => {
  return (
    <button type="submit" className={s.editBtn}>
      <span className={s.createIcon}>
        <svg width="14" height="14">
          <use href={`${sprite}#icon-plus`} />
        </svg>
      </span>
      Edit
    </button>
  );
};

export default EditeBtn;
