import React from 'react';
import s from './SideBar.module.css';
import sprite from '../../icons/all-icons.svg';
import cactus from '../../icons/cactus.png';
import clsx from 'clsx';

const SideBar = ({ isOpen }) => {
  return (
    <section className={clsx(s.sideBarSection, { [s.open]: isOpen })}>
      <div className={s.sideBarContainer}>
        <div className={s.logoBox}>
          <span className={s.mailLogoSpan}>
            <svg className={s.mainLogo} width="12" height="16">
              <use href={`${sprite}#icon-taskpro-icon`} />
            </svg>
          </span>
          <h1 className={s.mainTitle}>Task Pro</h1>
        </div>

        <div className={s.createBoardBox}>
          <span className={s.myBoardsTitle}>My boards</span>
          <div className={s.addBoard}>
            <span className={s.createBordTitle}>Create a new board</span>
            <span className={s.addBoardPlusBtn}>
              <svg className={s.addBoardPlus} width="20" height="20">
                <use href={`${sprite}#icon-plus`} />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <ul className={s.boardsList}>
        <li className={s.boardItem}>Board 1</li>
        <li className={s.boardItem}>Board 2</li>
      </ul>
      <div className={s.sideBarContainer}>
        <div className={s.needHelpBox}>
          <img src={cactus} alt="A little cactus image" />
          <p className={s.needHelpDescription}>
            If you need help with <span>TaskPro</span>, check out our support
            resources or reach out to our customer support team.
          </p>
          <button className={s.needHelpBtn}>
            <svg width="20" height="20">
              <use href={`${sprite}#icon-help-circle`} />
            </svg>
            Need help?
          </button>
        </div>
        <button className={s.logoutBtn}>
          <svg className={s.logoutIcon} width="32" height="32">
            <use href={`${sprite}#icon-login`} />
          </svg>
          Log out
        </button>
      </div>
    </section>
  );
};

export default SideBar;
