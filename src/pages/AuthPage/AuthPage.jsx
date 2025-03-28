import React from 'react';
import s from './AuthPage.module.css';
import main_img from '../../icons/main-image.png';
import sprite from '../../icons/all-icons.svg';
import { NavLink, Outlet } from 'react-router-dom';

const AuthPage = () => {
  return (
    <div className={s.welcome}>
      <div className={s.container}>
        <div className={s.logoBox}>
          <img
            className={s.mainAvatar}
            src={main_img}
            alt="an avatar of person with laptop"
          />
          <div className={s.taskLogo}>
            <span className={s.logoWrapper}>
              <svg className={s.logo}>
                <use href={`${sprite}#icon-taskpro-icon`} />
              </svg>
            </span>
            <h1 className={s.mainTitle}>Task Pro</h1>
          </div>
        </div>
        <p className={s.description}>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </p>
        <div className={s.authBtns}>
          <NavLink to="/auth/register" className={s.regBtn}>
            Registration
          </NavLink>
          <NavLink to="/auth/login" className={s.logBtn}>
            Log in
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthPage;
