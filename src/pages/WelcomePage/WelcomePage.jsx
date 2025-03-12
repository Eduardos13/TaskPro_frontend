import React from 'react';
import s from './WelcomePage.module.css';
import main_img from '../../icons/main-image.png';
import sprite from '../../icons/all-icons.svg';

const WelcomePage = () => {
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
          <button className={s.regBtn}>Registration</button>
          <button className={s.logBtn}>Log in</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
