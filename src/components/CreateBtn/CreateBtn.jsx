import s from './CreateBtn.module.css';
import sprite from '../../icons/all-icons.svg';

const CreateBtn = () => {
  return (
    <button type="submit" className={s.CreateBtn}>
      <span className={s.createIcon}>
        <svg width="14" height="14">
          <use href={`${sprite}#icon-plus`} />
        </svg>
      </span>
      Create
    </button>
  );
};

export default CreateBtn;
