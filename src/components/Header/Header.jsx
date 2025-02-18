import React from 'react';
import s from './Header.module.css';
import sprite from '../../icons/all-icons.svg';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <svg className={s.burgerMenu} width="24" height="24">
          <use href={`${sprite}#icon-menu`} />
        </svg>
        <div className={s.themeContainer}>
          <p className={s.themeText}>Theme</p>
          <svg className={s.arrowDown} width="16" height="16">
            <use href={`${sprite}#icon-chevron-down`} />
          </svg>
        </div>
        <div className={s.userContainer}>
          <p className={s.userName}>Name</p>
          <svg className={s.userAvatar} width="32" heigh="32">
            <use href={`${sprite}#icon-user`} />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
